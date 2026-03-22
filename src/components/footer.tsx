import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/enrollment", label: "Enrollment" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const portalLinks = [
  { href: "/portal", label: "Student Portal" },
  { href: "/portal/grades", label: "View Grades" },
  { href: "/portal/attendance", label: "Attendance" },
  { href: "/portal/schedule", label: "Class Schedule" },
  { href: "/admin", label: "Staff Login" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--sanhs-green-dark)] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SA</span>
              </div>
              <div>
                <div className="font-bold text-white">SANHS Annex</div>
                <div className="text-xs text-white/60">Cabadiangan, Kadingilan</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              San Andres National High School — Cabadiangan Annex. Providing quality public education in the heart of Bukidnon since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portal */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Portal
            </h4>
            <ul className="space-y-2">
              {portalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Sayre Highway, Cabadiangan, Kadingilan, 8713 Bukidnon, Philippines</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+63 954 885 2407</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>+63 917 586 6617 (School Head)</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>cabadiangannex@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span>
                <span>Mon–Fri, 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} SANHS Annex — Cabadiangan. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            DepEd Region X — Northern Mindanao | District II, Kadingilan
          </p>
        </div>
      </div>
    </footer>
  );
}
