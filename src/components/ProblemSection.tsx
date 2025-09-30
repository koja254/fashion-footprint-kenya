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
    <section id="problem" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            The Problem We Face
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kenya's textile landscape reveals a complex web of environmental, 
            economic, and social challenges that demand urgent attention.
          </p>
        </div>

        {/* Statistics Grid - Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 sm:p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in text-center border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl mb-4">{problem.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-3">
                {problem.stat}
              </div>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Problem Illustration */}
        <div className="relative animate-fade-in mb-12 sm:mb-16">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-strong max-w-4xl mx-auto">
            <img 
              src={problemIllustration} 
              alt="Environmental impact of textile waste in Kenya"
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            See the Impact
          </h3>
          <div className="max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-strong">
            <video 
              controls 
              className="w-full h-auto aspect-video"
              poster={problemIllustration}
            >
              <source src="/video/textile-waste.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-muted-foreground mt-4 text-xs sm:text-sm px-4">
            Add your MP4 video file to <code className="bg-muted px-2 py-1 rounded text-xs">public/video/textile-waste.mp4</code>
          </p>
        </div>

        {/* Impact Statement */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-earth rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-dark mb-4">
              The Urgent Reality
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
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