import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhyUsSection } from "@/components/why-us-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BannerSection } from "@/components/banner-section";
import { BlogSection } from "@/components/blog-section";
import ContactPage from "@/components/contact-section";
import { Footer } from "@/components/footer-sections";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <TestimonialsSection />
      <BannerSection />
      <BlogSection />
      <ContactPage />
      <Footer />
    </main>
  );
}
