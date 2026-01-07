export default function About() {
  return (
    <section id="about" className="py-16 px-8 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold font-marker mb-6 text-foreground text-center">
        About Escalera Labs
      </h2>

      <div className="prose prose-lg max-w-none font-hand text-xl leading-loose text-muted-foreground bg-white/50 p-8 md:p-12 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] border-2 border-border shadow-soft">
        <p className="mb-6 text-2xl font-marker text-foreground">
          Curiosity doesn't have an age limit. Neither should growth.
        </p>
        <p className="mb-6">
          Escalera Labs was founded on a simple idea: that learning is most powerful when it feels like <strong className="text-accent underline decoration-wavy decoration-2 underline-offset-4">exploration</strong>.
        </p>
        <p className="mb-6">
          We've taken the mechanics of play and the precision of modern frameworks to create systems that delight users while they develop. Whether we are helping kids "level up" their understanding of the world or helping companies elevate their workforce through seamless, headless training, our goal is the same: to make the ascent toward knowledge the most rewarding part of your day.
        </p>
        <p className="text-lg italic text-center mt-8">
          Welcome to the next step in your journey.
        </p>
      </div>
    </section>
  );
}