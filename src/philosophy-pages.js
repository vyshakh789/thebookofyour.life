// thebookofyour.life — SEO landing pages for individual philosophies.
// Each page is server-rendered HTML targeting a single primary keyword
// (e.g. "ikigai meaning") and funnels to the quiz at /.
// Adding a new philosophy: append a record to PHILOSOPHIES and add its slug
// to PHILOSOPHY_SLUGS in src/index.js.

export const PHILOSOPHY_SLUGS = ['ikigai', 'stoicism', 'kintsugi', 'hygge', 'wabi-sabi'];

// ──────────────────────────────────────────────────────────────
// Philosophy data records.
// Fields:
//   slug           url path
//   name           display name
//   tag            one-line tagline
//   primaryKw      target keyword for <title> and H1
//   metaTitle      <title> content (under 60 chars ideally)
//   metaDesc       <meta description> (under 155 chars)
//   pronounce      how to say it (optional)
//   origin         place/era
//   coreIdea       2 sentence summary (top of page, above fold)
//   sections       array of {h2, body}  — long-form explainer
//   faq            array of {q, a}      — FAQPage schema + visible accordion
//   books          array of {title, author, asin, blurb, emoji}
//   related        array of {slug, label}  — internal links
//   quizMatch      what the quiz returns for users who resonate (used in CTA copy)
// ──────────────────────────────────────────────────────────────

const PHILOSOPHIES = {
  ikigai: {
    slug: 'ikigai',
    name: 'Ikigai',
    tag: 'The reason to wake up every morning',
    primaryKw: 'ikigai meaning',
    metaTitle: 'Ikigai Meaning: The Japanese Reason to Wake Up | thebookofyour.life',
    metaDesc: 'Ikigai means "a reason for being". The Okinawan idea behind the world\'s longest-lived people, explained in plain words. Plus 3 books to start with.',
    pronounce: 'ee-key-guy',
    origin: 'Okinawa, Japan',
    coreIdea: 'Ikigai is the Japanese word for "a reason to get out of bed". It sits at the intersection of what you love, what you are good at, what the world needs, and what someone will pay for. The people of Okinawa, who live longer than almost anyone on earth, build their days around it.',
    sections: [
      {
        h2: 'What does ikigai actually mean?',
        body: 'Ikigai (生き甲斐) combines "iki" (to live) and "kai" (worth, value). In Japanese, it is closer to "the thing that makes life worth living" than to any grand life purpose. An Okinawan farmer\'s ikigai might be her morning tea ritual. A grandfather\'s ikigai might be teaching his grandson to fish. It is small, daily, and personal. Western readers often turn ikigai into a four-circle Venn diagram about career and money. That version comes from a Western blog post, not from Japan. The original idea is gentler. It asks: what makes today feel worth being alive for?',
      },
      {
        h2: 'Why Okinawa keeps coming up',
        body: 'Okinawa is a "Blue Zone", one of five places on earth where people routinely live past 100 in good health. Researchers Dan Buettner, Héctor García and Francesc Miralles spent years there asking why. The answer was never a diet hack or a supplement. It was structure: elders had a clear reason to wake up, a tight community ("moai"), purposeful daily work, and they kept moving. When asked their ikigai, they did not pause. They knew.',
      },
      {
        h2: 'How to find your own ikigai',
        body: 'You do not find ikigai by quitting your job and "finding your passion". You find it by paying attention to which 30-minute slots of your week leave you more energised than they found you. Track that for two weeks. The pattern is your ikigai pointing at itself. Then make small commitments to spend more time inside that pattern. Ikigai is built, not discovered.',
      },
      {
        h2: 'Ikigai vs. purpose vs. passion',
        body: 'Purpose is heavy. Passion is loud. Ikigai is quiet. Purpose answers "why am I here on earth". Passion answers "what fires me up". Ikigai answers "why is today worth getting up for". It is the only one of the three that fits inside a single morning.',
      },
    ],
    faq: [
      {
        q: 'Is the four-circle ikigai diagram authentic?',
        a: 'No. The four-circle Venn diagram (love, good at, world needs, paid for) was popularised by Western blog posts around 2014. It is useful as a thinking tool, but Japanese ikigai is older, smaller, and not necessarily tied to work or money.',
      },
      {
        q: 'How do you pronounce ikigai?',
        a: 'Roughly "ee-key-guy". Three even syllables, no stress on any one.',
      },
      {
        q: 'What is a simple example of ikigai?',
        a: 'An elder Okinawan woman whose ikigai is making mochi for her great-grandchildren every Sunday. It gives her a reason to plan the week, walk to the market, stay sharp. That is ikigai working as designed.',
      },
      {
        q: 'Can my job be my ikigai?',
        a: 'It can be part of it. But anchoring ikigai to one paycheque is fragile. The Okinawan model spreads it across small daily acts: garden, friends, craft, ritual. If one disappears, the others hold you up.',
      },
    ],
    books: [
      { title: 'Ikigai', author: 'Héctor García & Francesc Miralles', asin: '178633089X', emoji: '🗾', blurb: 'The daily lives of centenarians who garden, laugh, stay connected, and never retire. Their "secret" is beautifully mundane.' },
      { title: 'The Book of Ichigo Ichie', author: 'Héctor García & Francesc Miralles', asin: '0143134493', emoji: '🍵', blurb: 'Every encounter is unrepeatable. The Japanese tea-ceremony idea that each meeting is once in a lifetime.' },
      { title: 'Wabi Sabi', author: 'Beth Kempton', asin: '0349421005', emoji: '🎋', blurb: 'Permission to stop chasing perfect. The cracked bowl, the fading flower, beauty in imperfection.' },
    ],
    related: [
      { slug: 'wabi-sabi', label: 'Wabi Sabi' },
      { slug: 'kintsugi', label: 'Kintsugi' },
      { slug: 'stoicism', label: 'Stoicism' },
      { slug: 'hygge', label: 'Hygge' },
    ],
    quizMatch: 'Ikigai',
  },

  stoicism: {
    slug: 'stoicism',
    name: 'Stoicism',
    tag: 'The art of being unshakeable',
    primaryKw: 'stoicism for beginners',
    metaTitle: 'Stoicism for Beginners: A Plain Guide | thebookofyour.life',
    metaDesc: 'Stoicism in plain words. What the Stoics actually believed, how Marcus Aurelius, Seneca and Epictetus used it, and 3 books to start with.',
    pronounce: 'STOH-ih-sizm',
    origin: 'Ancient Greece, around 300 BC',
    coreIdea: 'Stoicism is a 2,300-year-old practical philosophy for staying calm and useful when life is hard. It says you have power over your judgements, your effort and your attention, and almost nothing else. The rest is weather. You learn to act well inside it.',
    sections: [
      {
        h2: 'What is Stoicism in simple words?',
        body: 'A Stoic divides the world into two piles: things in their control (their choices, effort, attention, response) and things not in their control (other people, outcomes, weather, the economy, the past). They spend their energy on the first pile and refuse to spend it on the second. That sounds obvious. Almost nobody does it. Stoicism is the practice of actually doing it.',
      },
      {
        h2: 'The three Stoics worth knowing',
        body: 'Marcus Aurelius was the emperor of Rome and wrote a private journal we now call Meditations. Seneca was a billionaire statesman who wrote letters to a friend about anger, grief, and the shortness of life. Epictetus was born a slave, freed, and ran a one-room school where he taught freedom of the mind. A slave, an emperor and a billionaire arrived at the same philosophy from completely different lives. That is the strongest argument for it.',
      },
      {
        h2: 'What Stoicism is not',
        body: 'Stoicism is not "suppress your feelings". The Stoics felt grief, anger and fear like anyone else. They just refused to let those feelings become their plan. It is also not "everything is fine, do not try to change anything". They were active, often in politics, often in war. They tried hard. They just did not tie their inner peace to whether they won.',
      },
      {
        h2: 'How to start practising today',
        body: 'Three small habits. One: each morning, name one likely irritation of the day and pre-decide how the best version of you would respond to it. Two: each evening, write three lines, what went well, what went badly, what you will do differently. Three: when something goes wrong, ask "is this in my control?" If no, drop it. If yes, act. That is 90 percent of Stoicism.',
      },
    ],
    faq: [
      {
        q: 'Is Stoicism a religion?',
        a: 'No. It is a practical philosophy. The original Stoics were vaguely deistic, but you do not need any belief in gods to use the system. Modern Stoics include atheists, agnostics, Christians, Hindus and Buddhists.',
      },
      {
        q: 'Is Stoicism just for men?',
        a: 'No. The recent online version has skewed male, but the original Stoics taught women too, and the philosophy applies to anyone. Some of the most respected modern Stoic teachers are women.',
      },
      {
        q: 'What book should I read first?',
        a: 'Meditations by Marcus Aurelius. It is short, free of jargon, and was never meant to be published, so it reads like a private notebook. Start there. If it lands, move to Seneca.',
      },
      {
        q: 'Is Stoicism the same as cognitive behavioural therapy?',
        a: 'Not the same, but CBT was directly built on Stoic ideas. Albert Ellis, who created the precursor to CBT, said he was influenced by Epictetus. The overlap is the core claim: it is not events that disturb us, it is our judgements about them.',
      },
    ],
    books: [
      { title: 'Meditations', author: 'Marcus Aurelius', asin: '0143456849', emoji: '📖', blurb: 'An emperor\'s private journal. Raw reminders to be patient, to forgive, to not fear death. The most intimate document a world leader ever produced.' },
      { title: 'Discourses and Selected Writings', author: 'Epictetus', asin: '0140449469', emoji: '⛓️', blurb: 'A slave who became the most practical philosopher in history. Every lesson is about freedom that no one can take from you.' },
      { title: 'Letters from a Stoic', author: 'Seneca', asin: '0140442103', emoji: '✉️', blurb: 'Letters to a friend about anger, grief, the shortness of life, and being rich without being owned by wealth.' },
    ],
    related: [
      { slug: 'kintsugi', label: 'Kintsugi' },
      { slug: 'ikigai', label: 'Ikigai' },
      { slug: 'wabi-sabi', label: 'Wabi Sabi' },
      { slug: 'hygge', label: 'Hygge' },
    ],
    quizMatch: 'Stoicism',
  },

  kintsugi: {
    slug: 'kintsugi',
    name: 'Kintsugi',
    tag: 'Your scars are gold',
    primaryKw: 'kintsugi meaning',
    metaTitle: 'Kintsugi Meaning: The Japanese Art of Golden Repair | thebookofyour.life',
    metaDesc: 'Kintsugi is the Japanese art of repairing broken pottery with gold. The deeper philosophy: your wounds are part of the story, not the end of it.',
    pronounce: 'kin-TSOO-ghee',
    origin: '15th century Japan',
    coreIdea: 'Kintsugi is the Japanese art of repairing broken pottery with gold lacquer, so that the cracks become the most beautiful part of the bowl. As a philosophy, it says the same thing about a person: what broke you is now part of what makes you interesting. You are not meant to hide it.',
    sections: [
      {
        h2: 'Where kintsugi came from',
        body: 'The story usually told is that in the 15th century, a Japanese shogun broke a favourite tea bowl and sent it to China for repair. It came back stapled together with ugly metal clamps. Disappointed, he asked Japanese craftsmen to find a more beautiful way. They mixed lacquer with powdered gold and filled the cracks. The repair was now the most striking part of the bowl. The technique stuck, and a 600-year-old philosophy was born.',
      },
      {
        h2: 'Kintsugi as a way of living',
        body: 'A kintsugi life does not pretend nothing bad happened. The divorce, the bankruptcy, the diagnosis, the grief, all of it is held up to the light and traced in gold. You do not become someone new. You become a more interesting version of who you already were, with the breaks visible. People with kintsugi lives are usually easy to be around, because they have stopped trying to hide.',
      },
      {
        h2: 'Kintsugi vs. wabi sabi',
        body: 'They are cousins. Wabi sabi is the wider Japanese aesthetic that finds beauty in imperfection, transience and incompleteness. Kintsugi is a specific application of wabi sabi to broken things. If wabi sabi is the philosophy, kintsugi is one of its most visible practices.',
      },
      {
        h2: 'How to apply kintsugi when life breaks',
        body: 'Three moves. One: name the break out loud, to one trusted person, without softening it. Two: ask what the break is teaching you that no smooth life could have taught. Three: let that lesson change how you spend the next year. The gold is not the lesson itself. The gold is letting the lesson make you visibly different.',
      },
    ],
    faq: [
      {
        q: 'Is kintsugi real or just an idea?',
        a: 'Both. It is a real, practiced craft, you can buy kintsugi repair kits and there are still master artisans in Japan. It is also a wider philosophy that has spread globally as a way to think about resilience.',
      },
      {
        q: 'How do you pronounce kintsugi?',
        a: 'Kin-TSOO-ghee. Three syllables, soft "g" like in "give".',
      },
      {
        q: 'Is kintsugi the same as resilience?',
        a: 'Close, but not identical. Resilience is about bouncing back. Kintsugi is about not bouncing back, staying broken and putting gold in the cracks. The point is not to return to the original shape. The point is to become more beautiful than the original.',
      },
      {
        q: 'What is a good gift for someone going through a hard time?',
        a: 'A kintsugi repair kit, or one of the books below, ideally When Things Fall Apart by Pema Chödrön. The kintsugi framing tells someone "what you are going through is allowed to be part of you", which is often what they most need to hear.',
      },
    ],
    books: [
      { title: 'When Things Fall Apart', author: 'Pema Chödrön', asin: '1611803438', emoji: '💔', blurb: 'Your life just shattered. Chödrön\'s message: stop trying to put it back the way it was. Groundlessness is the beginning.' },
      { title: 'Kintsugi Wellness', author: 'Candice Kumai', asin: '0062669850', emoji: '✨', blurb: 'Japanese wisdom for living well through brokenness. Wabi-sabi, ikigai, and kintsugi as a practical guide to rebuilding yourself.' },
      { title: 'The Japanese Art of the Cocktail', author: 'Masahiro Urushido', asin: '0358362024', emoji: '🥃', blurb: 'A surprise pick. Urushido\'s bartending philosophy is kintsugi applied to craft. Proof that kintsugi is not just for bowls.' },
    ],
    related: [
      { slug: 'wabi-sabi', label: 'Wabi Sabi' },
      { slug: 'ikigai', label: 'Ikigai' },
      { slug: 'stoicism', label: 'Stoicism' },
      { slug: 'hygge', label: 'Hygge' },
    ],
    quizMatch: 'Kintsugi',
  },

  hygge: {
    slug: 'hygge',
    name: 'Hygge',
    tag: 'The art of cozy presence',
    primaryKw: 'hygge meaning',
    metaTitle: 'Hygge Meaning: The Danish Art of Cozy | thebookofyour.life',
    metaDesc: 'Hygge (HOO-ga) is the Danish art of warmth, intimacy and presence. Why Denmark is the world\'s happiest country, and 3 books to feel it.',
    pronounce: 'HOO-ga',
    origin: 'Denmark',
    coreIdea: 'Hygge is the Danish word for a quality of cosy, present, candle-lit togetherness that is almost impossible to translate. It is the feeling of warm socks, a friend, a mug of something hot, and nowhere else you need to be. Denmark is consistently one of the world\'s happiest countries, and Danes will tell you hygge is most of why.',
    sections: [
      {
        h2: 'How to pronounce and use the word',
        body: 'It is "HOO-ga", not "hig-gee". Hygge is mostly used as a noun ("we had so much hygge"), sometimes as an adjective ("a hygge evening"). Danes use it the way English speakers use "cosy", but with more weight. A room can be hygge. A person can make a room hygge. An evening can have a lot of hygge or none.',
      },
      {
        h2: 'What hygge actually looks like',
        body: 'Soft, low light, usually candles. Wool socks. A blanket within reach. A small group of people you already trust, so the conversation can be quiet. A drink, often warm. No phones on the table. No agenda. Nothing being optimised. The point is to feel safe enough to slow down, in a country where the winter is long and dark, this matters. Denmark sells more candles per person than almost anywhere on earth.',
      },
      {
        h2: 'Hygge is not just winter or just indoors',
        body: 'Westerners often picture hygge as a fireplace in December. Danes also have summer hygge: a long lunch in the garden, the kids asleep on the grass, an extra hour because nobody wants to leave. The constant is presence with people you love, not the season or the candle count.',
      },
      {
        h2: 'How to add hygge to your week',
        body: 'Pick one evening a week. Same evening, same people. Phones in a drawer. Soft light only. One slow meal that takes longer than it needs to. Repeat. Within a month it becomes the part of the week you protect first. That is hygge doing its job.',
      },
    ],
    faq: [
      {
        q: 'How is hygge different from cosy?',
        a: '"Cosy" is mostly about the physical setting. Hygge is the setting plus the company plus the absence of pressure. You can be cosy alone, but real hygge usually has at least one other person in it.',
      },
      {
        q: 'Is hygge the same as lagom?',
        a: 'No. Lagom is Swedish and means "just the right amount", a philosophy of balance. Hygge is Danish and is about warmth and presence. They are friendly cousins from neighbouring countries.',
      },
      {
        q: 'Can you have hygge in a hot climate?',
        a: 'Yes. The aesthetic shifts, monsoon evenings, low fans, a warm dal, friends staying past midnight, but the core (warmth, people, no rush) travels fine.',
      },
      {
        q: 'Is hygge just marketing?',
        a: 'The 2016 global boom around hygge was partly marketing. The underlying Danish practice is centuries old and the happiness data is real. Skip the candle catalogues, keep the idea.',
      },
    ],
    books: [
      { title: 'The Little Book of Hygge', author: 'Meik Wiking', asin: '0241283914', emoji: '🕯️', blurb: 'A guidebook to the Danish art of happiness. Candles, cocoa, togetherness, and the radical act of being fully present.' },
      { title: 'The Year of Living Danishly', author: 'Helen Russell', asin: '1785780239', emoji: '🇩🇰', blurb: 'A British journalist moves to rural Denmark and spends a year figuring out why everyone is so damn happy.' },
      { title: 'My Year of Rest and Relaxation', author: 'Ottessa Moshfegh', asin: '1784707422', emoji: '💊', blurb: 'Anti-hygge on the surface, a radical commentary on what happens when comfort becomes escape.' },
    ],
    related: [
      { slug: 'ikigai', label: 'Ikigai' },
      { slug: 'wabi-sabi', label: 'Wabi Sabi' },
      { slug: 'kintsugi', label: 'Kintsugi' },
      { slug: 'stoicism', label: 'Stoicism' },
    ],
    quizMatch: 'Hygge',
  },

  'wabi-sabi': {
    slug: 'wabi-sabi',
    name: 'Wabi Sabi',
    tag: 'Beauty in the imperfect and the impermanent',
    primaryKw: 'wabi sabi meaning',
    metaTitle: 'Wabi Sabi Meaning: The Japanese Beauty of Imperfection | thebookofyour.life',
    metaDesc: 'Wabi sabi is the Japanese art of finding beauty in imperfection, age and impermanence. A plain-words guide, plus 3 books and a 30-second quiz.',
    pronounce: 'WAH-bee SAH-bee',
    origin: '16th century Japan, rooted in Zen Buddhism',
    coreIdea: 'Wabi sabi is the Japanese aesthetic philosophy that finds beauty in things that are imperfect, weathered and transient. The cracked bowl. The faded photograph. The first grey hair. Nothing in nature is permanent or symmetrical, and wabi sabi says that is the point, not the flaw.',
    sections: [
      {
        h2: 'What "wabi" and "sabi" actually mean',
        body: 'The two words started separately. "Wabi" originally meant the loneliness of living in nature, away from society, and evolved to mean rustic simplicity, freshness and quietness. "Sabi" meant the beauty that comes with age, the patina on old wood, the lichen on a stone, the wrinkles on a face. Combined, wabi sabi is the beauty of things that have lived a real life and show it.',
      },
      {
        h2: 'Where wabi sabi came from',
        body: 'In 16th-century Japan, tea ceremony was a status game. Lords competed with imported Chinese porcelain, perfect, expensive, flawless. Then tea master Sen no Rikyū flipped it. He used cracked local bowls, mossy stones, irregular wooden utensils. He served warlords tea in pottery a peasant could have made. The message: beauty does not come from perfection, it comes from honesty. That was wabi sabi entering the culture, and it never left.',
      },
      {
        h2: 'Wabi sabi vs. minimalism',
        body: 'Western minimalism is about reducing to clean lines, white walls and matching everything. Wabi sabi is the opposite of matching. A wabi sabi room has a few old things that do not match, each chosen because it has a story or a mark on it. Minimalism wants to look new. Wabi sabi wants to look loved.',
      },
      {
        h2: 'How to bring wabi sabi into your life',
        body: 'Keep the chipped mug, the one you actually like, not the matching set you never use. Stop apologising for the scar, the grey hair, the laugh line. Buy fewer things, older. Let your home look lived in. When something breaks, ask if it can be repaired in a way that shows the repair, that is kintsugi, the technique that lives downstream of wabi sabi.',
      },
    ],
    faq: [
      {
        q: 'How do you pronounce wabi sabi?',
        a: '"WAH-bee SAH-bee". Four soft syllables, no emphasis.',
      },
      {
        q: 'Is wabi sabi a religion?',
        a: 'No, but it is rooted in Zen Buddhism, which shares its acceptance of impermanence. You do not need to be Buddhist to live wabi sabi.',
      },
      {
        q: 'Is wabi sabi the same as kintsugi?',
        a: 'Kintsugi is one practice that flows from wabi sabi. Wabi sabi is the wider philosophy of beauty in imperfection. Kintsugi is the specific craft of repairing broken pottery with gold so the cracks become the feature.',
      },
      {
        q: 'Can wabi sabi work in modern design?',
        a: 'Yes, and it has quietly become one of the most influential aesthetics in modern interior design, ceramics and fashion. Look at any "Japandi" interior trend, that is wabi sabi running underneath.',
      },
    ],
    books: [
      { title: 'Wabi Sabi', author: 'Beth Kempton', asin: '0349421005', emoji: '🎋', blurb: 'Permission to stop chasing perfect. Kempton lived in Japan for years and writes about the culture of "enough".' },
      { title: 'Goodbye, Things', author: 'Fumio Sasaki', asin: '0393609030', emoji: '🪶', blurb: 'A Japanese minimalist on letting go. A clean entry point into the wabi sabi adjacent world of intentional simplicity.' },
      { title: 'The Book of Ichigo Ichie', author: 'Héctor García & Francesc Miralles', asin: '0143134493', emoji: '🍵', blurb: 'Every encounter is unrepeatable. The Japanese idea that each meeting is once in a lifetime, the impermanence half of wabi sabi.' },
    ],
    related: [
      { slug: 'kintsugi', label: 'Kintsugi' },
      { slug: 'ikigai', label: 'Ikigai' },
      { slug: 'hygge', label: 'Hygge' },
      { slug: 'stoicism', label: 'Stoicism' },
    ],
    // Wabi sabi is not one of the 31 quiz philosophies. We funnel resonant readers
    // to the closest match the quiz can return.
    quizMatch: 'Kintsugi or Mono no Aware',
  },
};

// ──────────────────────────────────────────────────────────────
// Template renderer.
// Inlines all CSS so the page is single-request. Brand vars match
// the main index.html so users feel one site.
// ──────────────────────────────────────────────────────────────
const escapeHtml = (s) => String(s ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const amazonUrl = (asin) => `https://www.amazon.in/dp/${asin}/?tag=byl0c-21`;

function renderBookCard(book) {
  const url = amazonUrl(book.asin);
  return `<a class="book" href="${escapeHtml(url)}" target="_blank" rel="sponsored noopener">
    <div class="book-emoji">${escapeHtml(book.emoji)}</div>
    <div class="book-meta">
      <h3 class="book-title">${escapeHtml(book.title)}</h3>
      <p class="book-author">${escapeHtml(book.author)}</p>
      <p class="book-blurb">${escapeHtml(book.blurb)}</p>
      <span class="book-cta">View on Amazon.in →</span>
    </div>
  </a>`;
}

function renderFaqJsonLd(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

function renderArticleJsonLd(p, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.metaTitle,
    description: p.metaDesc,
    inLanguage: 'en',
    isAccessibleForFree: true,
    mainEntityOfPage: canonical,
    publisher: {
      '@type': 'Organization',
      name: 'thebookofyour.life',
      url: 'https://thebookofyour.life',
    },
  };
}

export function renderPhilosophyPage(slug) {
  const p = PHILOSOPHIES[slug];
  if (!p) return null;

  const canonical = `https://thebookofyour.life/${p.slug}`;
  const articleJsonLd = renderArticleJsonLd(p, canonical);
  const faqJsonLd = renderFaqJsonLd(p.faq);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(p.metaTitle)}</title>
<meta name="description" content="${escapeHtml(p.metaDesc)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="article">
<meta property="og:title" content="${escapeHtml(p.metaTitle)}">
<meta property="og:description" content="${escapeHtml(p.metaDesc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="https://thebookofyour.life/brand/og-card.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(p.metaTitle)}">
<meta name="twitter:description" content="${escapeHtml(p.metaDesc)}">
<link rel="icon" href="/brand/favicon-32.png" type="image/png">
<link rel="apple-touch-icon" href="/brand/favicon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>
<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>
<style>
:root{
  --bg:#0a0a0a;--bg2:#111;--bg3:#151515;
  --gold:#c9a84c;--gold-l:#e8d5a3;--gold-d:#8a7235;--accent:#d4764e;
  --cream:#f5f0e8;--cream-d:#b8b0a0;--dim:#666;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--cream);font-family:'Inter',sans-serif;line-height:1.7;overflow-x:hidden}
a{color:var(--gold);text-decoration:none}
a:hover{color:var(--gold-l)}
::selection{background:var(--gold);color:var(--bg)}

.wrap{max-width:760px;margin:0 auto;padding:48px 24px 80px}

.nav{display:flex;justify-content:space-between;align-items:center;margin-bottom:48px;font-family:'JetBrains Mono',monospace;font-size:.78rem;letter-spacing:2px;text-transform:uppercase}
.nav a{color:var(--cream-d)}
.nav a:hover{color:var(--gold)}
.brand{color:var(--gold)}

.eyebrow{font-family:'JetBrains Mono',monospace;font-size:.72rem;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:18px}
h1{font-family:'Playfair Display',serif;font-size:clamp(2.4rem,5.5vw,3.8rem);line-height:1.1;color:var(--cream);margin-bottom:18px;font-weight:400}
h1 em{font-style:italic;color:var(--gold)}
.tag{font-size:1.15rem;color:var(--cream-d);font-style:italic;margin-bottom:36px;max-width:560px}

.core{background:var(--bg2);border-left:2px solid var(--gold);padding:24px 28px;border-radius:6px;margin-bottom:48px;font-size:1.05rem;color:var(--cream)}

.meta-row{display:flex;flex-wrap:wrap;gap:18px;margin-bottom:48px;font-family:'JetBrains Mono',monospace;font-size:.78rem;color:var(--cream-d)}
.meta-row span{padding:6px 14px;border:1px solid #2a2a2a;border-radius:100px}
.meta-row b{color:var(--gold);font-weight:500;margin-right:6px}

h2{font-family:'Playfair Display',serif;font-size:clamp(1.5rem,3.2vw,2rem);color:var(--cream);margin-top:48px;margin-bottom:18px;font-weight:400;line-height:1.25}
.section p{margin-bottom:18px;color:var(--cream)}

.cta-block{background:linear-gradient(135deg,#15110a 0%,#1a1610 100%);border:1px solid var(--gold-d);border-radius:14px;padding:36px 28px;margin:56px 0;text-align:center}
.cta-block .label{font-family:'JetBrains Mono',monospace;font-size:.72rem;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
.cta-block h2{font-size:clamp(1.4rem,3vw,1.9rem);margin:0 0 12px}
.cta-block p{color:var(--cream-d);margin-bottom:24px;max-width:480px;margin-left:auto;margin-right:auto}
.cta{display:inline-flex;align-items:center;gap:10px;padding:16px 32px;font-size:1rem;font-weight:600;background:var(--gold);color:var(--bg);border:none;border-radius:12px;font-family:'Inter',sans-serif;transition:all .25s ease}
.cta:hover{background:var(--gold-l);color:var(--bg);transform:translateY(-1px)}

.books{display:grid;gap:18px;margin-top:24px}
.book{display:flex;gap:18px;padding:22px;background:var(--bg2);border:1px solid #1f1f1f;border-radius:12px;transition:all .25s ease}
.book:hover{border-color:var(--gold-d);transform:translateY(-2px)}
.book-emoji{font-size:2.2rem;flex-shrink:0;width:56px;height:56px;display:flex;align-items:center;justify-content:center;background:var(--bg3);border-radius:10px}
.book-meta{flex:1;min-width:0}
.book-title{font-family:'Playfair Display',serif;font-size:1.15rem;color:var(--cream);margin-bottom:2px;font-weight:500}
.book-author{font-size:.82rem;color:var(--cream-d);margin-bottom:10px}
.book-blurb{font-size:.92rem;color:var(--cream-d);margin-bottom:10px;line-height:1.6}
.book-cta{font-family:'JetBrains Mono',monospace;font-size:.72rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold)}

.faq{margin-top:24px}
.faq details{background:var(--bg2);border:1px solid #1f1f1f;border-radius:10px;padding:18px 22px;margin-bottom:10px;cursor:pointer}
.faq details[open]{border-color:var(--gold-d)}
.faq summary{font-family:'Playfair Display',serif;font-size:1.1rem;color:var(--cream);list-style:none;outline:none}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:'+';float:right;color:var(--gold);font-size:1.3rem;line-height:1}
.faq details[open] summary::after{content:'−'}
.faq details p{margin-top:14px;color:var(--cream-d);font-size:.95rem}

.related{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
.related a{padding:10px 18px;border:1px solid #2a2a2a;border-radius:100px;font-size:.88rem;color:var(--cream-d);transition:all .25s ease}
.related a:hover{border-color:var(--gold);color:var(--gold)}

.footer{margin-top:80px;padding-top:32px;border-top:1px solid #1f1f1f;font-size:.82rem;color:var(--dim);text-align:center}
.footer a{color:var(--cream-d)}
.disclosure{font-size:.78rem;color:var(--dim);margin-top:24px;font-style:italic;line-height:1.6}

@media(max-width:560px){
  .wrap{padding:32px 18px 64px}
  .core{padding:18px 20px}
  .book{flex-direction:column;gap:14px}
}
</style>
</head>
<body>
<div class="wrap">
  <nav class="nav">
    <a href="/" class="brand">thebookofyour.life</a>
    <a href="/#start">Take the quiz</a>
  </nav>

  <p class="eyebrow">${escapeHtml(p.origin)}</p>
  <h1>${escapeHtml(p.name)}: <em>${escapeHtml(p.tag)}</em></h1>
  <p class="tag">${escapeHtml(p.primaryKw.charAt(0).toUpperCase() + p.primaryKw.slice(1))}, in plain words, with three books to start.</p>

  <div class="core">${escapeHtml(p.coreIdea)}</div>

  <div class="meta-row">
    ${p.pronounce ? `<span><b>Pronounce</b>${escapeHtml(p.pronounce)}</span>` : ''}
    <span><b>Origin</b>${escapeHtml(p.origin)}</span>
    <span><b>Quiz match</b>${escapeHtml(p.quizMatch)}</span>
  </div>

  ${p.sections.map(s => `<section class="section">
    <h2>${escapeHtml(s.h2)}</h2>
    <p>${escapeHtml(s.body)}</p>
  </section>`).join('\n')}

  <div class="cta-block">
    <p class="label">30-second quiz</p>
    <h2>Which of 31 philosophies fits you?</h2>
    <p>Answer eight questions. Get matched to your philosophy, with a book to start. Or send the quiz to a friend as a gift.</p>
    <a class="cta" href="/#start">Find your philosophy →</a>
  </div>

  <section class="section">
    <h2>Three books to begin with</h2>
    <div class="books">
      ${p.books.map(renderBookCard).join('\n')}
    </div>
    <p class="disclosure">Links above are Amazon.in affiliate links. If you buy through them, we earn a small commission at no extra cost to you. It is the only way we keep this site free.</p>
  </section>

  <section class="section">
    <h2>Common questions about ${escapeHtml(p.name.toLowerCase())}</h2>
    <div class="faq">
      ${p.faq.map(f => `<details>
        <summary>${escapeHtml(f.q)}</summary>
        <p>${escapeHtml(f.a)}</p>
      </details>`).join('\n')}
    </div>
  </section>

  <section class="section">
    <h2>Related philosophies</h2>
    <div class="related">
      ${p.related.map(r => `<a href="/${escapeHtml(r.slug)}">${escapeHtml(r.label)}</a>`).join('\n')}
    </div>
  </section>

  <div class="cta-block">
    <p class="label">Or skip ahead</p>
    <h2>Take the quiz now</h2>
    <p>Eight questions. Thirty seconds. One philosophy and one book picked for you.</p>
    <a class="cta" href="/#start">Start the quiz →</a>
  </div>

  <footer class="footer">
    <p>© thebookofyour.life · <a href="/">Home</a> · <a href="/#start">Take the quiz</a></p>
  </footer>
</div>
</body>
</html>`;
}

// Sitemap helper used by src/index.js to serve /sitemap.xml
export function renderSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: 'https://thebookofyour.life/', priority: '1.0' },
    ...PHILOSOPHY_SLUGS.map(slug => ({
      loc: `https://thebookofyour.life/${slug}`,
      priority: '0.8',
    })),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

export function renderRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://thebookofyour.life/sitemap.xml
`;
}
