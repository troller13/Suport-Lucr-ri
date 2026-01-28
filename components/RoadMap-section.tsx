"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "1. Alegerea temei",
    description:
      "Stabilim împreună tema lucrării, obiectivele și cerințele specifice facultății.",
    icon: "📝",
  },
  {
    title: "2. Scrierea lucrării",
    description:
      "Redactăm lucrarea cu argumente clare, structură logică și respectând toate normele academice.",
    icon: "✍️",
  },
  {
    title: "3. Revizuire",
    description:
      "Se fac corectări, verificări antiplagiat și ajustări conform feedback-ului tău.",
    icon: "🔍",
  },
  {
    title: "4. Livrare",
    description:
      "Primești lucrarea finală în format digital, gata pentru predare și apreciere maximă.",
    icon: "📦",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#f9f7f2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 text-center">
          Procesul de realizare a lucrării
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.07 }}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-700 text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
