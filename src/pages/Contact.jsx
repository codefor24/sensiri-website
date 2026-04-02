import PageHero from "../components/PageHero";

function Contact() {
  return (
    <div>
      <PageHero
        title="Talk to our team about your construction requirement."
        description="Reach out for residential, commercial, industrial, land development, or interior project discussions."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-content gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8 lg:px-8 lg:py-28">
          <div className="rounded-[2rem] bg-secondary p-6 sm:p-8 lg:p-10">
            <h2 className="text-[1.7rem] font-semibold tracking-[-0.02em] text-primary sm:text-2xl">Contact Details</h2>
            <p className="mt-4 text-sm leading-7 text-slateWarm sm:mt-5">
              Use the direct call or WhatsApp options for quick responses, or
              submit the form and our team can get back to you.
            </p>

            <div className="mt-10 space-y-7 text-sm leading-7 text-slateWarm">
              <div>
                <p className="font-semibold uppercase tracking-[0.14em] text-primary">
                  Company
                </p>
                <p className="mt-2">Sensiri Infrastructures India Pvt Ltd</p>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.14em] text-primary">
                  Email
                </p>
                <a
                  href="mailto:info@sensiri.in"
                  className="mt-2 block transition-colors duration-150 hover:text-primary"
                >
                  info@sensiri.in
                </a>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.14em] text-primary">
                  Phone
                </p>
                <a
                  href="tel:9592049592"
                  className="mt-2 block transition-colors duration-150 hover:text-primary"
                >
                  9592049592
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-row sm:gap-4">
              <a
                href="tel:9592049592"
                className="min-h-12 rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-150 hover:bg-primary/95"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919592049592"
                className="min-h-12 rounded-lg border border-primary px-6 py-3 text-center text-sm font-semibold text-primary transition-colors duration-150 hover:bg-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-borderSoft p-6 shadow-soft sm:p-8 lg:p-10">
            <h2 className="text-[1.7rem] font-semibold tracking-[-0.02em] text-primary sm:text-2xl">Get in Touch</h2>
            <p className="mt-4 text-sm leading-7 text-slateWarm sm:mt-5">
              Fill in your basic details and project type. This form is a clean
              lead capture UI without backend integration.
            </p>

            <form className="mt-8 grid gap-6">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-primary">
                  Name
                </span>
                <input
                  type="text"
                  className="min-h-12 w-full rounded-md border border-borderSoft px-4 py-3 text-sm text-primary outline-none transition focus:border-primary"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-primary">
                  Phone
                </span>
                <input
                  type="tel"
                  className="min-h-12 w-full rounded-md border border-borderSoft px-4 py-3 text-sm text-primary outline-none transition focus:border-primary"
                  placeholder="Your phone number"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-primary">
                  Project Type
                </span>
                <select className="min-h-12 w-full rounded-md border border-borderSoft bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-primary">
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Industrial Construction</option>
                  <option>Land Development</option>
                  <option>Interiors</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-primary">
                  Location
                </span>
                <input
                  type="text"
                  className="min-h-12 w-full rounded-md border border-borderSoft px-4 py-3 text-sm text-primary outline-none transition focus:border-primary"
                  placeholder="Project location"
                />
              </label>

              <button
                type="submit"
                className="mt-2 min-h-12 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-primary/95 sm:w-auto"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
