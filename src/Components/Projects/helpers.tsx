import { DemoSite, DemoObject } from "./types";

// Convert raw URLs to embedded URLs (for supported sites)
const toEmbedUrl = (site: DemoSite, url: string) => {
  try {
    const u = new URL(url);
    switch (site) {
      case "codesandbox": {
        // https://codesandbox.io/s/<id> -> /embed/<id>
        const id = u.pathname.split("/").filter(Boolean).pop();
        // Code sandbox parameters: enable code mirror, hide navigation
        return id
          ? url
          : url;
      }
      case "codepen": {
        // https://codepen.io/<user>/pen/<id> -> /embed/<id>?default-tab=result
        const id = u.pathname.split("/").filter(Boolean).pop();
        return id ? `${u.origin}/embed/${id}?default-tab=result` : url;
      }
      case "observable": {
        // https://observablehq.com/@user/notebook -> /embed/@user/notebook
        return `https://observablehq.com/embed${u.pathname}`;
      }
      case "generic":
      default:
        return url;
    }
    // Default to original URL on error
  } catch {
    return url;
  }
};

// Create the set of tags for each demo item; use sets to ignore duplicates
const makeTags = (demos: DemoObject[]) => {
  const s = new Set<string>();
  // Check each demo's tags; add each to set
  demos.forEach((d) => d.tags?.forEach((t) => s.add(t)));
  // Sort and return
  return Array.from(s).sort((a, b) => a.localeCompare(b));
};

export { toEmbedUrl, makeTags };
