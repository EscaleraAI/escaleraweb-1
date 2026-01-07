import { WobblyCard } from "@/components/ui/WobblyCard";
import { Button } from "@/components/ui/button";
import { Lightbulb, Video, Rocket, Handshake } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Education Ecosystems",
    description: "We don't just build apps; we build learning journeys. Transform your users from consumers into lifelong learners.",
    color: "text-yellow-600",
    decoration: "tack" as const
  },
  {
    icon: Video,
    title: "Content & Media",
    description: "Authentic, human-first content strategies. From short-form video to community-led channels that drive organic growth.",
    color: "text-blue-600",
    decoration: "tape" as const
  },
  {
    icon: Rocket,
    title: "Product Scaling",
    description: "Launch planning and international expansion. We help you find product-market fit in new territories.",
    color: "text-red-500",
    decoration: "none" as const
  },
  {
    icon: Handshake,
    title: "Co-Development",
    description: "We partner with founders to co-build digital products. Your vision + our execution engine.",
    color: "text-green-600",
    decoration: "tape" as const
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-marker text-foreground mb-4 rotate-[-1deg]">
            How We Help You Grow
          </h2>
          <div className="h-1 w-40 bg-accent/20 mx-auto rounded-full rotate-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {services.map((service, index) => (
            <WobblyCard
              key={index}
              intensity="md"
              decoration="tape"
              variant="postit"
              className="hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start gap-6">
                <div className={`p-3 rounded-full border-2 border-current ${service.color} bg-white shadow-[2px_2px_0px_0px_currentColor] flex-shrink-0`}>
                  <service.icon size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-marker mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-hand">
                    {service.description}
                  </p>
                </div>
              </div>
            </WobblyCard>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="text-xl rotate-1 hover:rotate-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Brainstorm
          </Button>
        </div>
      </div>
    </section>
  );
}