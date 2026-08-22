export default function Services() {
  const services = [
    {
      title: "Initial Consultation",
      description: "A free 20-minute phone consultation to discuss your needs, answer your questions, and determine if we're a good fit. No obligation—just clarity and a clear path forward.",
      price: "Free",
      ctaText: "Book Your Free Call",
    },
    {
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your unique goals. We'll work together to build coping strategies, process challenges, and create lasting change in a safe, supportive space.",
      price: "$120 / session",
      ctaText: "Schedule a Session",
    },
    {
      title: "Couples Counseling",
      description: "Strengthen your connection and navigate conflicts with guided, evidence-based support. We'll help you communicate better, rebuild trust, and move forward as a team.",
      price: "$150 / session",
      ctaText: "Book a Couples Session",
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Therapy That Fits Your Life
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