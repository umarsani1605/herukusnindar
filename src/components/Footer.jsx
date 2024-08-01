import { Icon } from "@iconify/react";

export default function Footer() {
  const socialMedia = [
    {
      name: "Facebook",
      url: "#",
      icon: "bxl:facebook-circle",
    },
    {
      name: "Instagram",
      url: "#",
      icon: "bxl:instagram",
    },
    {
      name: "X",
      url: "#",
      icon: "bxl:twitter",
    },
    {
      name: "Email",
      url: "#",
      icon: "bxl:gmail",
    },
  ];

  return (
    <div className="w-full bg-slate-800">
      <footer className="mx-auto mt-auto w-full max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="flex items-center justify-between gap-5 md:grid-cols-2">
          <div>
            <a
              className="flex-none text-xl font-semibold text-white focus:outline-none"
              href="#"
              aria-label="Brand"
            >
              Heru Kusnindar
            </a>
          </div>
          {/* Social Brands */}
          <div className="flex space-x-4 md:text-end">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-white transition-all duration-300 hover:text-slate-200 focus:outline-none"
                aria-label={social.name}
              >
                <Icon icon={social.icon} width="1.5rem" />
              </a>
            ))}
          </div>
          {/* End Social Brands */}
        </div>
        {/* End Grid */}
      </footer>
    </div>
  );
}
