import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-400 via-blue-500 to-blue-700 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Book courts instantly <span className="text-yellow-300">— Play, Track, Enjoy!</span>
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Discover available slots, book your favorite courts, and manage your bookings with ease.
          </p>
          <div className="flex gap-4">
            <a href="#slots" className="px-6 py-3 rounded-full bg-yellow-400 text-blue-900 font-bold shadow hover:bg-yellow-300 transition">
              View Slots
            </a>
            <button className="px-6 py-3 rounded-full bg-white text-blue-700 font-bold shadow hover:bg-blue-100 transition">
              How it works
            </button>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="rounded-2xl p-8 bg-white shadow-lg text-center">
            <p className="text-sm text-gray-500">Court Booking System</p>
            <p className="mt-2 text-2xl font-bold text-blue-600">Demo Application</p>
          </div>
        </div>
      </div>
    </section>
  );
}