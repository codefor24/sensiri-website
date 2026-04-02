import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

const serviceItems = [
  {
    title: "Residential Construction",
    description:
      "End-to-end residential construction for homes and villas with emphasis on planning clarity, cost visibility, and dependable execution.",
    scope: [
      "Site review, planning coordination, and construction scheduling",
      "Structural execution, masonry, roofing, and finishing works",
      "Material planning, site supervision, and quality monitoring",
    ],
    deliverables: [
      "Structured execution plan and stage-wise progress tracking",
      "Completed residential build with coordinated civil and finishing work",
      "Clear client communication from foundation to handover",
    ],
    whyChoose:
      "Choose this service when you need a practical home-building process that prioritizes quality, accountability, and cost control.",
    accents: ["Homes", "Villas", "Execution"],
  },
  {
    title: "Commercial Construction",
    description:
      "Construction solutions for office, retail, and commercial spaces built around operational efficiency and timely delivery.",
    scope: [
      "Commercial structure execution and interior-ready shell development",
      "Coordination across civil, utility, and fit-out requirements",
      "Site management aligned to business timelines and occupancy needs",
    ],
    deliverables: [
      "Commercial space delivered to planned specifications",
      "Coordinated milestone execution and site-level reporting",
      "Prepared environments for operational or interior fit-out use",
    ],
    whyChoose:
      "This service works best for businesses that need organized construction delivery with minimal disruption and strong schedule discipline.",
    accents: ["Offices", "Retail", "Timelines"],
  },
  {
    title: "Industrial Construction",
    description:
      "Industrial structures designed for durability, functional performance, and scalable execution across demanding site conditions.",
    scope: [
      "Industrial sheds, utility structures, and core site infrastructure",
      "Execution planning tailored to operational and load-bearing requirements",
      "Site coordination with safety, access, and structural priorities in mind",
    ],
    deliverables: [
      "Robust industrial building systems aligned to project scope",
      "Execution controls for quality, sequencing, and site readiness",
      "Construction outputs suited to long-term functional use",
    ],
    whyChoose:
      "Choose industrial construction when your project requires practical structural thinking, disciplined execution, and long-term reliability.",
    accents: ["Industrial", "Scalable", "Durable"],
  },
  {
    title: "Land Development",
    description:
      "Comprehensive land development support covering layouts, roads, drainage, and infrastructure coordination for usable project-ready sites.",
    scope: [
      "Layout execution, grading, internal roads, and drainage work",
      "Infrastructure support for access, utilities, and site readiness",
      "On-ground coordination for phased development activities",
    ],
    deliverables: [
      "Developed land parcels with organized infrastructure provisions",
      "Site circulation and utility-ready framework for future use",
      "Structured development progress across layout components",
    ],
    whyChoose:
      "This service is ideal when a project needs strong groundwork, infrastructure coordination, and careful sequencing before vertical development.",
    accents: ["Layouts", "Roads", "Drainage"],
  },
  {
    title: "Interiors",
    description:
      "Functional interior execution for residential and commercial spaces with attention to practicality, finish quality, and usability.",
    scope: [
      "Interior planning coordination, site execution, and finish integration",
      "Ceilings, partitions, flooring, joinery, and core interior works",
      "Execution focused on durability, clean detailing, and daily usability",
    ],
    deliverables: [
      "Complete interior execution aligned with approved requirements",
      "Clean, usable, and durable finished spaces",
      "Integrated handover-ready interior environments",
    ],
    whyChoose:
      "Choose interiors when you want a clean execution process that balances appearance, practicality, and long-term performance.",
    accents: ["Finishes", "Usability", "Durability"],
  },
];

function ServiceVisual({ title, accents }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-borderSoft bg-primary p-5 shadow-soft sm:p-8 lg:p-10">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
      <div className="relative flex min-h-[280px] flex-col justify-between sm:min-h-[340px]">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="h-20 rounded-xl border border-white/10 bg-white/5" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="h-28 rounded-xl border border-white/10 bg-white/5" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
            <div className="h-24 rounded-xl border border-white/10 bg-white/5" />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent md:text-sm">
            Sensiri Service
          </p>
          <h3 className="mt-4 text-[1.9rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
            {title}
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {accents.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/82"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div>
      <PageHero
        title="Construction services built for practical execution."
        description="Explore residential, commercial, industrial, land development, and interior services delivered with clarity, discipline, and professional site coordination."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <SectionHeader
            eyebrow="Our Services"
            title="Structured construction support across core project categories."
            description="Each service area is designed to give clients a clearer view of scope, deliverables, and execution outcomes while keeping the page clean and easy to navigate."
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {serviceItems.map((item, index) => {
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-borderSoft bg-secondary p-5 shadow-soft sm:p-6 md:p-8 lg:p-10"
                >
                  <div
                    className={`grid gap-7 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-14 ${
                      isReversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
                    }`}
                  >
                    <ServiceVisual title={item.title} accents={item.accents} />

                    <div>
                      <div className="mb-7 h-1.5 w-14 rounded-full bg-accent" />
                      <h2 className="text-[1.9rem] font-semibold leading-tight tracking-[-0.03em] text-primary sm:text-3xl md:text-4xl">
                        {item.title}
                      </h2>
                      <p className="mt-5 text-sm leading-7 text-slateWarm sm:mt-6 sm:text-base sm:leading-8">
                        {item.description}
                      </p>

                      <div className="mt-7 grid gap-6 sm:mt-9 sm:gap-7">
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-primary md:text-sm">
                            Scope of Work
                          </h3>
                          <ul className="mt-4 space-y-3 text-sm leading-7 text-slateWarm">
                            {item.scope.map((point) => (
                              <li key={point} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-primary md:text-sm">
                            Deliverables
                          </h3>
                          <ul className="mt-4 space-y-3 text-sm leading-7 text-slateWarm">
                            {item.deliverables.map((point) => (
                              <li key={point} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-3xl border border-borderSoft bg-white p-5 sm:p-6 lg:p-7">
                          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-primary md:text-sm">
                            Why Choose This Service
                          </h3>
                          <p className="mt-4 text-sm leading-7 text-slateWarm">
                            {item.whyChoose}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
