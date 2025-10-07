import Navigation from "@/components/Navigation";
import problemImage from "@/assets/problem-illustration.png";

const Problem = () => {
  const statistics = [
    { number: "92 Million", label: "Tons of textile waste annually", icon: "🗑️" },
    { number: "10%", label: "Of global carbon emissions from fashion", icon: "🌍" },
    { number: "2,700L", label: "Water to make one cotton shirt", icon: "💧" },
    { number: "85%", label: "Of textiles end up in landfills", icon: "📉" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Problem We <span className="text-primary">Face</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding the scale of fashion's environmental impact — globally and in Kenya
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {statistics.map((stat, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-3">
                  {stat.number}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Problem Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-strong">
            <img 
              src={problemImage} 
              alt="Visual representation of textile waste and environmental impact"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Problem Description */}
          <div className="space-y-8 mb-16">
            <div className="bg-gradient-warm rounded-2xl p-8 sm:p-10 shadow-soft">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                The Global Crisis
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Fast fashion has created a throwaway culture where clothing is designed to be worn 
                a few times and discarded. This linear model depletes natural resources, pollutes 
                waterways, and contributes significantly to climate change. The fashion industry is 
                now the second-largest polluter globally, producing more carbon emissions than 
                international flights and maritime shipping combined.
              </p>
            </div>

            <div className="bg-gradient-earth rounded-2xl p-8 sm:p-10 shadow-soft">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Kenya's Textile Challenge
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                Kenya receives an overwhelming amount of second-hand clothing, much of which ends 
                up in landfills or is illegally dumped. The Dandora dumpsite in Nairobi has become 
                a symbol of this crisis, with mountains of discarded textiles releasing toxic 
                chemicals into the soil and groundwater.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Meanwhile, Kenya's domestic textile industry struggles to compete with the flood of 
                cheap imports, leading to job losses and economic challenges. This creates a cycle 
                where we become both a dumping ground and economically dependent on an unsustainable system.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-card rounded-2xl p-6 sm:p-10 shadow-strong">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
              Watch: Understanding the Crisis
            </h2>
            <div className="aspect-video bg-muted rounded-xl overflow-hidden shadow-soft">
              <video
                className="w-full h-full object-cover"
                src="/video/textile-waste.mp4"
                controls
                preload="metadata"
                poster={problemImage}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm sm:text-base">
              An in-depth look at how textile waste impacts our environment and communities
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-hero rounded-2xl p-8 sm:p-10 shadow-glow">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
                But There's Hope
              </h3>
              <p className="text-lg sm:text-xl text-primary-foreground/95 mb-6 leading-relaxed">
                While the problem is massive, solutions exist. Through awareness, action, and 
                collective effort, we can transform fashion from a polluter into a protector.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Problem;
