export interface GuestbookEntry {
  name: string;
  message: string;
  // Optional, freeform: "August 2026", "2026-08-31", whatever you like.
  date?: string;
}

// Formspree only collects submissions (into your dashboard/email) — it
// doesn't offer a free way for a static site to read them back and display
// them automatically. So this list is manually curated: check your
// submissions at https://formspree.io/forms/mjyvyygd/submissions, copy over
// the ones you'd like to share publicly, add an entry below, and push.
export const guestbookEntries: GuestbookEntry[] = [];
