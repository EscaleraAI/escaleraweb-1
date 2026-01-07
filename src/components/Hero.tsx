import { Button } from "@/components/ui/button";

// Subtle Notion-style decorations
const ScribbleUnderline = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2,6 Q30,2 50,8 Q80,12 100,6 Q130,0 150,8 Q175,14 198,6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const SmallArrow = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2,15 Q15,5 35,20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M35,20 L28,18 M35,20 L32,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto text-center">

      <div className="relative z-10 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold font-marker leading-tight text-foreground">
          Level Up Your Team via <br />
          <span className="relative inline-block text-secondary">
            Education & Content
            {/* Scribble underline - like a marker highlight */}
            <ScribbleUnderline className="absolute -bottom-2 left-0 w-full h-3 text-accent/40" />
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl md:text-2xl font-hand text-muted-foreground leading-relaxed">
          Escalera Labs helps you scale by building educational product ecosystems.
          We turn "corporate" into "community" with authentic content and strategies that stick.
        </p>

        <div className="relative inline-flex flex-col sm:flex-row gap-6 mt-4 items-center">
          {/* Secondary CTA first - explore */}
          <Button
            variant="secondary"
            size="lg"
            className="text-xl"
            onClick={() => document.getElementById('current-projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Our Work
          </Button>

          {/* Arrow pointing toward primary CTA */}
          <div className="hidden sm:flex items-center">
            <SmallArrow className="w-10 h-8 text-muted-foreground/50" />
          </div>

          {/* Primary CTA - convert */}
          <Button
            variant="default"
            size="lg"
            className="text-xl px-12"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Scaling
          </Button>
        </div>
      </div>
    </section>
  );
}