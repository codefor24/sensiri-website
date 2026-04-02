import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

const projects = [
  {
    name: "Bandenallasandra Layout",
    location: "Bengaluru",
    type: "Land Development",
    status: "Completed",
  },
  {
    name: "Skyline",
    location: "South Bengaluru",
    type: "Commercial Construction",
    status: "In Progress",
  },
  {
    name: "Vinayakanagara",
    location: "Bengaluru",
    type: "Residential Construction",
    status: "Completed",
  },
  {
    name: "Industrial Works Campus",
    location: "Bengaluru Rural",
    type: "Industrial Construction",
    status: "Ongoing",
  },
  {
    name: "Urban Retail Block",
    location: "East Bengaluru",
    type: "Commercial Construction",
    status: "Completed",
  },
  {
    name: "Greenfield Enclave",
    location: "North Bengaluru",
    type: "Residential Construction",
    status: "Planning",
  },
];

function Projects() {
  return (
    <div>
      <PageHero
        title="Projects delivered with structured execution and clear site control."
        description="Browse representative project work across residential, commercial, industrial, and land development categories."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <SectionHeader
            eyebrow="Project Portfolio"
            title="A clean overview of current and completed project work."
            description="Each project card includes space for future photography while keeping the information clear, balanced, and easy to scan."
          />

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="overflow-hidden rounded-[2rem] border border-borderSoft bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="border-b border-borderSoft bg-secondary p-5 sm:p-7">
                  <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-borderSoft bg-white sm:min-h-[240px]">
                    <div className="text-center">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        Future Image
                      </p>
                      <p className="mt-2 text-sm text-slateWarm">
                        Project visual placeholder
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-8 lg:p-9">
                  <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-primary sm:text-2xl">
                    {project.name}
                  </h2>

                  <div className="mt-6 grid gap-4 text-sm text-slateWarm sm:mt-7">
                    <div className="flex items-start justify-between gap-4 border-b border-borderSoft pb-4">
                      <span className="font-medium text-primary">Location</span>
                      <span className="max-w-[58%] text-right">{project.location}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4 border-b border-borderSoft pb-4">
                      <span className="font-medium text-primary">Type</span>
                      <span className="max-w-[58%] text-right">{project.type}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-medium text-primary">Status</span>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
