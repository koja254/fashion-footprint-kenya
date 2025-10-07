import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import solutionsImage from "@/assets/solutions-image.jpg";
import swap from "@/assets/swap.jpeg";
import poster from "@/assets/poster.jpeg";

const Solutions: React.FC = () => {
  const mainSolutions = [
    {
      title: "Repurposing & Reselling Abroad",
      description:
        "Instead of dumping unusable clothes here, create systems to send them back to where they came from — Europe and other countries — for proper recycling or resale.",
      icon: "♻️",
      color: "from-sustainable to-sustainable-light"
    },
    {
      title: "Support Local Textile Industries",
      description:
        "Buy Kenyan-made fabrics and clothing. Build industries that last, and reduce dependence on imports.",
      icon: "🇰🇪",
      color: "from-primary to-primary-light"
    },
    {
      title: "Policy Change",
      description:
        "Push for stronger laws on textile imports, recycling, and corporate responsibility. Advocate for environmental justice.",
      icon: "📜",
      color: "from-accent to-accent-bright"
    },
    {
      title: "Participate in Cloth Swap Events",
      description:
        "Organize community swap events where people exchange clothes, extending their life and building sustainable communities.",
      icon: "🔄",
      color: "from-secondary to-secondary-dark"
    }
  ];

  return (
    <div className="min-h-screen bg-foreground/3">
      <Navigation />

      <main className="py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight px-2">
              The problem is huge, but solutions are possible — and they begin with all of us.
            </h1>

            <div className="bg-gradient-hero rounded-2xl p-6 sm:p-8 shadow-glow max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-foreground">
                Together, we can turn fashion from a polluter into a protector.
              </p>
            </div>
          </header>

          {/* Feature / Solutions Grid */}
          <section aria-labelledby="solutions-heading" className="mb-16">
            <h2 id="solutions-heading" className="sr-only">
              Four Key Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainSolutions.map((solution, index) => (
                <article
                  key={index}
                  className={`bg-gradient-to-br ${solution.color} rounded-2xl p-6 sm:p-8 shadow-strong hover:scale-105 transition-all duration-300 group`}
                  style={{ animationDelay: `${index * 0.06}s` }}
                  aria-label={solution.title}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl sm:text-6xl leading-none">{solution.icon}</div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-sm sm:text-base text-white/95 leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Central Illustration / Hero Image */}
          <section className="relative animate-fade-in mb-16">
            <div className="rounded-2xl overflow-hidden shadow-strong max-w-4xl mx-auto">
              <img
                src={solutionsImage}
                alt="Community working together on sustainable fashion solutions"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-20">
            <div className="bg-gradient-earth rounded-2xl p-6 sm:p-8 shadow-soft">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join the Movement for Change
              </h3>
              <p className="text-base sm:text-lg text-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                These solutions require collective action. Learn more about our research,
                recommendations, and how you can contribute to Kenya's sustainable textile future.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto shadow-strong">
                  <Link to="/resources">View Our Research</Link>
                </Button>

                <Button variant="sustainable" size="lg" asChild className="w-full sm:w-auto shadow-strong">
                  <Link to="/upcycling">Explore Upcycling</Link>
                </Button>

                <Button variant="default" size="lg" asChild className="w-full sm:w-auto shadow-strong">
                  <Link to="/community">Take Action</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Gallery: moved the two images together below the page as requested */}
      <aside className="bg-foreground/2 py-12 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-6 text-center">
            Community Moments
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            <figure className="rounded-xl overflow-hidden shadow-strong">
              <img
                src={swap}
                alt="Community members participating in a clothes swap event"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <figcaption className="p-4 text-sm text-foreground/80">Clothes swap event — sharing, repairing and renewing.</figcaption>
            </figure>

            <figure className="rounded-xl overflow-hidden shadow-strong">
              <img
                src={poster}
                alt="Sustainable fashion awareness campaign poster"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <figcaption className="p-4 text-sm text-foreground/80">Campaign poster promoting sustainable choices.</figcaption>
            </figure>
          </div>

          {/* Optional small footer links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-foreground/70">Want these images shown elsewhere? Visit our gallery or contribute your own photos.</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Solutions;
