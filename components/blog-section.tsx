"use client";

import { motion } from "framer-motion";

const domains = [
  "⚖️ Drept",
  "📚 Filologie",
  "🏛 Istorie și Filosofie",
  "📰 Jurnalism și Științe ale Comunicării",
  "💼 Științe Economice",
  "📊 Management",
  "🧮 Matematică și Informatică",
  "🔬 Fizică și Inginerie",
  "🧪 Chimie",
  "🧬 Biologie",
  "🧠 Psihologie, Sociologie și Asistență Socială",
  "🎨 Arte Plastice și Design",
  "💼 Comerț",
  "📦 Merceologie",
  "🌐 Relații Internaționale",
  "💻 IT și Calculatoare",
  "🏥 Medicină și Sănătate",
  "📖 Educație și Științe ale Educației",
  "🎭 Arte și Cultură",
];

export function BlogSection() {
  // După ce lista originală se termină, o dublăm pentru efectul de scroll infinit
  const repeatedDomains = [...domains, ...domains];

  return (
    <section className="bg-[#faf8f3] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-12 text-center">
          Domenii de realizare a lucrărilor
        </h2>

        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }} // se muta de la 0 la -50%
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {repeatedDomains.map((domain, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md text-center font-medium min-w-[200px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.08 }}
            >
              {domain}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
