import React, { useEffect, useRef } from "react";

export default function Privacy({ open, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[100]
        bg-black/50 backdrop-blur-sm
        flex items-center justify-center
        transition-opacity duration-300
      `}
      onClick={onClose} 
      aria-hidden="true"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Privacy Policy"
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className={`
          w-[500px] h-[450px]
          bg-white rounded-2xl shadow-xl
          p-6
          transition-transform duration-300 ease-out
          animate-in
        `}
        style={{
    
          transform: "translateY(0)",
          animation: "dialogPop 200ms ease-out"
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <div className="h-[280px] overflow-auto text-sm text-gray-600 leading-relaxed">
          Welcome, By using this app, you agree to  some rules:<br></br>

          Cookies – Not the digital ones. Real cookies. If you have them, please share. <br />

          Surveillance – We don’t spy on you, we actually can't. <br />

          Data Sharing – We are not Sharing any of your data, relax <br />

          Updates – This policy may change if we suddenly become billionaires <br />
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 rounded border border-gray-300 hover:bg-gray-50"
          >
            Close
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 rounded bg-blue-500 text-white hover:opacity-90"
          >
            I Understand
          </button>
        </div>
      </div>

      <style>{`
        @keyframes dialogPop {
          from { transform: translateY(8px) scale(0.98); opacity: 0; }
          to   { transform: translateY(0)   scale(1);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}
