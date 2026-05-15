-- One-time migration: adds gift_type column to existing gifts table
-- Run: wrangler d1 execute thebookofyourlife-db --remote --file=./migrations/001_add_gift_type.sql --yes
-- Safe to run if already applied — will error harmlessly with "duplicate column" and stop.
ALTER TABLE gifts ADD COLUMN gift_type TEXT DEFAULT 'gift';
