import React from "react";

export default function BookingPanel({ bookings }) {
  return (
    <aside className="hidden lg:block w-80 bg-white border-l p-4">
      <h4 className="font-semibold text-lg">Your bookings</h4>
      <div className="mt-3 space-y-2">
        {bookings.length === 0 && <p className="text-sm text-gray-500">No bookings yet</p>}
        {bookings.map(b => (
          <div key={b._id} className="p-3 rounded-lg border bg-slate-50">
            <div className="flex justify-between">
              <div>
                <div className="text-sm font-medium">{b.time}</div>
                <div className="text-xs text-gray-500">Court 1</div>
              </div>
              <div className="text-xs text-gray-500">Booked</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
