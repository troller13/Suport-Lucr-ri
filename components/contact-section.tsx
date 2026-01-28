"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.main
      id="contact"
      className="pt-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-12 text-foreground">
        Comandă teza ta!
      </h1>
      <p className="text-gray-700 text-center mb-16">
        Completează formularul de mai jos sau contactează-ne direct pentru
        comenzile tale.
      </p>

      <form
        action="https://formsubmit.co/teza_ta@mail.ru"
        method="POST"
        className="max-w-md mx-auto space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New contact message" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="http://localhost:3000/" />

        <div>
          <label
            htmlFor="firstName"
            className="block text-sm text-foreground mb-2"
          >
            Nume <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-[#d4a853] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#d4a853]"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm text-foreground mb-2"
          >
            Prenume <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-[#d4a853] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#d4a853]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-foreground mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-[#d4a853] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#d4a853]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-foreground mb-2">
            Număr de telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-[#d4a853] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#d4a853]"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm text-foreground mb-2"
          >
            Mesaj
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 border border-[#d4a853] rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[#d4a853] resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#d4a853] hover:bg-[#c49943] text-foreground font-medium py-4 rounded-full transition-colors"
        >
          Trimite
        </button>
      </form>
    </motion.main>
  );
}
