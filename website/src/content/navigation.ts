export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Marketing", href: "/services/ai-marketing" },
      { label: "Search Visibility", href: "/services/search-visibility" },
      {
        label: "Performance Marketing",
        href: "/services/performance-marketing",
      },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Web Development", href: "/services/web-development" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blog" },
];

export const footerNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
