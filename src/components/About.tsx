export default function About() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <img
            src="https://placehold.co/960x640/e2e8f0/475569?text=about"
            alt="A warm, inviting photo of a psychologist's office with a comfortable chair and soft natural light, symbolizing a safe space for conversation"
            className="aspect-[4/3] w-full rounded-lg border border-border object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A Safe Space to Start Your Journey
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            For years, I’ve helped people untangle the thoughts and feelings that weigh them down—whether it’s anxiety, burnout, or the quiet ache of feeling stuck. My approach is grounded in evidence-based therapy, but it’s never clinical or cold. I meet you where you are, with genuine curiosity and zero judgment, so we can work together at a pace that feels right for you.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            The hardest step is often the first one—reaching out. That’s why I offer a free, no-pressure consultation. It’s a chance for us to talk, for you to ask questions, and for you to see if we’re a good fit before committing to anything. No forms, no fees, no strings. Just an honest conversation about what’s on your mind and how I might help. Because real change starts with feeling heard.
          </p>
        </div>
      </div>
    </section>
  );
}