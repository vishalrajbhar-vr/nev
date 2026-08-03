import {
  FaFacebookF,
  FaLeaf,
  FaPhoneAlt,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
    url: "#",
  },
];

function TopHeader() {
  return (
    <header className="relative z-[60] w-full bg-[#071426] text-white">
      <div className="mx-auto flex min-h-[48px] max-w-[1560px] items-center justify-between gap-2 px-3 py-2 sm:min-h-[74px] sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 sm:py-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:px-10 lg:py-0 xl:px-16">
        <div className="hidden flex-wrap items-center justify-center gap-3 lg:flex lg:justify-start">

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, icon: Icon, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5BBF43] text-white transition-all duration-300 hover:bg-[#5BBF43] hover:text-[#071426] sm:h-11 sm:w-11"
              >
                <Icon className="text-[15px] sm:text-[16px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 items-center justify-start gap-2 text-left sm:justify-center sm:text-center">
          <span className="hidden h-px w-16 bg-[#5BBF43]/45 sm:block" />
          <p className="flex items-center justify-center gap-2 text-sm font-semibold text-white/90 sm:text-base">
            <FaLeaf className="text-[#5BBF43]" />
            <span className="truncate">Smart Electric Mobility Solutions</span>
          </p>
          <span className="hidden h-px w-16 bg-[#5BBF43]/45 sm:block" />
        </div>

        <div className="flex shrink-0 items-center justify-center lg:justify-end">
          <a
            href="tel:18001210259"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-white transition-colors duration-300 hover:text-[#5BBF43] sm:gap-3 sm:text-base"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#5BBF43] bg-[#10223A] text-[#5BBF43] sm:h-11 sm:w-11">
              <FaPhoneAlt size={14} />
            </span>
            <span>18001210259</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
