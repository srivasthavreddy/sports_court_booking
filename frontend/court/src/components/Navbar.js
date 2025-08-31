import React from "react";  

export default function Navbar({ user, onLogin, onSignup, onLogout }) {
  return (
    <nav className="bg-white shadow flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <span className="bg-blue-600 text-white rounded-full px-3 py-1 font-bold">CB</span>
        <span className="font-bold text-xl text-blue-700">CourtBooking</span>
      </div>
      <div className="flex gap-4 items-center">
        <a href="#slots" className="px-4 py-2 rounded-full bg-green-500 text-white font-bold hover:bg-green-400 transition">
          Book a Slot
        </a>
        {user ? (
          <>
            <span className="text-blue-700 font-bold">{user.name}</span>
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-full bg-red-500 text-white font-bold hover:bg-red-400 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onLogin}
              className="px-4 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
            >
              Login
            </button>
            <button
              onClick={onSignup}
              className="px-4 py-2 rounded-full bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-300 transition"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}