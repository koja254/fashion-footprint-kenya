import { Button } from "@/components/ui/button";
import solutionsImage from "@/assets/solutions-image.jpg";
import swap from "@/assets/swap.jpeg";
import poster from "@/assets/poster.jpeg";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Clothes Swaps",
      description: "Exchange clothes with friends, schools, or communities. Extend the life of clothing without creating new waste.",
      icon: "👕"
    },
    {
      title: "Upcycling", 
      description: "Turn old clothes into new designs. Transform jeans into bags, shirts into stylish outfits, and waste into creativity.",
      icon: "✂️"
    },
    {
      title: "Repurposing & Reselling Abroad",
      description: "Instead of dumping unusable clothes here, create systems to send them back to where they came from — Europe and other countries — for proper recycling or resale.",
      icon: "♻️"
    },
    {
      title: "Support Local Textiles",
      description: "Buy Kenyan-made fabrics and clothing. Build industries that last, and reduce dependence on imports.",
      icon: "🇰🇪"
    },
    {
      title: "Policy Change",
      description: "Push for stronger laws on textile imports, recycling, and corporate responsibility.",
      icon: "📜"
    }
  ];

  const scrollToResources = () => {
    const element = document.getElementById('resources');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight px-2">
            The problem is huge, but solutions are possible — and they begin with all of us.
          </h2>
          
          {/* Bold Tagline */}
          <div className="bg-gradient-hero rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-strong max-w-3xl mx-auto mt-6 sm:mt-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground">
              Together, we can turn fashion from a polluter into a protector.
            </p>
          </div>
        </div>

        {/* Image Grid - Two Images Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 animate-fade-in">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-strong">
            <img 
              src={swap} 
              alt="Community clothes swap event"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-strong">
            <img 
              src={poster} 
              alt="Sustainable fashion awareness poster"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        </div>

        {/* Solutions Grid - Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in text-center group border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solutions Image */}
        <div className="relative animate-fade-in mb-12 sm:mb-16">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-strong max-w-4xl mx-auto">
            <img 
              src={solutionsImage} 
              alt="Sustainable fashion solutions and community cooperation"
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-sustainable rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Join the Movement for Change
            </h3>
            <p className="text-base sm:text-lg text-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              These solutions require collective action. Learn more about our research, 
              recommendations, and how you can contribute to Kenya's sustainable textile future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="earth" 
                size="lg"
                onClick={scrollToResources}
                className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow"
              >
                View Our Research
              </Button>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow"
              >
                Take Action
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;