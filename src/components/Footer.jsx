import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="border-t border-borderSoft bg-secondary">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <p className="font-semibold uppercase tracking-[0.14em] text-primary">
            Sensiri Infrastructures India Pvt Ltd
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slateWarm">
            Reliable construction and infrastructure delivery with a focus on
            planning, accountability, and professional execution.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slateWarm">
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
          <div className="mt-4 space-y-3 text-sm text-slateWarm">
            <p>Phone: +91 00000 00000</p>
            <p>Email: contact@sensiriinfra.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-borderSoft">
        <div className="mx-auto max-w-content px-6 py-5 text-sm text-slateWarm lg:px-8">
          © 2026 Sensiri Infrastructures India Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
