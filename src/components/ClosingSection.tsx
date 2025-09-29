import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTeam = () => {
    const element = document.getElementById('team');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8 leading-tight">
            Together, We Can Transform Kenya's Fashion Footprint
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
            Into a model of sustainability, justice, and hope for future generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="sustainable" 
              size="lg"
              onClick={scrollToTeam}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Meet Our Team
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToTop}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Back to Top
            </Button>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/80 text-lg mb-4">
              Solicitors Firm One
            </p>
            <p className="text-primary-foreground/70">
              International Environmental Law & Policy (SLS 4140) • Final Year LLB Project
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-bright/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default ClosingSection;