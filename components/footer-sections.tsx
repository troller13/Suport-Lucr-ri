"use client";

export function Footer() {
  return (
    <footer className="bg-[#2d4a3e] text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center space-y-2">
        <h4 className="font-serif text-xl mb-2">Contacte</h4>
        <p>
          Email:{" "}
          <a
            href="mailto:teza_ta@mail.ru"
            className="underline hover:text-[#d4a853]"
          >
            teza_ta@mail.ru
          </a>
        </p>
        <p>
          Tel:{" "}
          <a href="tel:+37378294607" className="underline hover:text-[#d4a853]">
            +373 78 294607
          </a>
        </p>
      </div>
    </footer>
  );
}
