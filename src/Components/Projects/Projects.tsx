import { useMemo, useState } from "react";
import TagPill from "./TagBar";
import SearchBox from "./SearchBox";
import { EmptyState } from "./SearchBox";
import { DemoProps, DemoObject } from "./types";
import { toEmbedUrl, makeTags } from "./helpers";
import Modal from "./Modal";
import DemoCard from "./DemoCard";
import { DEMO_ITEMS } from "./demo-data";

export default function Projects({ demos = DEMO_ITEMS }: DemoProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [modal, setModal] = useState<DemoObject | null>(null);
  const tags = useMemo(() => makeTags(demos), [demos]);

  // Filter projects based on search query and active tag
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return demos.filter((d) => {
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
  }, [demos, query, activeTag]);

  // Build project page
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <header className="mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-200 tracking-tight">
          Project Demos
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

        // Project grid
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <DemoCard key={item.id} item={item} onOpen={setModal} />
          ))}
        </div>
      )}

      {/* Embedded Modal */}
      <Modal open={!!modal} onClose={() => setModal(null)} title={modal?.title}>
        {modal && (
          <iframe
            title={modal.title}
            src={toEmbedUrl(modal.site, modal.url)}
            loading="eager"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; clipboard-read; clipboard-write;"
            allowFullScreen
            className="w-full h-full"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        )}
      </Modal>
    </section>
  );
}
