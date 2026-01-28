import Image from "next/image";

export function BannerSection() {
  return (
    <section className="w-full">
      <Image
        src="/images/section_3.jpg"
        alt="Profesioniști în conversație"
        width={1600}
        height={500}
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
      />
    </section>
  );
}
