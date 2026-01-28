"use client";

import Image from "next/image";
import { Eye, Heart, X } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    image: "/images/testimonials_1.webp",
    title: "O colaborare fără stres",
    excerpt:
      "O experiență extrem de plăcută și sigură. Am primit suport de la alegerea temei până la varianta finală a lucrării. Orice modificare cerută a fost realizată prompt, iar confidențialitatea a fost respectată în totalitate. Se vede clar experiența acumulată în timp și atenția la detalii. Sunt foarte mulțumită de rezultat.",
    views: 50,
  },
  {
    image: "/images/blog-2.jpg",
    title: "Profesionalism de la început până la final",
    excerpt:
      "Profesionalismul și seriozitatea s-au simțit pe tot parcursul colaborării. Am apreciat foarte mult comunicarea rapidă și faptul că au ținut cont de toate cerințele coordonatorului. Lucrarea a fost originală, bine argumentată și redactată într-un limbaj academic corect. Recomand cu încredere oricărui student care își dorește un rezultat de calitate.",
    views: 37,
  },
  {
    image: "/images/testimonials_2.webp",
    title: "Rezultate peste așteptări",
    excerpt:
      "Am colaborat cu această echipă pentru realizarea lucrării de licență și pot spune că a fost una dintre cele mai bune decizii. De la prima discuție am primit explicații clare, îndrumare constantă și multă răbdare. Lucrarea a fost bine documentată, structurată corect și adaptată exact cerințelor facultății mele. Totul a fost livrat la timp, fără stres.",
    views: 17,
  },
];

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const shortText = (text: string) =>
    text.length > 120 ? text.slice(0, 120) + "..." : text;

  return (
    <>
      <section className="bg-[#faf8f3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">
            Perspectivele noastre
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                onClick={() => setSelectedPost(post)}
                className="bg-card rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl mb-3">{post.title}</h3>

                  <p className="text-muted-foreground text-sm mb-6">
                    {shortText(post.excerpt)}
                  </p>

                  <div className="border-t pt-4 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </div>
                    <Heart className="w-5 h-5 text-red-400" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Imagine */}
            <div className="relative w-full h-64">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Conținut */}
            <div className="p-6">
              <h3 className="font-serif text-2xl mb-4">{selectedPost.title}</h3>

              <p className="text-muted-foreground leading-relaxed">
                {selectedPost.excerpt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
