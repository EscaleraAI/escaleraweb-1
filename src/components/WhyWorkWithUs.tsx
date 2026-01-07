import { Button } from "@/components/ui/button";
import { WobblyCard } from "@/components/ui/WobblyCard";

const reasons = [
  {
    title: "AI-native methodology",
    description: "Efficiency through automation and insights"
  },
  {
    title: "Proven traction",
    description: "Millions of monthly views across owned channels"
  },
  {
    title: "Dual experience",
    description: "Scaling our own products and those of our partners"
  },
  {
    title: "Flexible collaboration",
    description: "Consulting, co-ventures, or partnerships"
  }
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <WobblyCard
          intensity="md"
          className="bg-white p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-marker text-center mb-8 text-foreground">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-marker text-lg font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="font-hand text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              className="text-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner With Us
            </Button>
          </div>
        </WobblyCard>
      </div>
    </section>
  );
}