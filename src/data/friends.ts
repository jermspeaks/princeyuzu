export interface Friend {
  // Must match a folder name under src/assets/friends/, e.g. "biscuit" ->
  // src/assets/friends/biscuit/. Lowercase, no spaces.
  slug: string;
  name: string;
  description?: string;
}

// Edit this list freely — add, remove, or reorder Yuzu's friends. They're
// rendered in the order they appear here. Drop each friend's photos into
// src/assets/friends/<slug>/ (see the README in that folder).
export const friends: Friend[] = [
  {
    slug: "friend-mojo",
    name: "Mojo",
    description: "The brother from another mother.",
  },
  {
    slug: "friend-zoey",
    name: "Zoey",
    description:
      "a.k.a Beef Cake. Like a younger sister, this maltipoo is highly energetic and loves to play.",
  },
];
