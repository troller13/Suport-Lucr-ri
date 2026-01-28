"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Cum pot comanda o teză?",
    answer:
      "Poți completa formularul de contact de pe site sau ne poți scrie direct pe email. Vom discuta detaliile temei și termenul de livrare.",
  },
  {
    question: "Sunt respectate toate cerințele facultății?",
    answer:
      "Da! Fiecare lucrare este redactată conform metodologiei facultății și cerințelor specifice fiecărui student.",
  },
  {
    question: "Ce domenii acoperiți?",
    answer:
      "Acoperim o gamă largă de domenii, printre care Drept, Filologie, Istorie și Filosofie, Economie, Matematică și Informatică, Biologie, Chimie, Psihologie, Arte Plastice și Design și multe altele.",
  },
  {
    question: "Lucrarea va trece verificarea antiplagiat?",
    answer:
      "Da! Toate lucrările sunt originale și verificate pentru a respecta standardele antiplagiat.",
  },
  {
    question: "Care este termenul de livrare?",
    answer:
      "Termenul depinde de complexitatea lucrării, dar ne asigurăm că este respectat și confirmat împreună cu clientul înainte de începerea proiectului.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fdf9f4] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-12 text-center">
          Întrebări frecvente
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.button
                  className="w-full text-left px-6 py-4 bg-white font-medium flex justify-between items-center hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{item.question}</span>
                  <motion.span
                    className="text-2xl"
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      scale: isOpen ? 1.3 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    +
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="px-6 py-4 bg-gray-50 text-gray-700 text-base"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
