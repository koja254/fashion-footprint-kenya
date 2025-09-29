import { Button } from "@/components/ui/button";
import solutionsImage from "@/assets/solutions-image.jpg";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Legal Framework Reform",
      description: "Strengthening environmental regulations and enforcement mechanisms for textile waste management.",
      icon: "⚖️"
    },
    {
      title: "Policy Innovation", 
      description: "Creating comprehensive policies that balance international trade with environmental protection.",
      icon: "📋"
    },
    {
      title: "Community Engagement",
      description: "Empowering local communities with education and sustainable textile alternatives.",
      icon: "🤝"
    },
    {
      title: "Economic Incentives",
      description: "Developing market-based solutions that make sustainable practices economically viable.",
      icon: "💡"
    },
    {
      title: "International Cooperation",
      description: "Building partnerships with global stakeholders for responsible textile trade.",
      icon: "🌍"
    },
    {
      title: "Innovation Support",
      description: "Fostering local textile innovation and circular economy initiatives.",
      icon: "🚀"
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Solutions Within Reach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Change is possible. Through legal innovation, policy reform, and community action, 
            we can transform Kenya's textile landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Solutions Image */}
          <div className="relative animate-fade-in lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={solutionsImage} 
                alt="Sustainable fashion solutions and community cooperation"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Solutions Grid */}
          <div className="grid gap-6 lg:order-1">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-background rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl flex-shrink-0">{solution.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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