import React from "react";
import { DemoObject } from "./types";
import { toEmbedUrl } from "./helpers";

// Card component, optional onOpen function to open demo and launch modal
const DemoCard: React.FC<{
  item: DemoObject;
  onOpen?: (item: DemoObject) => void;
}> = ({ item, onOpen }) => {
  const embedUrl = toEmbedUrl(item.site, item.url);
  return (
    <div
      className="group rounded-2xl border border-zinc-900 overflow-hidden shadow-sm hover:shadow-md hover:border-zinc-700 hover:bg-zinc-900/40 bg-zinc-900/50 backdrop-blur cursor-pointer"
      onClick={() => onOpen?.(item)}
    >
      <div className="relative">
        <div className="aspect-video bg-zinc-800 overflow-visible">
          {/* Live embedded iframe */}
          <div className="absolute -top-6 -left-3 origin-top-left scale-[0.4] w-[300%] h-[300%]">
            <iframe
              title={item.title}
              src={embedUrl}
              loading="lazy"
              allow="clipboard-read; clipboard-write; fullscreen; geolocation"
              allowFullScreen
              className="w-full h-full pointer-events-none border-0"
              scrolling="no"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </div>
        </div>
        {/* Open button */}
        <button
          type="button"
          className="absolute right-3 top-3 rounded-xl px-2.5 py-1 text-xs border border-zinc-700/70 bg-zinc-900/70 hover:bg-zinc-900 shadow"
        >
          Open Embed
        </button>
      </div>

      {/* Title and description */}
      <div className="p-4">
        <h3 className="text-[14.5px] font-semibold leading-tight text-zinc-200">
          {item.title}
        </h3>
        {/* Only show description if available; truncate to 2 lines */}
        {item.description && (
          <p className="mt-1 text-[12.5px] text-zinc-400 line-clamp-2">
            {item.description}
          </p>
        )}
        {/* Maps tags to displayed elements */}
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {item.tags?.map((t) => (
            <span
              key={t}
              className="text-[11.5px] rounded-full px-2 py-0.5 border border-zinc-400 bg-zinc-700/50 text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 mx-10 flex items-end gap-2">
          <a
            href={item.url}
            // New tab, no referrer tracking
            target="_blank"
            rel="noreferrer noopener"
            onClick={(e) => e.stopPropagation()}
            className="text-xs underline-offset-3 font-semibold text-zinc-400 hover:underline hover:text-zinc-200"
          >
            Visit site
          </a>
          {item.sourceUrl && (
            <a
              href={item.sourceUrl}
              // New tab, no referrer tracking
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => e.stopPropagation()}
              className="ml-auto text-xs font-semibold underline-offset-3 text-zinc-400 hover:underline hover:text-zinc-200"
            >
              Visit repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
