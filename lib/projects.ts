export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "sporcle-league",
    title: "Sporcle League",
    year: "2024—",
    role: "Solo — design, product, engineering",
    summary:
      "A competitive quiz platform with real-time battle royale, playoff brackets, and an XP progression system.",
    description:
      "Single-page web app built on vanilla JS and Firebase. Features include real-time Battle Royale games, a full playoff tournament system with veto mechanics and live bracket visualization, role-based access control, and Stripe-powered subscriptions. Designed around a custom visual system with a distinctive color palette and display type.",
    stack: [
      "JavaScript",
      "Bootstrap 5",
      "Firebase / Firestore",
      "Cloud Functions",
      "Stripe",
    ],
    links: [
      { label: "Live site", href: "#" },
      { label: "Case study", href: "#" },
    ],
  },
  {
    slug: "im-tourn",
    title: "I'm Tourn",
    year: "2025",
    role: "Solo project",
    summary:
      "A tournament tool — short description goes here. Tell me more and I'll fill this in.",
    description:
      "Placeholder. Share the details of I'm Tourn (what it does, stack, what you're proud of) and I'll write this section properly.",
    stack: ["TBD"],
    links: [{ label: "Coming soon", href: "#" }],
  },
];
