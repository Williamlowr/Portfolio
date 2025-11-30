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
      className="group rounded-2xl border border-zinc-900 overflow-hidden shadow-sm hover:shadow-md hover:border-zinc-700 hover:bg-zinc-900/40 bg-zinc-900/50 backdrop-blur cursor-pointer transition-all"
      onClick={() => onOpen?.(item)}
    >
      <div className="relative bg-zinc-800">
        {/* Fixed aspect ratio container */}
        <div className="aspect-video relative overflow-hidden">
          {/* Scaled iframe wrapper with better positioning */}
          <div 
            className="absolute inset-0 flex items-start justify-start"
            style={{
              transform: 'scale(0.35)',
              transformOrigin: 'top left',
              width: '285.7%', // 100% / 0.35
              height: '285.7%'
            }}
          >
            <iframe
              title={item.title}
              src={embedUrl}
              loading="lazy"
              allow="clipboard-read; clipboard-write; fullscreen; geolocation"
              allowFullScreen
              className="w-full h-full pointer-events-none border-0 bg-white"
              scrolling="no"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </div>
          
          {/* Gradient overlay for better button visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        </div>
        
        {/* Open button with better visibility */}
        <button
          type="button"
          className="absolute right-3 top-3 rounded-xl px-3 py-1.5 text-xs font-medium border border-zinc-600/80 bg-zinc-900/90 hover:bg-zinc-800 shadow-lg backdrop-blur-sm transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onOpen?.(item);
          }}
        >
          Open Embed
        </button>
      </div>

      {/* Title and description */}
      <div className="p-4">
        <h3 className="text-[14.5px] font-semibold leading-tight text-zinc-200">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-1 text-[12.5px] text-zinc-400 line-clamp-2">
            {item.description}
          </p>
        )}
        
        {/* Tags */}
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
        
        {/* Links */}
        <div className="mt-5 mx-10 flex items-end gap-2">
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
            onClick={(e) => e.stopPropagation()}
            className="text-xs underline-offset-3 font-semibold text-zinc-400 hover:underline hover:text-zinc-200 transition-colors"
          >
            Visit site
          </a>
          {item.sourceUrl && (
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => e.stopPropagation()}
              className="ml-auto text-xs font-semibold underline-offset-3 text-zinc-400 hover:underline hover:text-zinc-200 transition-colors"
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