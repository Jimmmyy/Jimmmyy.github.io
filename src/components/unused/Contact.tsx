"use client";

import { useState } from "react";

/**
 * Contact section.
 * Simple contact form for sending a message.
 * Handles email and message input, and displays a confirmation alert on submit.
 */

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message envoyé !\n${email} : ${message}`);
    // TODO: Add actual email sending logic here
  };

  return (
    <section id="contact" className="my-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
        Tu veux collaborer ou juste dire bonjour ? Envoie-moi un message !
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="email"
          placeholder="Ton email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border rounded-md dark:bg-gray-800 dark:text-white"
        />
        <textarea
          placeholder="Ton message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-3 border rounded-md dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
