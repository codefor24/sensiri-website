function PageHero({ title, description }) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-content px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/sensiri-logo.jpeg"
              alt="Sensiri Infrastructures logo"
              className="h-12 w-12 rounded-xl object-cover shadow-soft sm:h-16 sm:w-16"
            />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent sm:text-xs sm:tracking-[0.34em] md:text-sm">
                Sensiri Infrastructures
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/60 sm:text-xs sm:tracking-[0.2em]">
                Construction Company
              </p>
            </div>
          </div>
          <h1 className="mt-6 max-w-4xl text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:mt-8 sm:text-4xl md:text-5xl lg:text-[3.6rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/78 sm:mt-7 sm:text-lg sm:leading-8 md:text-[1.1rem]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
