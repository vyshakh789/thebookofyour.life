# Affiliate-link verification prompt

Paste this prompt into Claude when you want a full health-check of every amazon.in affiliate link on `thebookofyour.life`. The prompt is self-contained — Claude does not need prior conversation context.

---

## PROMPT

You are verifying every Amazon affiliate link on `thebookofyour.life`. There are ~91 books, each mapped to an amazon.in product ASIN with affiliate tag `byl0c-21`. A wrong/dead link means: (a) a user lands on a 404 or a different book than what we recommended, and (b) we lose affiliate revenue. Catch every kind of failure.

### Inputs

1. **Source of truth** — read the current ASIN map from this file:
   `/Users/vyshakh/Documents/Claude/projects/Find your philosophy/index.html`
   It contains a JS object `const ASINS = { "Title|Author": "ASIN", ... };` near line 1030. Extract every entry. Do NOT use any cached/older list — read the file fresh.

2. **Constructed URL pattern**: `https://www.amazon.in/dp/{ASIN}/?tag=byl0c-21`

### What counts as a failure (flag every one of these)

For each book, navigate to the constructed URL and check:

1. **DEAD_404** — page title contains "Page Not Found" / "Looking for something" / "Dogs of Amazon". ASIN no longer exists.
2. **WRONG_BOOK** — page loads a real product but the title or author does not match the expected book. Allow edition suffixes ("Penguin Classics", "Premium Paperback", "Mass Market Edition"). Flag only if it's clearly a different book or a different author. Example: an ASIN that resolves to "The Black Swan" when we expected "Antifragile".
3. **WRONG_FORMAT** — page is an audiobook, Kindle-only, or activity book when we want a paperback/hardcover of the actual title. Audiobook/Kindle is acceptable ONLY if no print edition exists on amazon.in under any ASIN.
4. **UNBUYABLE** — page loads correctly but shows "Currently unavailable", "Out of stock", no buy box, no "Add to Cart" or "Buy now" CTA, or "Temporarily out of stock" with no third-party seller. The user can't act → dead affiliate revenue.
5. **GEO_REDIRECT** — amazon.in redirects to amazon.com or another locale, OR the page says "This title is not available in your location." Indian users can't buy.
6. **PRICE_ABSURD** — paperback listed above ₹3,000 when a normal Indian edition exists at ₹200–500 (e.g., the ASIN is for a US import). If you suspect this, do a quick search for the same title+author on amazon.in and report the cheaper alternative ASIN. Do NOT flag legitimately expensive books (specialist/academic titles like "Lives of the Eminent Philosophers" can cost ₹1,500+ legitimately).
7. **TAG_STRIPPED** — after redirects, the final URL no longer contains `tag=byl0c-21`. (Rare on `/dp/ASIN`, more common on `/gp/product`.)
8. **CAPTCHA_BLOCK** — Amazon serves a "Robot Check" / "Enter the characters you see" page. This is NOT a real failure of the link. Mark it as CAPTCHA_BLOCK and retry with a different strategy (WebSearch verification with the ASIN + title, or Chrome MCP if available). Do not report CAPTCHA_BLOCK as the final verdict — keep retrying until you get a real verdict for that book.

### Verification strategy (pick the best tool you have)

- **First choice**: Chrome MCP tools (`mcp__chrome-devtools__navigate_page` + `mcp__chrome-devtools__evaluate_script`). Real browser, sees the real DOM, can read `#productTitle`, `#bylineInfo`, `#availability`, `#priceblock_*`, and any "not available" banner. This is the only reliable way to catch UNBUYABLE and PRICE_ABSURD.
- **Second choice**: WebFetch on the URL. Faster but Amazon will often 500 / captcha. The HTML still contains `<title>` and `productTitle` enough to catch DEAD_404 and WRONG_BOOK.
- **Last resort**: WebSearch for `"ASIN" amazon.in` and verify the snippet matches the expected book. Weakest signal — only good for confirming an ASIN is alive, not for UNBUYABLE / PRICE_ABSURD.

If Amazon bot-blocks you on the first round, switch tools instead of giving up.

### Output

A single markdown table with one row per book. Include a verdict column and a reason for any non-OK row.

```
| # | Title | Author | ASIN | Verdict | Reason | Suggested fix |
|---|---|---|---|---|---|---|
| 1 | A Tale for the Time Being | Ruth Ozeki | 1786893908 | OK |  |  |
| 22 | Justice | Michael Sandel | 0141041339 | DEAD_404 | Page Not Found on amazon.in | 0141041331 (verified — "Justice: What's the Right Thing to Do?" by Michael J. Sandel) |
```

At the end, print a summary line: `Total: X OK, Y flagged (Z DEAD_404, A WRONG_BOOK, B UNBUYABLE, ...)`.

### Rules

- **Read the ASIN map fresh from `index.html`** — don't trust any list pasted into the prompt.
- **Parallelize**: split the 91 books into 4 sub-tasks and dispatch agents in parallel for the verification pass. Do not verify serially.
- **Do not auto-fix.** Even if you find the correct replacement ASIN, do NOT edit `index.html` or redeploy. Report findings and wait for the user to confirm fixes.
- **Be efficient**: don't burn a query on a book you've already verified.
- **Confidence threshold**: only mark a row as flagged when you have direct evidence. If the page is ambiguous (title shown but no byline), do one extra check before flagging.

### Edge cases to handle gracefully

- Translated/edited classics often byline as "Author (Robert Dobbin, ed.)" or "Annaeus Lucius Seneca" — same author, just different name format. Not a failure.
- Some Penguin editions show no `productTitle` but a different DOM element (h1 inside `#title`). Look at both.
- Books like "Hagakure" and "Bushido" have multiple legitimate editions. Wrong edition is OK as long as title + author match.
- Cookbook/specialty books (e.g., "The Japanese Art of the Cocktail") often resolve to hardcover-only listings on amazon.in — acceptable.
- Sanskrit/Hindi titles in Roman script (Bhagavad Gita, Upanishads, Karma Yoga) — the byline might be a translator. Match on title alone for these.

Begin.
