-- D1 Schema for thebookofyour.life
-- Run: wrangler d1 execute thebookofyourlife-db --file=./schema.sql

CREATE TABLE IF NOT EXISTS gifts (
  id TEXT PRIMARY KEY,
  sender_name TEXT NOT NULL,
  sender_email TEXT DEFAULT '',
  recipient_name TEXT NOT NULL,
  personal_note TEXT DEFAULT '',
  status TEXT DEFAULT 'pending',
  gift_type TEXT DEFAULT 'gift',  -- 'gift' (sender→recipient) | 'self' (user took for themselves) | 'birthday' (cron-fired)
  created_at TEXT DEFAULT (datetime('now')),
  completed_at TEXT
);

CREATE TABLE IF NOT EXISTS results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  gift_id TEXT NOT NULL UNIQUE,
  philosophy_key TEXT NOT NULL,
  philosophy_name TEXT NOT NULL,
  runner_up_1 TEXT DEFAULT '',
  runner_up_2 TEXT DEFAULT '',
  book_title TEXT NOT NULL,
  book_author TEXT NOT NULL,
  book_price INTEGER DEFAULT 0,
  book_emoji TEXT DEFAULT '',
  amazon_url TEXT NOT NULL,
  recipient_name TEXT DEFAULT '',
  recipient_phone TEXT DEFAULT '',
  recipient_address TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (gift_id) REFERENCES gifts(id)
);

CREATE TABLE IF NOT EXISTS referrals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_gift_id TEXT NOT NULL,
  ref_name TEXT NOT NULL,
  ref_contact TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_results_gift ON results(gift_id);
CREATE INDEX IF NOT EXISTS idx_referrals_gift ON referrals(source_gift_id);

-- Scheduled birthday gifts. Cron runs daily and looks for entries where
-- the next birthday is exactly 14 days away from today (month/day match).
CREATE TABLE IF NOT EXISTS scheduled_gifts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sender_name TEXT NOT NULL,
  sender_email TEXT NOT NULL,
  recipient_name TEXT NOT NULL,
  recipient_email TEXT NOT NULL,
  birthday TEXT NOT NULL,           -- ISO date YYYY-MM-DD
  birthday_md TEXT NOT NULL,        -- MM-DD slice for daily lookup
  status TEXT DEFAULT 'active',     -- active | fired | cancelled
  last_fired_year INTEGER,          -- year we last fired the reminder, prevents double-fire
  gift_id TEXT,                     -- gift created when the reminder fires
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_sched_md ON scheduled_gifts(birthday_md);
CREATE INDEX IF NOT EXISTS idx_sched_status ON scheduled_gifts(status);
