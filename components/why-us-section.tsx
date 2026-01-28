const features = [
  {
    title: "Experiență și profesionalism",
    description:
      "Activăm din anul 2014 și avem o experiență solidă în realizarea lucrărilor academice pentru diverse facultăți. Cunoaștem cerințele universitare și standardele academice actuale.",
  },
  {
    title: "Calitate și originalitate",
    description:
      "Fiecare lucrare este realizată individual, pe baza unei documentări temeinice. Punem accent pe conținut original, structură logică și respectarea normelor de citare și formatare.",
  },
  {
    title: "Respectarea termenelor",
    description:
      "Înțelegem importanța timpului, de aceea livrăm lucrările la termenul stabilit. Organizarea și seriozitatea sunt prioritare pentru noi.",
  },
  {
    title: "Asigurăm calitate și preț accesibil",
    description:
      "Punem accent pe conținut de calitate, structurat corect și bine documentat, menținând în același timp prețuri accesibile pentru studenți. Colaborarea cu noi oferă un echilibru perfect între excelență și cost rezonabil.",
  },
  {
    title: "Deținem cei mai buni specialiști în realizarea lucrărilor",
    description:
      "Echipa noastră este formată din profesioniști cu experiență în diverse domenii academice. Fiecare lucrare este realizată de persoane calificate, care cunosc cerințele universitare și știu cum să ofere rezultate de top.",
  },
  {
    title: "Garantăm profesionalism și trecerea softului de plagiat",
    description:
      "Ne asigurăm că fiecare lucrare este complet originală și respectă toate normele academice. Folosim metode riguroase de verificare pentru a garanta că trece cu succes orice soft de plagiat.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-[#f9f9f9] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center text-foreground mb-16">
          De ce noi?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
