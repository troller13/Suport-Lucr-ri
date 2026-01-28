"use client"; // pentru onClick și animații

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  const longText = `
Suntem o companie cu experiență în domeniul academic, activând de mai mulți ani în realizarea lucrărilor pentru facultăți. 
Ne specializăm în teze de licență și disertații de master, precum și în proiecte și lucrări de curs pentru diverse domenii de studiu, de la economie, drept și inginerie până la IT și științe sociale.

Punem accent pe documentare riguroasă, redactare clară și respectarea tuturor normelor academice. 
Fiecare lucrare este adaptată cerințelor fiecărei instituții și coordonator, garantând originalitate, calitate și livrare la termen.

Echipa noastră oferă suport complet pe tot parcursul colaborării, inclusiv consultanță, revizuiri și ajustări, asigurându-ne că rezultatul final reflectă cele mai înalte standarde academice și satisface așteptările studenților.
`;

  return (
    <>
      <motion.section
        className="bg-[#faf8f3] py-16 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className=""
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
                Despre noi
              </h2>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Suntem o companie specializată în realizarea tezelor pentru
                facultăți, oferind suport academic personalizat și lucrări de
                calitate, adaptate cerințelor fiecărui student.
              </p>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#d4a853] hover:bg-[#c49943] text-foreground font-medium px-8 py-3 rounded-full transition-colors"
              >
                Află mai multe
              </button>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/images/Header1_img.jpg"
                alt="Echipa noastră în ședință"
                width={700}
                height={500}
                className="w-full h-auto rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* MODAL cu fade + scale */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-3xl w-full rounded-lg overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-64">
                <Image
                  src="/images/Header1_img.jpg"
                  alt="Echipa noastră în ședință"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl mb-4"></h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {longText}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
