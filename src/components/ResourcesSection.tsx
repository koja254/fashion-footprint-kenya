import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
  const videos = [
    {
      title: "Textile Mountain – The Hidden Burden of Our Fashion Waste",
      embedId: "VGiH6lJg30w",
      description: "An eye-opening documentary about textile waste's global impact"
    },
    {
      title: "Can We Really Recycle Our Old Clothes?",
      embedId: "tLfNUD0-8ts", 
      description: "Exploring the realities and challenges of textile recycling"
    },
    {
      title: "The Simple Solution to Fast Fashion | TED – Josephine Philips",
      embedId: "3oDPfqId-HY",
      description: "Innovative approaches to sustainable fashion consumption"
    },
    {
      title: "The True Cost of Fast Fashion",
      embedId: "NrAr1xD6uNM",
      description: "Understanding fashion's environmental and social costs"
    }
  ];

  const handleDownloadMemo = () => {
    // This would normally link to an actual PDF file
    // For demonstration, we'll show an alert
    alert("Legal Memo would be downloaded here. In production, this would link to the actual PDF file.");
  };

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resources & Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deeper into the research, watch educational content, and access our legal findings.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Educational Videos
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {video.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads Section */}
        <div className="text-center">
          <div className="bg-gradient-earth rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-6">
              Legal Research Downloads
            </h3>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Access our comprehensive legal analysis of textile pollution in Kenya, 
              including policy recommendations and regulatory frameworks.
            </p>
            <Button 
              variant="sustainable" 
              size="lg"
              onClick={handleDownloadMemo}
              className="gap-3"
            >
              <span>📑</span>
              Download Our Legal Memo
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              PDF document • Opens in new tab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;