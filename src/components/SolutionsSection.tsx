import { Button } from "@/components/ui/button";
import solutionsImage from "@/assets/solutions-image.jpg";

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
    <section id="solutions" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            The problem is huge, but solutions are possible — and they begin with all of us.
          </h2>
          
          {/* Bold Tagline */}
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-strong max-w-3xl mx-auto mt-8">
            <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Together, we can turn fashion from a polluter into a protector.
            </p>
          </div>
        </div>

        {/* Solutions Grid - Cards Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
              alt="Sustainable fashion solutions and community cooperation"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-sustainable rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Join the Movement for Change
            </h3>
            <p className="text-lg text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              These solutions require collective action. Learn more about our research, 
              recommendations, and how you can contribute to Kenya's sustainable textile future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="earth" 
                size="lg"
                onClick={scrollToResources}
              >
                View Our Research
              </Button>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
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