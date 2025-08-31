import React from "react";

function SlotCard({ slot, onBook, user }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
      <div className="text-lg font-semibold text-blue-700 mb-2">{slot.time}</div>
      <div className="mb-2">
        {slot.isBooked ? (
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 font-medium">
            Booked{slot.bookedBy ? ` by ${slot.bookedBy.name}` : ""}
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium">Available</span>
        )}
      </div>
      <button
        disabled={slot.isBooked}
        onClick={() => onBook(slot)}
        className={`mt-2 px-5 py-2 rounded-full font-bold shadow transition ${
          slot.isBooked
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-green-500 text-white hover:bg-green-400"
        }`}
      >
        {slot.isBooked ? "Booked" : "Book Now"}
      </button>
    </div>
  );
}

export default SlotCard;