"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-[#faf8f3] overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 relative">
          <Image
            src="/images/Header_1.jpg"
            alt="Bibliotecă universitară"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/images/Header_2.png"
            alt="Materiale de studiu"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Grid cu text și formular */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Stânga: Text pe card cu fundal */}
        <motion.div
          className="bg-[#faf8f3] p-8 md:p-12 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            ECHIPA NR. 1 ÎN TEHNOREDACTAREA TEZELOR LA COMANDĂ
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            Când timpul este limitat, iar exigențele sunt ridicate, noi îți
            venim în ajutor. Realizăm: teze, rapoarte de practică, referate,
            lucrări individuale, proiecte de cercetare, prezentări power point,
            articole științifice la comandă, adaptate cerințelor tale și
            standardelor academice în vigoare.
          </p>
        </motion.div>

        {/* Dreapta: Formular */}
        <motion.form
          action="https://formsubmit.co/teza_ta@mail.ru"
          method="POST"
          className="w-full bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Mesaj de la Hero Section"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="http://localhost:3000/" />

          <input
            type="text"
            name="firstName"
            placeholder="Nume"
            required
            className="w-full px-4 py-3 border border-[#d4a853] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a853]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Prenume"
            required
            className="w-full px-4 py-3 border border-[#d4a853] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a853]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-[#d4a853] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a853]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Număr de telefon"
            className="w-full px-4 py-3 border border-[#d4a853] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a853]"
          />
          <textarea
            name="message"
            placeholder="Mesaj"
            rows={4}
            required
            className="w-full px-4 py-3 border border-[#d4a853] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a853] resize-none"
          />
          <button
            type="submit"
            className="w-full bg-[#d4a853] hover:bg-[#c49943] text-foreground font-medium py-4 rounded-full transition-colors"
          >
            Trimite
          </button>
        </motion.form>
      </div>
    </section>
  );
}
