import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight drop-shadow-lg">
              Fashion <span className="text-primary">Footprint</span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-primary mb-8 font-semibold drop-shadow-md">
              Transforming Fashion for a Sustainable Future
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in space-y-8 text-center">
            <div className="bg-gradient-warm rounded-2xl p-8 sm:p-12 shadow-strong">
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
                The fashion industry's rapid growth has come at a <span className="font-bold text-primary">high environmental cost</span>.
              </p>
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
                Our campaign works to shift the narrative from fast consumption to sustainable, 
                responsible choices that protect people and the planet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-2xl p-8 shadow-soft border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Public Awareness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We promote public awareness, legal literacy, and sustainable behaviour change to 
                  empower individuals and communities to make informed decisions about fashion and textile use.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-soft border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Knowledge Hub</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our website serves as a knowledge and engagement hub, offering practical guides, 
                  legal insights, and updates on textile waste management, thrifting, repair, and upcycling.
                </p>
              </div>
            </div>

            <div className="bg-gradient-earth rounded-2xl p-8 sm:p-12 shadow-strong">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Approach</h3>
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6">
                Through <span className="font-semibold text-secondary-dark">grassroots initiatives</span>, 
                <span className="font-semibold text-primary"> creative advocacy</span>, and 
                <span className="font-semibold text-sustainable"> legal empowerment</span>, 
                we aim to reduce textile waste, strengthen sustainable consumer practices, 
                and support Kenya's commitment to environmental conservation and green growth.
              </p>
            </div>

            <div className="bg-gradient-hero rounded-2xl p-10 sm:p-14 shadow-glow">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary-foreground leading-tight">
                Together, we can build a fashion system that values sustainability, responsibility, and lasting impact.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Ready to Make a Difference?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg"
                asChild
                className="w-full sm:w-auto shadow-strong"
              >
                <Link to="/problem">Explore the Problem</Link>
              </Button>
              <Button 
                variant="sustainable" 
                size="lg"
                asChild
                className="w-full sm:w-auto shadow-strong"
              >
                <Link to="/solutions">Discover Solutions</Link>
              </Button>
              <Button 
                variant="default" 
                size="lg"
                asChild
                className="w-full sm:w-auto shadow-strong"
              >
                <Link to="/community">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
