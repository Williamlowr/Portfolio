// TimelineItem.tsx
import React from "react";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  position: "left" | "right";
  connect?: "left" | "right" | null;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  date,
  position,
  connect = null,
}) => {
  const itemClass = position === "left" ? "flex-row-reverse" : "";

  return (
    <div className={`flex justify-between items-center w-full ${itemClass}`}>
      <div className="order-1 w-1/2"></div>
      <div
        className={
          "z-20 flex items-center justify-center order-1 bg-black w-14 h-14 rounded-full text-white font-bold text-lg relative"
        }
      >
        {date}
        {connect && (
          <div
            className={`
              absolute top-11 transform w-[4px] h-20 bg-gray-400 z-10
              ${connect === "right" ? "-rotate-[38deg] translate-x-9" : "rotate-[38deg] -translate-x-9"}
            `}
          />
        )}
      </div>
      <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-2/5 px-4 py-3 text-center">
        <h3 className="font-bold text-gray-800 text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-center text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
