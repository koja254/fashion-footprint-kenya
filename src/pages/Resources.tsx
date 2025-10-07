import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";

const Resources = () => {
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [showTikToks, setShowTikToks] = useState(false);

  const videos = [
    {
      title: "Textile Mountain – The Hidden Burden of Our Fashion Waste",
      embedId: "UC4oFmX8tHw",
      description: "An eye-opening documentary about textile waste's global impact"
    },
    {
      title: "Can We Really Recycle Our Old Clothes?",
      embedId: "YvBS6qagQdE",
      description: "Exploring the realities and challenges of textile recycling"
    },
    {
      title: "The Simple Solution to Fast Fashion | TED – Josephine Philips",
      embedId: "Bh8dnw67rE0",
      description: "Innovative approaches to sustainable fashion consumption"
    },
    {
      title: "The True Cost of Fast Fashion",
      embedId: "tLfNUD0-8ts",
      description: "Understanding fashion's environmental and social costs"
    }
  ];

  const tiktokVideos = [
    {
      title: "Approved Fashion",
      fileName: "tik-tok-1.mp4",
      description: "Has to pass the vibe check"
    },
    {
      title: "Outfit Repeaters?",
      fileName: "tik-tok-2.mp4",
      description: "I think you are an outfit rememberer!!"
    },
    {
      title: "Sustainable Fashion Tips",
      fileName: "tik-tok-3.mp4",
      description: "Easy ways to reduce your fashion footprint"
    },
    {
      title: "What is the washing machine for? 🤣🤣",
      fileName: "tik-tok-4.mp4",
      description: "I think to wash repeat outfits"
    }
  ];

  const externalResources = [
    {
      title: "Embroidery 101",
      url: "https://www.instructables.com/Embroidery-101/",
      description: "Learn basic embroidery techniques",
      icon: "🧵"
    },
    {
      title: "How to Sew",
      url: "https://www.instructables.com/How-to-Sew./",
      description: "Master fundamental sewing skills",
      icon: "✂️"
    }
  ];

  const displayedVideos = showAllVideos ? videos : videos.slice(0, 2);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Resources & <span className="text-primary">Research</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Dive deeper into the research, watch educational content, and access our legal findings.
            </p>
          </div>

          {/* Legal Research - Featured */}
          <div className="mb-16">
            <div className="relative bg-gradient-hero rounded-3xl p-10 sm:p-14 shadow-glow max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="inline-block p-5 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-lg border-2 border-white/40">
                  <span className="text-6xl">📑</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
                  Legal Research Downloads
                </h2>
                <p className="text-base sm:text-lg text-primary-foreground/95 mb-8 leading-relaxed drop-shadow-md">
                  Access our comprehensive legal analysis of textile pollution in Kenya, 
                  including policy recommendations and regulatory frameworks.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl font-semibold"
                >
                  <a href="/pdfs/legal-memo.pdf" target="_blank" rel="noopener noreferrer">
                    📥 Download Our Legal Memo
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Educational Videos */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                📺 Educational Videos
              </h2>
              <p className="text-lg text-muted-foreground">
                In-depth documentaries and talks about fashion sustainability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {displayedVideos.map((video, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border-2 border-border"
                >
                  <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden shadow-md">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {video.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllVideos(!showAllVideos)}
                className="gap-2"
              >
                {showAllVideos ? (
                  <>
                    Show Less Videos <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show All {videos.length} Videos <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* External Learning Resources */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10">
              External Learning Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {externalResources.map((resource, index) => (
                <div 
                  key={index}
                  className="bg-gradient-earth rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{resource.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-base text-foreground/90 leading-relaxed mb-6">
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
                      Learn More <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* TikTok Videos - Collapsible */}
          <div>
            <div className="text-center mb-8">
              <Button
                variant="hero"
                size="lg"
                onClick={() => setShowTikToks(!showTikToks)}
                className="gap-2"
              >
                {showTikToks ? (
                  <>
                    Hide TikTok Shorts <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    📱 Watch TikTok Shorts <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Quick, engaging content about fashion sustainability
              </p>
            </div>

            {showTikToks && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                {tiktokVideos.map((video, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1 border-2 border-primary/20"
                  >
                    <div className="aspect-[9/16] bg-muted rounded-xl mb-3 overflow-hidden shadow-md">
                      <video
                        className="w-full h-full object-cover"
                        src={`/video/${video.fileName}`}
                        controls
                        preload="metadata"
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <h4 className="text-base font-semibold text-foreground mb-1">
                      {video.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {video.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
