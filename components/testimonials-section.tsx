const testimonials = [
  {
    quote:
      "„Am apelat la serviciile dvs. pentru realizarea unei teze de licență și pot spune cu toată sinceritatea că rezultatul a depășit așteptările mele. Lucrarea a fost bine structurată, cu argumenteclare, limbaj academic corect și surse actuale. Am apreciat în mod deosebit respectareatermenului limită și comunicarea constantă pe parcursul elaborării. Coordonatorul a evaluat teza foarte bine, iar nota obținută confirmă profesionalismul echipei.",
    author: "Victor Ciobanu",
  },
  {
    quote:
      "„Profesionalism, seriozitate și calitate – acestea sunt primele cuvinte care îmi vin în minte. Teza de master a fost realizată conform cerințelor metodologice ale facultății, cu analize bine argumentate și concluzii relevante. S-a ținut cont de toate observațiile mele, iar lucrarea a fost adaptată exact temei alese. Recomand cu încredere tuturor celor care doresc o teză realizată corect și responsabil.”",
    author: "Ana Teleucă",
  },
  {
    quote:
      "„Sunt foarte mulțumită de colaborare. Teza a fost redactată clar, logic și coerent, fără formulări generale sau conținut superficial. Se observă experiența și cunoașterea domeniului, iar lucrarea a trecut fără probleme verificările antiplagiat. Am primit suport și explicații ori de câte ori am avut întrebări. Cu siguranță voi recomanda serviciile dvs. și altor colegi.”O experiență foarte bună! M-au ajutat de la structură până la varianta finală. Totul a fost clar, rapid și confidențial.",
    author: "Ion Vasiliev",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#faf8f3] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-16">
          Testimoniale
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <p className="text-foreground text-base leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <p className="text-foreground font-medium">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
