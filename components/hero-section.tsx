import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-[#faf8f3]">
      <div className="border-t-4 border-[#8b1538]" />
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Two background images side by side */}
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

        {/* Centered card overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-[#faf8f3] px-8 py-12 md:px-16 md:py-16 max-w-xl text-center shadow-lg">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              ECHIPA NR. 1 ÎN TEHNOREDACTAREA TEZELOR LA COMANDĂ
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Când timpul este limitat, iar exigențele sunt ridicate, noi îți
              venim în ajutor. Realizăm: teze, rapoarte de practică, referate,
              lucrări individuale, proiecte de cercetare, prezentări power
              point, articole științifice la comandă, adaptate cerințelor tale
              și standardelor academice în vigoare.
            </p>
            <a
              href="#contact"
              className="bg-[#2d4a3e] hover:bg-[#1e3329] text-white px-8 py-3 rounded-sm text-base font-medium transition-colors"
            >
              Contactează-ne
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
