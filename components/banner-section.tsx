"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function BannerSection() {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }} // animatia incepe cand 30% din sectiune e vizibila
      transition={{ duration: 1.2 }}
    >
      <Image
        src="/images/section_3.jpg"
        alt="Profesioniști în conversație"
        width={1600}
        height={500}
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
      />
    </motion.section>
  );
}
