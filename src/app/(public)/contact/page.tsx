import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SANHS Annex — visit us, call, or send an email.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[var(--sanhs-green)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-white/80">
            We are here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--sanhs-green)] mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--sanhs-green)]/10 flex items-center justify-center flex-shrink-0">
                    <span>📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      San Andres National High School — Cabadiangan Annex<br />
                      Sayre Highway, Cabadiangan<br />
                      Kadingilan, 8713 Bukidnon<br />
                      Philippines
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--sanhs-green)]/10 flex items-center justify-center flex-shrink-0">
                    <span>📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-500 text-sm">+63 954 885 2407</p>
                    <p className="text-gray-500 text-sm">Mobile (School Head): +63 917 586 6617</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--sanhs-green)]/10 flex items-center justify-center flex-shrink-0">
                    <span>✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-500 text-sm">cabadiangannex@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--sanhs-green)]/10 flex items-center justify-center flex-shrink-0">
                    <span>⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-500 text-sm">
                      Monday – Friday: 8:00 AM – 5:00 PM<br />
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--sanhs-green)]/10 flex items-center justify-center flex-shrink-0">
                    <span>📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Facebook</h3>
                    <a
                      href="https://facebook.com/cabadiangan.annex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--sanhs-green)] text-sm hover:underline"
                    >
                      facebook.com/cabadiangan.annex
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl bg-gray-100 h-48 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <span className="text-3xl">🗺️</span>
                  <p className="text-sm mt-2">Kadingilan, Bukidnon</p>
                  <p className="text-xs text-gray-400">Sayre Highway, Cabadiangan</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--sanhs-green)] mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
