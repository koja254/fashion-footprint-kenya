import problemIllustration from "@/assets/problem-illustration.png";

const ProblemSection = () => {
  const problems = [
    {
      stat: "230,000+",
      description: "tonnes of second-hand clothes imported yearly to Kenya",
      icon: "📦"
    },
    {
      stat: "40%",
      description: "of imported clothes are unsellable upon arrival",
      icon: "❌"
    },
    {
      stat: "100%",
      description: "of textile rejects end up in Dandora dumpsite or rivers",
      icon: "🗑️"
    },
    {
      stat: "∞",
      description: "Microplastics threaten fish, livestock, and human health",
      icon: "🐠"
    },
    {
      stat: "↓",
      description: "Local textile industry is being suppressed",
      icon: "🏭"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Problem We Face
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kenya's textile landscape reveals a complex web of environmental, 
            economic, and social challenges that demand urgent attention.
          </p>
        </div>

        {/* Statistics Grid - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <div className="text-4xl font-bold text-primary mb-3">
                {problem.stat}
              </div>
              <p className="text-foreground text-base leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Problem Illustration */}
        <div className="relative animate-fade-in mb-16">
          <div className="rounded-2xl overflow-hidden shadow-strong max-w-4xl mx-auto">
            <img 
              src={problemIllustration} 
              alt="Environmental impact of textile waste in Kenya"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            See the Impact
          </h3>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-strong">
            <video 
              controls 
              className="w-full h-auto"
              poster={problemIllustration}
            >
              <source src="/video/textile-waste.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-muted-foreground mt-4 text-sm">
            Add your MP4 video file to <code className="bg-muted px-2 py-1 rounded">public/video/textile-waste.mp4</code>
          </p>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-earth rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-4">
              The Urgent Reality
            </h3>
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
              These statistics represent more than numbers—they reflect a crisis that affects 
              Kenya's environment, threatens public health, and undermines local economic opportunities. 
              The time for change is now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;