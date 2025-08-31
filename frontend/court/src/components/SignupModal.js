import React, { useState } from "react";

export default function SignupModal({ onClose, onSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 px-4 py-2 border rounded"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-4 py-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="w-full mb-3 px-4 py-2 rounded-full bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-300 transition"
          onClick={() => onSignup(name, email, password)}
        >
          Sign Up
        </button>
        <button
          className="w-full px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 transition"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}