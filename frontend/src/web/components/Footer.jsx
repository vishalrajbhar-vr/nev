import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const logoSrc = "/images/nev-logo-with-bg.png";

const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/1T7zozZrY3/",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/navgatee?igsh=dzVyeGZ4azl0bnE0",
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/919196598300",
  },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/photos" },
  { label: "Enquiry", href: "/enquiry" },
];

const productLinks = [
  { label: "Scooty", href: "/activa" },
  { label: "L5 Electric Auto", href: "/l5-dlx-passenger-3-plus-1" },
  { label: "L5 Ultra Loader", href: "/l5-ultra-loader" },
  { label: "L5 Front Facia", href: "/l5-front-facia" },
];

function Footer() {
  return (
    <footer className="w-full px-10 bg-[#182438] text-white">
      <style>{`
        @keyframes logoFlipSpin {
          0% { transform: rotateY(0deg) scale(1); filter: brightness(1) drop-shadow(0 0 0px rgba(91,191,67,0)); }
          25% { transform: rotateY(90deg) scale(1.06); filter: brightness(1.3) drop-shadow(0 0 8px rgba(91,191,67,0.5)); }
          50% { transform: rotateY(180deg) scale(1.08); filter: brightness(1.5) drop-shadow(0 0 12px rgba(91,191,67,0.75)); }
          75% { transform: rotateY(270deg) scale(1.06); filter: brightness(1.3) drop-shadow(0 0 8px rgba(91,191,67,0.5)); }
          100% { transform: rotateY(360deg) scale(1); filter: brightness(1) drop-shadow(0 0 0px rgba(91,191,67,0)); }
        }

        .logo-flip-wrapper { perspective: 800px; display: block; }
        .logo-flip-wrapper .logo-img { transform-style: preserve-3d; }
        .logo-flip-wrapper:hover .logo-img { animation: logoFlipSpin 0.65s ease-in-out; }
      `}</style>
      <div className="mx-auto grid max-w-[1340px] grid-cols-1 gap-11 px-6 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1.15fr] lg:gap-16 lg:px-10 lg:py-16 xl:px-0">
        <div>
          <a
            href="#"
            className="mb-7 flex h-[150px] w-full max-w-[286px] items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-6 shadow-[inset_0_0_20px_rgba(255,255,255,0.04)]"
          >
            <span className="logo-flip-wrapper block h-full w-full">
              <img src={logoSrc} alt="NEV Navgatee" className="logo-img h-full w-full object-contain" />
            </span>
          </a>

          <div className="max-w-[345px]">
            <p className="text-md font-medium leading-7 text-white/95">
              Driving India Towards <span className="text-[#5BBF43] font-extrabold">A Greener Tomorrow</span> — leading the electric mobility revolution in India with innovative, sustainable, and affordable electric vehicles.
            </p>
            <span className="mt-3 block h-[3px] w-14 bg-[#5BBF43]" />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {socialLinks.map(({ label, icon: Icon, url }) => (
              <Link
                to={url}
                key={label}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 text-white transition-all duration-300 hover:border-[#5BBF43] hover:bg-[#5BBF43] hover:text-[#182438]"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        <FooterSection title="Our Links">
          <ul className="space-y-5">
            {companyLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-lg font-medium text-white transition-colors duration-300 hover:text-[#5BBF43]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </FooterSection>

        <FooterSection title="Products">
          <ul className="space-y-5">
            {productLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-lg font-medium text-white transition-colors duration-300 hover:text-[#5BBF43]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </FooterSection>

        <FooterSection title="Contact Info">
          <div className="space-y-5">
            <ContactCard icon={FaPhoneAlt} value="Toll Free:+91 9196598300" href="tel: +91 9196598300" />
            <ContactCard icon={FaEnvelope} value="info.navgatee@gmail.com" href="mailto:info.navgatee@gmail.com?subject=Inquiry" />
            <ContactCard icon={FaMapMarkerAlt} value="Lucknow, India" href="https://maps.app.goo.gl/zts3bmbHYFLUdTWF6" />
          </div>
        </FooterSection>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-[1340px] flex-col items-center justify-between gap-4 px-6 py-7 text-sm text-white sm:px-8 md:flex-row lg:px-10 xl:px-0">
          <p className="text-center md:text-left">
            &copy; 2026 NEV Vehicles Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-medium">
            <a href="/privacy" className="transition-colors duration-300 hover:text-[#5BBF43]">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors duration-300 hover:text-[#5BBF43]">
              Terms of Service
            </a>
            <a href="/support" className="transition-colors duration-300 hover:text-[#5BBF43]">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ title, children }) {
  return (
    <section>
      <h3 className="text-2xl font-extrabold text-white">{title}</h3>
      <span className="mb-7 mt-3 block h-[2px] w-[150px] max-w-full bg-[#5BBF43]" />
      {children}
    </section>
  );
}

function ContactCard({ icon: Icon, value, href }) {
  const content = (
    <>
      <Icon className="shrink-0 text-[#5BBF43]" size={22} />
      <span className="min-w-0 break-words text-lg font-bold text-white">{value}</span>
    </>
  );

  const className =
    "flex min-h-[66px] items-center gap-5 rounded-lg bg-[#253247] px-5 py-4 transition-all duration-300 hover:bg-[#2d3b51]";

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export default Footer;