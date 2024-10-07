// FAQItem.tsx
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-200">
      <button
        className="w-full text-left py-3 px-5 text-white font-semibold text-lg flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="py-3 px-5 text-white">{answer}</p>}
    </div>
  );
};

export default FAQItem;
