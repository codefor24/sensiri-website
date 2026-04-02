import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function CorporateFooter() {
  return (
    <footer className="border-t border-borderSoft bg-secondary">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-16 lg:grid-cols-[1.25fr_0.75fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <img
              src="/sensiri-logo.jpeg"
              alt="Sensiri Infrastructures logo"
              className="h-16 w-16 rounded-xl object-cover"
            />
            <div>
              <p className="font-semibold uppercase tracking-[0.14em] text-primary">
                Sensiri Infrastructures India Pvt Ltd
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slateWarm">
                Construction and Infrastructure
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slateWarm">
            Reliable construction and infrastructure delivery with a focus on
            planning, accountability, and professional execution.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Quick Links
          </p>
          <div className="mt-5 flex flex-col gap-3.5 text-sm text-slateWarm">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="transition-colors duration-150 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Contact
          </p>
          <div className="mt-5 space-y-3.5 text-sm leading-7 text-slateWarm">
            <p>Phone: 9592049592</p>
            <p>Email: info@sensiri.in</p>
          </div>
        </div>
      </div>

      <div className="border-t border-borderSoft">
        <div className="mx-auto max-w-content px-6 py-6 text-sm text-slateWarm lg:px-8">
          Copyright 2026 Sensiri Infrastructures India Pvt Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default CorporateFooter;
