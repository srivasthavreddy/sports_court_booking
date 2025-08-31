import React, { useEffect } from "react";

export default function Toast({ message, show, onClose, success = true }) {
  useEffect(() => {
    if (!show) return;
    const id = setTimeout(onClose, 2500);
    return () => clearTimeout(id);
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div className={`fixed right-4 bottom-6 p-3 rounded-md shadow-lg z-50 ${success ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
      {message}
    </div>
  );
}
