"use client"; // necesar pentru onClick și interactivitate

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

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
      <section className="bg-[#faf8f3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
                Despre noi
              </h2>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Suntem o companie specializată în realizarea tezelor pentru
                facultăți, oferind suport academic personalizat pentru diverse
                domenii de studiu. Elaborăm lucrări de licență, master și alte
                proiecte academice, cu accent pe calitate, originalitate și
                respectarea cerințelor universitare.
              </p>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#d4a853] hover:bg-[#c49943] text-foreground font-medium px-8 py-3 rounded-full transition-colors"
              >
                Află mai multe
              </button>
            </div>
            <div className="relative">
              <Image
                src="/images/Header1_img.jpg"
                alt="Echipa noastră în ședință"
                width={700}
                height={500}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Imagine */}
            <div className="relative w-full h-64">
              <Image
                src="/images/Header1_img.jpg"
                alt="Echipa noastră în ședință"
                fill
                className="object-cover"
              />
            </div>

            {/* Conținut */}
            <div className="p-6">
              <h3 className="font-serif text-2xl mb-4">Despre noi</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {longText}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
