import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ContactMethods } from "@/components/contact-methods";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kevin Wanyonyi — engineering portfolio.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          title="Contact"
          description="For project inquiries, collaboration, or questions about the work documented in this portfolio."
        />
      </Reveal>
      <Reveal delay={100}>
        <ContactMethods />
      </Reveal>
    </main>
  );
}
