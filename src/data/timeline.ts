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
    date: "October 31st, 2021",
    title: "Yuzu is born",
    description: "According to legend, this baby was born.",
  },
  {
    date: "Dec 31st, 2021",
    title: "Yuzu meets his mommy",
    description:
      "After a tumultuous flight from Denver, Yuzu met his mommy. She warmed her heart for nine weeks prior. There is instant love.",
  },
  {
    date: "May 6th, 2022",
    title: "Yuzu meets his papa",
    description:
      "His mommy and papa met each other the day before. Then Yuzu met him the day after.",
  },
  {
    date: "May 20th, 2022",
    title: "Yuzu meets his grandparents",
    description:
      "His grandma gave him his own filet mignon. He is forever changed.",
  },
];
