function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.32em] text-accent md:text-sm">
        {eyebrow}
      </span>
      <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-primary md:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      <p className="max-w-3xl text-base leading-8 text-slateWarm md:text-[1.05rem]">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
