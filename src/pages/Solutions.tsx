import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import solutionsImage from "@/assets/solutions-image.jpg";
import swap from "@/assets/swap.jpeg";
import poster from "@/assets/poster.jpeg";

const Solutions = () => {
  const mainSolutions = [
    {
      title: "Repurposing & Reselling Abroad",
      description: "Instead of dumping unusable clothes here, create systems to send them back to where they came from — Europe and other countries — for proper recycling or resale.",
      icon: "♻️",
      color: "from-sustainable to-sustainable-light"
    },
    {
      title: "Support Local Textile Industries",
      description: "Buy Kenyan-made fabrics and clothing. Build industries that last, and reduce dependence on imports.",
      icon: "🇰🇪",
      color: "from-primary to-primary-light"
    },
    {
      title: "Influence Policy Change",
      description: "Push for stronger laws on textile imports, recycling, and corporate responsibility. Advocate for environmental justice.",
      icon: "📜",
      color: "from-accent to-accent-bright"
    },
    {
      title: "Host Cloth Swap Events",
      description: "Organize community swap events where people exchange clothes, extending their life and building sustainable communities.",
      icon: "🔄",
      color: "from-secondary to-secondary-dark"
    }
  ];

  const additionalSolutions = [
    {
      title: "Clothes Swaps",
      description: "Exchange clothes with friends, schools, or communities. Extend the life of clothing without creating new waste.",
      icon: "👕"
    },
    {
      title: "Upcycling", 
      description: "Turn old clothes into new designs. Transform jeans into bags, shirts into stylish outfits, and waste into creativity.",
      icon: "✂️"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight px-2">
              The problem is huge, but solutions are possible — and they begin with all of us.
            </h1>
            
            <div className="bg-gradient-hero rounded-2xl p-8 sm:p-10 shadow-glow max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
                Together, we can turn fashion from a polluter into a protector.
              </p>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-strong hover:scale-105 transition-transform duration-300">
              <img 
                src={swap} 
                alt="Community members participating in a clothes swap event"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-strong hover:scale-105 transition-transform duration-300">
              <img 
                src={poster} 
                alt="Sustainable fashion awareness campaign poster"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Main Solutions - Large Cards */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10">
              Four Key Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainSolutions.map((solution, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${solution.color} rounded-2xl p-8 sm:p-10 shadow-strong hover:scale-105 transition-all duration-300 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-6xl sm:text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/95 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Solutions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {additionalSolutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 border-border text-center"
              >
                <div className="text-6xl mb-6">{solution.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  {solution.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          {/* Solutions Image */}
          <div className="relative animate-fade-in mb-16">
            <div className="rounded-2xl overflow-hidden shadow-strong max-w-4xl mx-auto">
              <img 
                src={solutionsImage} 
                alt="Community working together on sustainable fashion solutions"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-earth rounded-2xl p-8 sm:p-10 shadow-soft">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join the Movement for Change
              </h3>
              <p className="text-base sm:text-lg text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                These solutions require collective action. Learn more about our research, 
                recommendations, and how you can contribute to Kenya's sustainable textile future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-strong"
                >
                  <Link to="/resources">View Our Research</Link>
                </Button>
                <Button 
                  variant="sustainable" 
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-strong"
                >
                  <Link to="/upcycling">Explore Upcycling</Link>
                </Button>
                <Button 
                  variant="default" 
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-strong"
                >
                  <Link to="/community">Take Action</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
