import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight drop-shadow-lg">
            Fashion <span className="text-primary">Footprint</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Rethinking Kenya's Second-Hand Clothing Story
          </p>
          
          {/* New Intro Text */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 shadow-strong max-w-3xl mx-auto border border-primary/20">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-medium">
              This campaign is about awareness, responsibility and seeking solutions. We ask one simple question: 
              <span className="block mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                What kind of footprint will you leave?
              </span>
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto font-medium drop-shadow-sm">
            Legal research, storytelling, and community solutions for a sustainable textile future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('problem')}
              className="animate-scale-in animation-delay-300 w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow"
            >
              Explore the Problem
            </Button>
            <Button 
              variant="sustainable" 
              size="lg"
              onClick={() => scrollToSection('solutions')}
              className="animate-scale-in animation-delay-500 w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow"
            >
              Discover Solutions
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;