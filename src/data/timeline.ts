export interface TimelineEvent {
  // Use whatever precision you actually know: "2015", "Spring 2015",
  // "March 3, 2015" — anything works, it's just displayed as-is.
  date: string;
  title: string;
  description?: string;
}

// Edit this list freely — add, remove, or reorder events. They're rendered
// in the order they appear here, so put them in chronological order.
export const timeline: TimelineEvent[] = [
  {
    date: 'October 31st, 2021',
    title: 'Yuzu is born',
    description:
      'According to legend, this baby was born.',
  },
  {
    date: 'Add a date',
    title: 'A favorite memory',
    description:
      'A specific moment that captures his personality — a funny habit, a favorite walk, a trip.',
  },
  {
    date: 'Add a date',
    title: 'Another milestone',
    description: 'Add as many of these as you like.',
  },
];
