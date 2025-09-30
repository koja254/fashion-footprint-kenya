// ResourcesSection.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const ResourcesSection: React.FC = () => {
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

  // Local video files saved in `public/video/`
  const tiktokVideos = [
    {
      title: "Approved Fashion",
      fileName: "tik-tok-1.mp4",
      description: "Havs to pass the vibe check"
    },
    {
      title: "Outfit Repeaters?",
      fileName: "tik-tok-2.mp4",
      description: "I think you are an outfit rememberer !!"
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

  const displayedVideos = showAllVideos ? videos : videos.slice(0, 2);

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resources & <span className="text-primary">Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deeper into the research, watch educational content, and access our legal findings.
          </p>
        </div>

        {/* Legal Research - Featured First */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-sustainable via-emerald-600 to-teal-600 rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300 overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
            </div>
            
            {/* Document Icon Illustration */}
            <div className="absolute top-8 right-8 opacity-20">
              <div className="w-32 h-40 bg-white rounded-lg transform rotate-12">
                <div className="w-full h-3 bg-sustainable-light mt-4"></div>
                <div className="w-3/4 h-2 bg-sustainable-light mt-2 ml-2"></div>
                <div className="w-3/4 h-2 bg-sustainable-light mt-2 ml-2"></div>
                <div className="w-1/2 h-2 bg-sustainable-light mt-2 ml-2"></div>
              </div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block p-5 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-lg border-2 border-white/40">
                <span className="text-6xl">📑</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                Legal Research Downloads
              </h3>
              <p className="text-lg text-white mb-8 leading-relaxed drop-shadow-md">
                Access our comprehensive legal analysis of textile pollution in Kenya, 
                including policy recommendations and regulatory frameworks.
              </p>
              <Button 
                variant="default" 
                size="lg"
                asChild
                className="gap-3 bg-white text-sustainable hover:bg-gray-50 shadow-xl text-lg px-8 py-6 font-semibold hover:scale-105 transition-transform"
              >
                <a href="/pdfs/legal-memo.pdf" target="_blank" rel="noopener noreferrer">
                  📥 Download Our Legal Memo
                </a>
              </Button>
              <p className="text-sm text-white/90 mt-4 font-medium drop-shadow">
                PDF document • Opens in new tab
              </p>
            </div>
          </div>
        </div>

        {/* Educational Videos Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              📺 Educational Videos
            </h3>
            <p className="text-lg text-muted-foreground">
              In-depth documentaries and talks about fashion sustainability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {displayedVideos.map((video, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border"
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
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {video.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {video.description}
                </p>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
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

        {/* TikTok Videos Section - Collapsible */}
        <div>
          <div className="text-center mb-8">
            <Button
              variant="default"
              size="lg"
              onClick={() => setShowTikToks(!showTikToks)}
              className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg"
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

          {/* TikTok Videos Grid - Collapsible */}
          {showTikToks && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {tiktokVideos.map((video, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-pink-200 dark:border-pink-800"
                >
                  <div className="aspect-[9/16] bg-muted rounded-xl mb-3 overflow-hidden shadow-md flex items-center justify-center">
                    {/* Local video player using files in public/video/ */}
                    <video
                      className="w-full h-full object-cover"
                      src={`/video/${video.fileName}`}
                      controls
                      preload="metadata"
                      playsInline
                      // muted can be set if you want autoplay on some devices, but leaving controls is user-friendly
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
  );
};

export default ResourcesSection;
