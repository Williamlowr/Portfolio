// Embedded sites
export type DemoSite = "generic" | "codesandbox" | "codepen" | "observable";

// Demo object structure
export type DemoObject = {
  id: string;
  title: string;
  description?: string;
  // Site as category, for embedding
  site: DemoSite;
  //Raw url
  url: string;
  // Github repo, if applicable
  sourceUrl?: string;
  // Tags
  tags?: string[];
  // Thumbnail if needed
  thumbnailUrl?: string;
};

// Demo section props
export type DemoProps = {
  heading?: string;
  subheading?: string;
  demos: DemoObject[];
};