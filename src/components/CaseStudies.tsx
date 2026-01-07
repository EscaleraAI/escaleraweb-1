import { WobblyCard } from "@/components/ui/WobblyCard";
import { Button } from "@/components/ui/button";

export default function CaseStudies() {
  const projects = [
    {
      name: "Snappit App",
      description: "Educational App & Platform for families - fostering kid's interest in nature, exploration and the outdoors.",
      status: "Currently building a full ecosystem of app, website & channels at:",
      link: "https://snappit.app",
      linkText: "Snappit.app",
      image: "/images/7a95af88-203f-47bb-ac59-bc3ce5f2d4fd.png",
      alt: "Snappit App mascot",
      rotation: "rotate-1"
    },
    {
      name: "Snap Memory",
      description: "Fun educational object identification and memorization game. Featuring over 100+ cards from the Snappit ecosystem.",
      image: "/images/snap-memory.png",
      alt: "Snap Memory game",
      rotation: "-rotate-2"
    },
    {
      name: "Snap Maps",
      description: "A challenging geographical learning game. Flags, capitals, and shapes of all world countries.",
      image: "/images/snap-maps.png",
      alt: "Snap Maps game",
      rotation: "rotate-2"
    },
    {
      name: "Snap Handwriting",
      description: "Learn to write letters and words with guided tracing and practice exercises. Perfect for early learners.",
      image: "/images/Snap Handwriting.png",
      alt: "Snap Handwriting app",
      rotation: "-rotate-1"
    },
    {
      name: "Snap Quiz",
      description: "Test your knowledge across multiple categories with fun, engaging quizzes powered by spaced repetition.",
      image: "/images/Snap Quiz.png",
      alt: "Snap Quiz app",
      rotation: "rotate-2"
    },
    {
      name: "Snap Spelling",
      description: "Master spelling through interactive word games and phonics-based learning activities.",
      image: "/images/Snap Spelling.png",
      alt: "Snap Spelling app",
      rotation: "-rotate-2"
    }
  ];

  return (
    <section id="current-projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-marker inline-block relative">
            What We're Building
          </h2>
          <div className="h-1 w-40 bg-secondary/30 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <WobblyCard
              key={project.name}
              decoration="tack"
              intensity="sm"
              className={`bg-white h-full flex flex-col ${project.rotation} hover:scale-105 transition-transform duration-300`}
            >
              <div className="mb-6 -mx-2 -mt-2 p-2 bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold font-marker mb-3 text-foreground text-center">
                  {project.name}
                </h3>
                <div className="space-y-3 text-lg font-hand text-muted-foreground leading-relaxed">
                  <p>{project.description}</p>
                  {project.status && (
                    <div className="bg-yellow-100 p-3 -rotate-1 border border-yellow-200 mt-4 shadow-sm">
                      <p className="text-sm font-bold text-yellow-800">
                        {project.status}{' '}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline decoration-wavy"
                          >
                            {project.linkText}
                          </a>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </WobblyCard>
          ))}
        </div>
      </div>
    </section>
  );
}