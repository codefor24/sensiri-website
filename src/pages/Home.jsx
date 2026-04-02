import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

const trustIndicators = [
  { title: "Residential", projects: "24 Projects" },
  { title: "Commercial", projects: "18 Projects" },
  { title: "Industrial", projects: "12 Projects" },
  { title: "Land Development", projects: "16 Projects" },
  { title: "Interiors", projects: "20 Projects" },
];

const coreServices = [
  {
    title: "Residential Construction",
    description:
      "Custom-built homes with practical design, cost control, and strong execution.",
  },
  {
    title: "Commercial Construction",
    description:
      "Efficient construction solutions for offices, retail, and commercial spaces.",
  },
  {
    title: "Industrial Construction",
    description:
      "Robust and scalable structures tailored for industrial requirements.",
  },
  {
    title: "Land Development",
    description:
      "End-to-end layout development including roads, drainage, and infrastructure.",
  },
  {
    title: "Interiors",
    description:
      "Functional and clean interior execution with focus on durability and usability.",
  },
];

const featuredProjects = [
  {
    name: "Bandenallasandra Layout",
    type: "Land Development",
    status: "Completed",
  },
  {
    name: "Skyline",
    type: "Commercial Construction",
    status: "In Progress",
  },
  {
    name: "Vinayakanagara",
    type: "Residential Construction",
    status: "Completed",
  },
];

const reasons = [
  "Transparent Costing (BOQ Model)",
  "Experienced Site Engineers",
  "On-Time Delivery",
  "No Subcontracting",
  "Specified Materials Only",
];

function Home() {
  return (
    <div className="bg-white">
      <section className="bg-primary">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent sm:text-xs sm:tracking-[0.34em] md:text-sm">
              Construction Company in Bengaluru
            </p>
            <h1 className="mt-5 max-w-5xl text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:mt-7 sm:text-4xl md:text-5xl lg:text-[4.2rem]">
              Comprehensive Construction Solutions. Tailored for You.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/76 sm:mt-7 sm:text-lg sm:leading-8 md:text-[1.12rem]">
              Residential, Commercial, Industrial, Land Development and
              Interiors
            </p>
            <div className="mt-8 grid gap-3 pt-1 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
              <Link
                to="/contact"
                className="min-h-12 rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-primary transition-colors duration-150 hover:bg-secondary"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/projects"
                className="min-h-12 rounded-lg border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-150 hover:border-white/40 hover:bg-white/5"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft sm:p-8 lg:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/65">
                  Delivery Model
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 text-white sm:mt-4 sm:text-xl sm:leading-8">
                  BOQ-based planning with execution clarity
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/65">
                  Service Area
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 text-white sm:mt-4 sm:text-xl sm:leading-8">
                  All Over Bengaluru and Surroundings
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2 sm:p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/65">
                  Focus
                </p>
                <p className="mt-3 text-sm leading-7 text-white sm:mt-4 sm:text-base sm:leading-8">
                  Clean execution, site accountability, specified materials, and
                  practical construction management from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <SectionHeader
            eyebrow="Trust Indicators"
            title="Project experience across core construction segments."
            description="A quick view of the work categories we support for clients across Bengaluru and surrounding areas."
          />

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {trustIndicators.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-borderSoft bg-secondary p-5 sm:p-7"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em] text-accent sm:mt-4 sm:text-[1.7rem]">
                  {item.projects}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-borderSoft bg-white p-5 shadow-soft sm:mt-8 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary md:text-sm">
              Location
            </p>
            <p className="mt-3 text-base leading-8 text-slateWarm">
              All Over Bengaluru and Surroundings
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <SectionHeader
            eyebrow="Core Services"
            title="Construction services designed for practical delivery."
            description="Each engagement is structured to keep scope, quality, materials, and execution aligned with project goals."
          />

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreServices.map((service) => (
              <article key={service.title} className="rounded-3xl bg-white p-6 shadow-soft sm:p-8 lg:p-9">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-accent sm:mb-6" />
                <h3 className="text-[1.2rem] font-semibold tracking-[-0.02em] text-primary sm:text-[1.35rem]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slateWarm sm:mt-4 sm:text-base sm:leading-8">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <SectionHeader
            eyebrow="Featured Projects"
            title="A snapshot of project categories we deliver."
            description="Representative projects that reflect our execution range across layouts, residential work, and commercial construction."
          />

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-borderSoft p-6 shadow-soft sm:p-8 lg:p-9"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent md:text-sm">
                  {project.type}
                </p>
                <h3 className="mt-4 text-[1.45rem] font-semibold tracking-[-0.03em] text-primary sm:mt-5 sm:text-[1.75rem]">
                  {project.name}
                </h3>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-borderSoft pt-4 text-sm text-slateWarm sm:mt-8 sm:pt-5">
                  <span>Status</span>
                  <span className="font-semibold text-primary">{project.status}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <SectionHeader
            eyebrow="Why Choose Sensiri"
            title="Built around clarity, quality, and execution discipline."
            description="Our delivery model is shaped to reduce uncertainty for clients and maintain control over cost, quality, and timelines."
          />

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {reasons.map((reason) => (
              <article key={reason} className="rounded-3xl bg-white p-5 shadow-soft sm:p-7">
                <div className="mb-5 h-1.5 w-12 rounded-full bg-accent sm:mb-6" />
                <p className="text-sm font-medium leading-7 text-primary sm:text-base sm:leading-8">
                  {reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto grid max-w-content gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent md:text-sm">
              Contact Us
            </p>
            <h2 className="mt-5 text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:mt-6 sm:text-3xl md:text-4xl lg:text-[2.9rem]">
              Start your project discussion with a clear next step.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/75 sm:mt-6 sm:text-base sm:leading-8">
              Share your requirement with our team for residential, commercial,
              industrial, land development, or interior work. We will help you
              evaluate scope, cost approach, and execution requirements.
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <a
                href="tel:9592049592"
                className="min-h-12 rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-primary transition-colors duration-150 hover:bg-secondary"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919592049592"
                className="min-h-12 rounded-lg border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-150 hover:border-white/40 hover:bg-white/5"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-primary">
              Request a Free Consultation
            </h3>
            <p className="mt-4 text-sm leading-7 text-slateWarm">
              Fill in your details and project type. This is a lead form UI only.
            </p>

            <form className="mt-8 grid gap-5 md:grid-cols-2 sm:gap-6">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-primary">
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="min-h-12 w-full rounded-md border border-borderSoft px-4 py-3 text-sm text-primary outline-none transition focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-primary">
                  Phone Number
                </span>
                <input
                  type="tel"
                  placeholder="+91"
                  className="min-h-12 w-full rounded-md border border-borderSoft px-4 py-3 text-sm text-primary outline-none transition focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-primary">
                  Email Address
                </span>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="min-h-12 w-full rounded-md border border-borderSoft px-4 py-3 text-sm text-primary outline-none transition focus:border-primary"
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

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-primary">
                  Project Requirement
                </span>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project"
                  className="w-full rounded-md border border-borderSoft px-4 py-3 text-sm text-primary outline-none transition focus:border-primary"
                />
              </label>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="min-h-12 w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-primary/95 sm:w-auto"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
