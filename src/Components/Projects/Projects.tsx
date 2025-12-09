import { useMemo, useState } from "react";
import TagPill from "./TagBar";
import SearchBox, { EmptyState } from "./SearchBox";
import { DemoProps, DemoObject } from "./types";
import { toEmbedUrl, makeTags } from "./helpers";
import Modal from "./Modal";
import DemoCard from "./DemoCard";
import { DEMO_ITEMS } from "./demo-data";

export default function Projects({ demos = DEMO_ITEMS }: DemoProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [modal, setModal] = useState<DemoObject | null>(null);
  const [featuredOpen, setFeaturedOpen] = useState(true);

  const featured = useMemo(
    () => demos.filter((d) => d.featured).sort((a, b) => a.rank - b.rank),
    [demos]
  );
  const regular = useMemo(
    () => demos.filter((d) => !d.featured).sort((a, b) => a.rank - b.rank),
    [demos]
  );

  const searchableProjects = useMemo(
    () => [...regular, ...featured],
    [regular, featured]
  );

  const tags = useMemo(() => makeTags(searchableProjects), [searchableProjects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return searchableProjects.filter((d) => {
      const tagMatch = !activeTag || d.tags?.includes(activeTag);
      const qMatch =
        !q ||
        [d.title, d.description, d.tags?.join(" ")]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q);
      return tagMatch && qMatch;
    });
  }, [searchableProjects, query, activeTag]);

  return (
    <section 
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6"
      style={{ overflowAnchor: 'none' }}
    >
      {featured.length > 0 && (
        <div className="mb-10">
          <div className="flex justify-between items-start w-full py-2">
            <div
              className={`${
                featuredOpen
                  ? "opacity-100"
                  : "opacity-0 h-0 overflow-hidden"
              } transition-all duration-300`}
            >
              <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-1 text-zinc-300 dark:text-zinc-400">
                My hand-picked featured projects.
              </p>
            </div>

            <button
              onClick={() => setFeaturedOpen((x) => !x)}
              className="
                ml-4 px-3 py-1.5
                rounded-lg border border-zinc-700
                bg-zinc-900/60 hover:bg-zinc-800
                text-zinc-300 text-sm font-medium
                transition-colors
              "
            >
              {featuredOpen ? "Hide ▲" : "Show ▼"}
            </button>
          </div>

          {featuredOpen && (
            <div className="relative mt-2">
              <div
                className="
                  flex gap-4 overflow-x-auto pb-2 scrollbar-hide
                "
                style={{ scrollbarWidth: "none", overflowAnchor: "none" }}
              >
                {featured.map((item) => (
                  <div
                    key={item.id}
                    className="flex-none w-[300px]"
                    style={{ overflowAnchor: "none" }}
                  >
                    <DemoCard item={item} onOpen={setModal} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <header className="mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-200 tracking-tight">
          All Demos
        </h2>
        <p className="mt-1 text-zinc-300 dark:text-zinc-400">
          Interactive, embedded projects.
        </p>
      </header>

      {/* Tag filter */}
      <div className="mb-5 flex flex-row gap-3 sm:items-center">
        <div className="flex flex-wrap gap-2 flex-1">
          <TagPill
            label="All"
            active={!activeTag}
            onClick={() => setActiveTag(null)}
          />
          {tags.map((t) => (
            <TagPill
              key={t}
              label={t}
              active={activeTag === t}
              onClick={() => setActiveTag(t)}
            />
          ))}
        </div>

        {/* Search box */}
        <div className="flex-none w-fit">
          <SearchBox value={query} onChange={setQuery} />
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
          style={{ overflowAnchor: "none" }}
        >
          {filtered.map((item) => (
            <DemoCard key={item.id} item={item} onOpen={setModal} />
          ))}
        </div>
      )}

      {/* Modal */}
      <Modal open={!!modal} onClose={() => setModal(null)} title={modal?.title}>
        {modal && (
          <iframe
            title={modal.title}
            src={toEmbedUrl(modal.site, modal.url)}
            loading="eager"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; gyroscope; hid; microphone; midi; usb; clipboard-read; clipboard-write;"
            allowFullScreen
            className="w-full h-full"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        )}
      </Modal>
    </section>
  );
}