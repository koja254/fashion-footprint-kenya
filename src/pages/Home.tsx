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
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/70"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              Fashion <span className="text-emerald-600">Footprint</span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-8 font-semibold drop-shadow-sm">
              Transforming Fashion for a Sustainable Future
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in space-y-8 text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 leading-relaxed mb-6">
                The fashion industry's rapid growth has come at a <span className="font-bold text-emerald-600">high environmental cost</span>.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Our campaign works to shift the narrative from fast consumption to sustainable, 
                responsible choices that protect people and the planet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Public Awareness</h3>
                <p className="text-gray-600 leading-relaxed">
                  We promote public awareness, legal literacy, and sustainable behaviour change to 
                  empower individuals and communities to make informed decisions about fashion and textile use.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Hub</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our website serves as a knowledge and engagement hub, offering practical guides, 
                  legal insights, and updates on textile waste management, thrifting, repair, and upcycling.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 sm:p-12 shadow-sm border border-emerald-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                Through <span className="font-semibold text-gray-900">grassroots initiatives</span>, 
                <span className="font-semibold text-emerald-700"> creative advocacy</span>, and 
                <span className="font-semibold text-green-700"> legal empowerment</span>, 
                we aim to reduce textile waste, strengthen sustainable consumer practices, 
                and support Kenya's commitment to environmental conservation and green growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 sm:p-14 shadow-lg">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Together, we can build a fashion system that values sustainability, responsibility, and lasting impact.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Ready to Make a Difference?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-xl shadow-md font-semibold transition-all hover:shadow-lg"
              >
                <Link to="/problem">Explore the Problem</Link>
              </Button>
              <Button 
                asChild
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-emerald-300 text-lg px-8 py-6 rounded-xl shadow-md font-semibold transition-all"
              >
                <Link to="/solutions">Discover Solutions</Link>
              </Button>
              <Button 
                asChild
                className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-xl shadow-md font-semibold transition-all hover:shadow-lg"
              >
                <Link to="/community">Join the Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;