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
    role: "Solo — product, design, engineering",
    summary:
      "A real-time competitive trivia platform where coworkers face off on daily Sporcle quizzes, climb a season leaderboard, and battle through a 32-team playoff bracket.",
    description:
      "Full-stack web app built on Firebase (Firestore, Auth, Cloud Functions, Hosting). Features include a daily quiz leaderboard with a multi-level tiebreaker system, real-time head-to-head matchmaking across nine categories with streak tracking, a 32-team NCAA-style playoff bracket with automatic seeding from season standings, a physics-based quiz wheel, a Hall of Champions with season awards, and a full admin panel for quiz management, points editing, and playoff controls. Security enforced end-to-end via Firestore rules and custom auth claims.",
    stack: [
      "JavaScript",
      "React",
      "Firebase",
      "Firestore",
      "Cloud Functions",
      "Bootstrap 5",
    ],
    links: [
      { label: "Live site", href: "https://sporcleleague.com" },
      { label: "GitHub", href: "https://github.com/JavaJared/Sporcle-League" },
    ],
  },
  {
    slug: "im-tourn",
    title: "I'm Tourn",
    year: "2025—",
    role: "Solo — product, design, engineering",
    summary:
      "A full-stack tournament platform for hosting competitive bracket pools and prediction pools — built for everything from reality TV eliminations to esports finals to local sports leagues.",
    description:
      "Live production app with two parallel pool formats: traditional bracket pools (up to 64 participants, round-by-round predictions, tabloid-format PDF export) and prediction pools for category-based picks like award shows and reality TV. Hosts manage the full lifecycle — setup, result entry, retroactive score recalculation — with inline-editable descriptions, public leaderboards, and a guided 6-step onboarding tour for new users. Built on React and Firebase/Firestore with custom security rules, deployed on Netlify with a GoDaddy domain.",
    stack: [
      "React",
      "JavaScript",
      "Firebase",
      "Firestore",
      "Netlify",
    ],
    links: [
      { label: "Live site", href: "https://imtourn.com" },
      { label: "GitHub", href: "https://github.com/JavaJared/im-tourn" },
    ],
  },
];
