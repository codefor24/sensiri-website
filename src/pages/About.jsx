import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

function About() {
  return (
    <div>
      <PageHero
        title="A company grounded in dependable delivery."
        description="We bring together practical project experience, disciplined execution, and a long-view approach to infrastructure partnerships."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <SectionHeader
            eyebrow="Who We Are"
            title="Built to support complex projects with calm, structured execution."
            description="Sensiri Infrastructures India Pvt Ltd focuses on infrastructure work that demands consistency, technical coordination, and accountability at every stage."
          />

          <div className="space-y-6 text-base leading-7 text-slateWarm">
            <p>
              Our approach is centered on preparation, communication, and
              measurable follow-through. We believe project confidence comes from
              clear systems and strong execution habits.
            </p>
            <p>
              Whether supporting early-stage planning or active delivery, our
              teams work to maintain alignment between project intent, on-site
              realities, and business timelines.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Vision",
                text: "To be a trusted infrastructure partner known for disciplined delivery and professional reliability.",
              },
              {
                title: "Mission",
                text: "To deliver infrastructure solutions that balance operational precision, safety, and long-term client value.",
              },
              {
                title: "Values",
                text: "Integrity, accountability, thoughtful planning, and respectful stakeholder collaboration.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slateWarm">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
