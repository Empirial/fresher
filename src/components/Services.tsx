export default function Services() {
  const services = [
    {
      title: "Starter Palette",
      description: "A focused color audit for your existing site. We review your current palette, identify contrast and accessibility gaps, and deliver a refreshed set of brand colors with updated hex codes and usage guidelines.",
      price: "$499",
      ctaText: "Get Started",
    },
    {
      title: "Full Spectrum Redesign",
      description: "A complete color overhaul of your website's services section. We rework backgrounds, text, cards, and highlights to match your new brand direction, ensuring a cohesive and modern look across every page.",
      price: "$1,299",
      ctaText: "Book a Consultation",
    },
    {
      title: "Ongoing Color Care",
      description: "Monthly color maintenance and updates. We monitor your site's performance, adjust palettes for seasonal campaigns, and keep your services section fresh with on-brand color refinements.",
      price: "$299/mo",
      ctaText: "Subscribe Now",
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Color That Speaks for Your Brand
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map(({ title, description, price, ctaText }) => (
            <div
              key={title}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
              <p className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{price}</p>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{description}</p>
              <button
                type="button"
                className="mt-8 w-full rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}