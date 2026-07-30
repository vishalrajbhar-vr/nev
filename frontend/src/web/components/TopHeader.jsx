import {
  FaFacebookF,
  FaLeaf,
  FaPhoneAlt,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "X", icon: FaXTwitter },
  { label: "YouTube", icon: FaYoutube },
  { label: "Instagram", icon: FaInstagram },
  { label: "WhatsApp", icon: FaWhatsapp },
];

function TopHeader() {
  return (
    <header className="relative z-[60] w-full bg-[#071426] text-white">
      <div className="mx-auto grid min-h-[74px] max-w-[1560px] grid-cols-1 items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:px-10 lg:py-0 xl:px-16">
        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <span className="text-sm font-semibold sm:text-base">Follow Us:</span>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, icon: Icon }) => (
              <a
                href="#"
                key={label}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5BBF43] text-white transition-all duration-300 hover:bg-[#5BBF43] hover:text-[#071426] sm:h-11 sm:w-11"
              >
                <Icon className="text-[15px] sm:text-[16px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 text-center">
          <span className="hidden h-px w-16 bg-[#5BBF43]/45 sm:block" />
          <p className="flex items-center justify-center gap-2 text-sm font-semibold text-white/90 sm:text-base">
            <FaLeaf className="text-[#5BBF43]" />
            Smart Electric Mobility Solutions
          </p>
          <span className="hidden h-px w-16 bg-[#5BBF43]/45 sm:block" />
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <a
            href="tel:1234567890"
            className="inline-flex items-center gap-3 text-base font-bold tracking-wide text-white transition-colors duration-300 hover:text-[#5BBF43]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5BBF43] bg-[#10223A] text-[#5BBF43]">
              <FaPhoneAlt size={17} />
            </span>
            <span>1234567890</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
