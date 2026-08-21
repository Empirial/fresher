export default function About() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <img
            src="https://placehold.co/960x640/e2e8f0/475569?text=about"
            alt="A glass of Fresher's signature cold-pressed juice surrounded by fresh fruits and green leaves"
            className="aspect-[4/3] w-full rounded-lg border border-border object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Freshness, Bottled with Purpose
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Fresher began with a simple belief: great taste should never come at the cost of your health or the planet. What started as a small kitchen experiment—pressing local fruits and vegetables into vibrant, nutrient-packed blends—quickly grew into a mission. Today, we craft every bottle using cold-pressed methods that lock in flavor and goodness, with no added sugars, preservatives, or shortcuts. From farm to fridge, we partner with growers who share our obsession for quality, ensuring each sip is as honest as the morning sun.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            But Fresher is more than just a drink—it's a promise. We're committed to sustainable sourcing, recyclable packaging, and giving back to the communities that feed us. Whether you're grabbing a quick boost before work or unwinding after a long day, our beverages are made to refresh your body and uplift your spirit. We don't just sell refreshment; we pour care into every drop. That's the Fresher way—pure, purposeful, and always in season.
          </p>
        </div>
      </div>
    </section>
  );
}