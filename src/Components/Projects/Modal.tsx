import React from "react";

// Modal Backdrop
const Backdrop: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <button
    aria-label="Dismiss modal"
    // Allow modal to close on backdrop click
    onClick={onClose}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm"
  />
);

// Modal props
interface ModalProps {
  //  Check if open
  open: boolean;
  // Close function
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

// Modal component
const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  // Only render if open
  if (!open) return null;
  return (
    // Full screen fixed container
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <Backdrop onClose={onClose} />
      <div className="relative z-40 max-w-6xl w-full rounded-xl bg-zinc-900 border border-zinc-700 shadow-xl">
        <div className="flex items-center justify-between p-3 border-b border-zinc-700">
          <div className="font-medium truncate pr-4 text-zinc-300">{title}</div>
          <button
            onClick={onClose}
            className="rounded-lg border border-zinc-700 px-2.5 py-1 text-xs hover:bg-zinc-800 hover:text-zinc-200"
          >
            Close
          </button>
        </div>
        <div className="p-0">
          <div className="h-[80vh]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;