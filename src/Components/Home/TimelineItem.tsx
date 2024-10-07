// TimelineItem.tsx
import React from "react";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  position: "left" | "right";
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  date,
  position,
}) => {
  const itemClass = position === "right" ? "flex-row-reverse" : "";

  return (
    <div className={`flex justify-between items-center w-full ${itemClass}`}>
      <div className="order-1 w-1/2"></div>
      <div className="z-20 flex items-center order-1 bg-black shadow-xl w-14 h-14 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">{date}</h1>
      </div>
      <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-2/5 px-4 py-3">
        <h3 className="font-bold text-gray-800 text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-center text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
