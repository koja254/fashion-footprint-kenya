import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";

const Upcycling = () => {
  const upcyclingIdeas = [
    {
      title: "Jeans to Bags",
      description: "Transform old denim into stylish tote bags, pouches, or backpacks",
      icon: "👖",
      difficulty: "Beginner"
    },
    {
      title: "T-Shirt Quilts",
      description: "Create memory quilts from old t-shirts with sentimental value",
      icon: "🧵",
      difficulty: "Intermediate"
    },
    {
      title: "Sweater Pillows",
      description: "Turn cozy sweaters into decorative throw pillows",
      icon: "🛋️",
      difficulty: "Beginner"
    },
    {
      title: "Shirt to Dress",
      description: "Redesign oversized shirts into fashionable dresses",
      icon: "👗",
      difficulty: "Advanced"
    },
    {
      title: "Fabric Jewelry",
      description: "Create unique accessories from fabric scraps and old buttons",
      icon: "💎",
      difficulty: "Beginner"
    },
    {
      title: "Patchwork Creations",
      description: "Combine multiple fabric pieces into artistic patchwork designs",
      icon: "🎨",
      difficulty: "Intermediate"
    }
  ];

  const learningResources = [
    {
      title: "Embroidery 101",
      url: "https://www.instructables.com/Embroidery-101/",
      description: "Learn basic embroidery techniques to enhance your upcycled creations"
    },
    {
      title: "How to Sew",
      url: "https://www.instructables.com/How-to-Sew./",
      description: "Master fundamental sewing skills for upcycling projects"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Art of <span className="text-primary">Upcycling</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform waste into wonder — creative ways to give old clothes new life
            </p>
          </div>

          {/* Hero Statement */}
          <div className="bg-gradient-warm rounded-2xl p-8 sm:p-12 shadow-strong mb-16 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Upcycling isn't just about saving clothes — it's about <span className="text-primary">reimagining</span> what fashion can be.
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <div className="bg-card rounded-2xl p-6 sm:p-10 shadow-strong">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                Watch: Upcycling Tutorials & Inspiration
              </h2>
              <div className="aspect-video bg-muted rounded-xl overflow-hidden shadow-soft mb-6 flex items-center justify-center">
                {/* Placeholder for video - user can add their own video file */}
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-xl font-semibold text-muted-foreground mb-2">
                    Video Coming Soon
                  </p>
                  <p className="text-muted-foreground">
                    Add your upcycling tutorial video to: <code className="bg-muted px-2 py-1 rounded">/public/video/upcycling.mp4</code>
                  </p>
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm sm:text-base">
                Learn step-by-step techniques to transform old clothing into new treasures
              </p>
            </div>
          </div>

          {/* Upcycling Ideas Grid */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10">
              Upcycling Ideas to Try
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcyclingIdeas.map((idea, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 border-border group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {idea.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {idea.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    {idea.description}
                  </p>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                    idea.difficulty === 'Beginner' ? 'bg-sustainable/20 text-sustainable' :
                    idea.difficulty === 'Intermediate' ? 'bg-accent/20 text-accent-foreground' :
                    'bg-primary/20 text-primary'
                  }`}>
                    {idea.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10">
              Learn the Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learningResources.map((resource, index) => (
                <div 
                  key={index}
                  className="bg-gradient-earth rounded-2xl p-8 sm:p-10 shadow-soft hover:shadow-strong transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Start Learning <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Community Gallery Placeholder */}
          <div className="bg-gradient-hero rounded-2xl p-8 sm:p-12 shadow-glow text-center">
            <div className="text-6xl mb-6">📸</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Share Your Creations
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/95 mb-6 max-w-2xl mx-auto leading-relaxed">
              Have you created something amazing through upcycling? 
              Share your projects with our community on Instagram and inspire others!
            </p>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a 
                href="https://www.instagram.com/the_swap_circle" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Follow @the_swap_circle
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upcycling;
