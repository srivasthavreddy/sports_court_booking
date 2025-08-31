import React from "react";

export default function BookingModal({ open, slot, onClose, onConfirm }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl p-6 w-full max-w-md shadow-xl z-10">
        <h3 className="text-xl font-semibold">Confirm booking</h3>
        <p className="mt-2 text-gray-600">You are about to book <strong>{slot?.time}</strong>.</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => onConfirm(slot)} className="flex-1 py-2 rounded-lg bg-blue-600 text-white">Confirm</button>
          <button onClick={onClose} className="flex-1 py-2 rounded-lg border">Cancel</button>
        </div>
      </div>
    </div>
  );
}
