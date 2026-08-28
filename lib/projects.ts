import type { CategoryId } from "./categories";

export type ProjectStatus = "live" | "offline" | "mixed";

export interface Project {
  slug: string;
  /** Key used to look up translatable copy in messages.projects.items.<key> */
  key: string;
  status: ProjectStatus;
  url?: string;
  categories: Exclude<CategoryId, "all">[];
  stack: string[];
  featured: boolean;
  licensedInIndonesia?: boolean;
  /** Renders the paired mobile / dashboard mockups on the detail page */
  showMockups?: boolean;
}

/**
 * Facts (status, url, stack) are exactly as provided by Soft Step and are
 * locale-independent. Only descriptive copy is translated via
 * messages/*.json under projects.items.<key>.
 *
 * Order matters — this array is rendered as-is on the homepage and the
 * /projects page. Requested order: IndoForm, Valley Order, Boma, Gia, then
 * the remaining WordPress deliveries.
 */
export const projects: Project[] = [
  {
    slug: "indoform",
    key: "indoform",
    status: "live",
    url: "https://www.indoform.id",
    categories: ["ecom", "backend"],
    stack: [
      "Django",
      "NestJS",
      "React",
      "PostgreSQL",
      "Docker",
    ],
    featured: true,
    licensedInIndonesia: true,
    showMockups: true,
  },
  {
    slug: "valley-order",
    key: "valleyOrder",
    status: "live",
    url: "https://valley-order.com/",
    categories: ["backend"],
    stack: [
      "Django REST",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],
    featured: true,
  },
  {
    slug: "boma",
    key: "boma",
    status: "live",
    url: "https://boma.sy/",
    categories: ["ecom", "wordpress"],
    stack: ["WordPress", "WooCommerce", "Flutter"],
    featured: true,
  },
  {
    slug: "gia",
    key: "gia",
    status: "live",
    url: "https://www.giamaharanigroup.com/",
    categories: ["frontend"],
    stack: ["React"],
    featured: true,
  },
  {
    slug: "adam-events",
    key: "adamEvents",
    status: "live",
    url: "https://adamevents.net/",
    categories: ["wordpress"],
    stack: ["WordPress", "Elementor Pro"],
    featured: false,
  },
  {
    slug: "koch-real",
    key: "kochReal",
    status: "live",
    url: "https://kochreal.com",
    categories: ["wordpress"],
    stack: ["WordPress", "Custom Theme", "Performance"],
    featured: false,
  },
  {
    slug: "asamena",
    key: "asamena",
    status: "offline",
    url: "https://asamena.org",
    categories: ["wordpress"],
    stack: ["WordPress", "Custom Theme", "Maintenance"],
    featured: false,
  },
  {
    slug: "ademixvet",
    key: "ademixvet",
    status: "live",
    url: "https://ademixvet.com/",
    categories: ["wordpress"],
    stack: ["WordPress", "Frontend Adjustments", "Optimization"],
    featured: false,
  },
  {
    slug: "gulf-private",
    key: "gulfPrivate",
    status: "live",
    url: "https://gulf-private.com/",
    categories: ["wordpress"],
    stack: ["WordPress", "Custom Theme", "Elementor Pro"],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
