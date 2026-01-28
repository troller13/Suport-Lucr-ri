"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "„Am apelat la serviciile dvs. pentru realizarea unei teze de licență și pot spune cu toată sinceritatea că rezultatul a depășit așteptările mele. Lucrarea a fost bine structurată, cu argumente clare, limbaj academic corect și surse actuale. Am apreciat în mod deosebit respectarea termenului limită și comunicarea constantă pe parcursul elaborării. Coordonatorul a evaluat teza foarte bine, iar nota obținută confirmă profesionalismul echipei.”",
    author: "Victor Ciobanu",
    avatar: "/images/avatar-1.jpg",
  },
  {
    quote:
      "„Profesionalism, seriozitate și calitate – acestea sunt primele cuvinte care îmi vin în minte. Teza de master a fost realizată conform cerințelor metodologice ale facultății, cu analize bine argumentate și concluzii relevante. S-a ținut cont de toate observațiile mele, iar lucrarea a fost adaptată exact temei alese. Recomand cu încredere tuturor celor care doresc o teză realizată corect și responsabil.”",
    author: "Ana Teleucă",
    avatar: "/images/avatar-3.jpg",
  },
  {
    quote:
      "„Sunt foarte mulțumită de colaborare. Teza a fost redactată clar, logic și coerent, fără formulări generale sau conținut superficial. Se observă experiența și cunoașterea domeniului, iar lucrarea a trecut fără probleme verificările antiplagiat. Am primit suport și explicații ori de câte ori am avut întrebări. Cu siguranță voi recomanda serviciile dvs. și altor colegi. O experiență foarte bună! M-au ajutat de la structură până la varianta finală. Totul a fost clar, rapid și confidențial.”",
    author: "Ion Vasiliev",
    avatar: "/images/avatar-2.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#faf8f3] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 text-center">
          Testimoniale
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <p className="text-foreground text-base leading-relaxed mb-4">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-foreground font-medium">
                  {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
