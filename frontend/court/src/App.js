import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SlotCard from "./components/SlotCard";
import { fetchSlots, bookSlot, signup, login } from "./api";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

function App() {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: "", success: true });
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().slice(0, 10);
  });

  useEffect(() => {
    loadSlots();
  }, [selectedDate]);

  const loadSlots = async () => {
    setLoading(true);
    try {
      const res = await fetchSlots(selectedDate);
      setSlots(res.data);
    } catch (err) {
      setToast({ show: true, message: "Failed to load slots", success: false });
    }
    setLoading(false);
  };

  const handleBook = async (slot) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    try {
      await bookSlot(slot._id, token);
      setToast({ show: true, message: "Slot booked successfully!", success: true });
      loadSlots();
    } catch (err) {
      setToast({ show: true, message: err.response?.data?.msg || "Booking failed", success: false });
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const res = await login({ email, password });
      setUser(res.data.user);
      setToken(res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      setShowLogin(false);
      setToast({ show: true, message: "Login successful!", success: true });
    } catch (err) {
      setToast({ show: true, message: err.response?.data?.msg || "Login failed", success: false });
    }
  };

  const handleSignup = async (name, email, password) => {
    try {
      await signup({ name, email, password });
      setShowSignup(false);
      setShowLogin(true);
      setToast({ show: true, message: "Signup successful! Please login.", success: true });
    } catch (err) {
      setToast({ show: true, message: err.response?.data?.msg || "Signup failed", success: false });
    }
  };

  const handleLogout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setToast({ show: true, message: "Logged out.", success: true });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        user={user}
        onLogin={() => setShowLogin(true)}
        onSignup={() => setShowSignup(true)}
        onLogout={handleLogout}
      />
      <Hero />
      <section id="slots" className="max-w-4xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-blue-700 mb-6">Available Time Slots</h3>
        <div className="mb-6 flex items-center gap-4">
          <label className="font-bold text-blue-700">Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
            className="px-3 py-2 rounded border"
          />
          <button
            onClick={loadSlots}
            className="px-4 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
          >
            Refresh
          </button>
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading slots...</div>
        ) : slots.length === 0 ? (
          <div className="text-center text-gray-500">No slots available for this date.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {slots.map((slot) => (
              <SlotCard key={slot._id} slot={slot} onBook={handleBook} user={user} />
            ))}
          </div>
        )}
      </section>
      {toast.show && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-3 rounded shadow-lg font-bold ${
            toast.success ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
          onClick={() => setToast({ ...toast, show: false })}
        >
          {toast.message}
        </div>
      )}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
          onSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}
      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          onSignup={handleSignup}
        />
      )}
    </div>
  );
}

export default App;