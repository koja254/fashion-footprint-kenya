import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

/**
 * Small hook to check whether a given URL responds (HEAD request).
 * Returns: { checking, ok } where ok === true means the resource is reachable (status 200/206).
 */
function useVideoAvailable(url: string) {
  const [checking, setChecking] = useState(true);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const check = async () => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (!cancelled) {
          // Accept 200 OK or 206 Partial Content (range requests)
          setOk(res.status === 200 || res.status === 206);
        }
      } catch (err) {
        if (!cancelled) setOk(false);
      } finally {
        if (!cancelled) setChecking(false);
      }
    };
    check();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return { checking, ok };
}

const Upcycling: React.FC = () => {
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

  // Path served from public/ -> /video/upcycling.mp4
  const videoPath = "/video/upcycling.mp4";
  const { checking: checkingVideo, ok: videoAvailable } = useVideoAvailable(videoPath);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Navigation />

      <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Art of <span className="text-emerald-600">Upcycling</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform waste into wonder — creative ways to give old clothes new life
            </p>
          </div>

          {/* Hero Statement */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg mb-16 text-center border border-gray-200">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Upcycling isn't just about saving clothes — it's about <span className="text-emerald-600">reimagining</span> what fashion can be.
            </p>
          </div>

          {/* Video Section - replaced placeholder with actual video + availability check */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
                Watch: Upcycling Tutorials & Inspiration
              </h2>

              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl overflow-hidden shadow-sm mb-6 flex items-center justify-center border border-gray-200">
                {checkingVideo ? (
                  // Checking state
                  <div className="text-center p-8">
                    <div className="text-4xl mb-4 animate-pulse">⏳</div>
                    <p className="text-lg font-medium text-gray-700">Checking for your video…</p>
                    <p className="text-sm text-gray-500 mt-2">If this hangs, try restarting your dev server.</p>
                  </div>
                ) : videoAvailable ? (
                  // Show the video
                  <video
                    className="w-full h-full object-cover"
                    src={videoPath}
                    controls
                    preload="metadata"
                    // Optional poster: put /video/upcycling-poster.jpg in public/ if you want a thumbnail
                    // poster="/video/upcycling-poster.jpg"
                  >
                    Sorry — your browser doesn't support embedded videos. You can download it{" "}
                    <a href={videoPath} className="underline">
                      here
                    </a>.
                  </video>
                ) : (
                  // Fallback UI when video not found or unreachable
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-xl font-semibold text-gray-700 mb-2">
                      Video not found
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      Place your file at <code className="bg-gray-200 px-2 py-1 rounded text-xs">public/video/upcycling.mp4</code>
                      {" "}and restart the dev server.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <Button asChild className="bg-emerald-600 text-white px-6 py-3">
                        <a href={videoPath} download>
                          Download (if available)
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="px-6 py-3">
                        <a href="https://developer.chrome.com/docs/devtools/network/" target="_blank" rel="noopener noreferrer">
                          Debug Network
                        </a>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Tip: Ensure the filename is exactly <strong>upcycling.mp4</strong> (case-sensitive on some systems).
                    </p>
                  </div>
                )}
              </div>

              <p className="text-center text-gray-600 text-sm sm:text-base">
                Learn step-by-step techniques to transform old clothing into new treasures
              </p>
            </div>
          </div>

          {/* Upcycling Ideas Grid */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
              Upcycling Ideas to Try
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcyclingIdeas.map((idea, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-emerald-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {idea.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {idea.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-4">
                    {idea.description}
                  </p>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    idea.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 border border-green-200' :
                    idea.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                    'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {idea.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
              Learn the Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learningResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-emerald-300 group"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  <Button
                    asChild
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-md font-semibold group-hover:scale-105 transition-transform"
                  >
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Start Learning <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Community Gallery */}
          <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Share Your Creations
              </h2>
              <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
                Have you created something amazing through upcycling?
                Share your projects with our community on Instagram and inspire others!
              </p>
              <Button
                asChild
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl font-semibold hover:scale-105 transition-transform"
              >
                <a
                  href="https://www.instagram.com/fashionfootprintke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Instagram className="w-6 h-6" />
                  Follow @fashionfootprintke
                </a>
              </Button>
            </div>
          </div>

          {/* NEW: CTA to Resources */}
          <div className="mt-12 text-center">
            <Button size="lg" asChild className="bg-emerald-600 text-white px-8 py-4 font-semibold shadow-lg">
              <Link to="/resources">Find Resources & Research →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upcycling;
