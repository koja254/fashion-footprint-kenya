import Navigation from "@/components/Navigation";
import Agwa from "@/assets/Agwa.jpeg";
import Samuel from "@/assets/Samuel.jpeg";
import Achol from "@/assets/Achol.jpeg";
import Yahya from "@/assets/Yahya.jpeg";
import Natasha from "@/assets/Natasha.jpeg";
import Swaleh from "@/assets/Swaleh.jpeg";
import Wairimu from "@/assets/Wairimu.jpeg";
import Sarah from "@/assets/Sarah.jpeg";
import Maingi from "@/assets/Maingi.jpeg";
import Paul from "@/assets/Paul.jpeg";

const About = () => {
  const teamMembers = [
    { name: "Agwa Awino", image: Agwa },
    { name: "Samuel Ngware", image: Samuel },
    { name: "Priscilla Achol", image: Achol },
    { name: "Yahya Adan", image: Yahya },
    { name: "Natasha Joy", image: Natasha },
    { name: "Swaleh Sanaa", image: Swaleh },
    { name: "Wairimu Mburu", image: Wairimu },
    { name: "Nkaiwuatei Sarah Kiserian", image: Sarah },
    { name: "Maingi Isidoro Fredrick Muriithi", image: Maingi },
    { name: "Paul Jerry Wafula", image: Paul }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Navigation />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Who <span className="text-emerald-600">We Are</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              We are <span className="font-semibold text-emerald-600">Solicitors Firm One</span>, 
              a dedicated team of final-year LLB students passionate about environmental law and sustainable change.
            </p>
            <p className="text-lg text-gray-600 font-medium">
              Course: International Environmental Law & Policy (SLS 4140)
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-10 sm:p-14 shadow-2xl text-center border border-gray-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                Together, we investigate how second-hand clothing shapes Kenya's environment, 
                economy, and legal landscape, working toward sustainable solutions that benefit 
                communities and preserve our planet.
              </p>
            </div>
          </div>

          {/* What Drives Us */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
              What Drives Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-emerald-200 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-6xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Legal Empowerment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the power of law to create lasting environmental change and protect communities.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-green-200 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Environmental Justice
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We advocate for policies that protect our environment and ensure sustainability for future generations.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-teal-200 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Community Action
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We empower communities with knowledge and tools to make informed, sustainable choices.
                </p>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 border-gray-200 hover:border-emerald-300 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-md border-4 border-emerald-100 group-hover:border-emerald-300 transition-colors"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                        <span className="text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      Final-Year LLB Student
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border-2 border-gray-200 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                As law students studying International Environmental Law & Policy, we witnessed firsthand 
                the devastating impact of textile waste in Kenya. What started as an academic project 
                evolved into a passionate campaign to drive real change.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                We saw mountains of discarded clothing in Dandora, spoke with communities affected by 
                textile pollution, and studied the legal frameworks that could protect our environment. 
                We realized that meaningful change requires more than just laws — it requires awareness, 
                community action, and a shift in mindset.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Fashion Footprint is our contribution to this movement. Through research, education, 
                and community engagement, we're working to transform how Kenya approaches fashion and 
                textile waste. We believe that by combining legal expertise with grassroots activism, 
                we can create a more sustainable future for all.
              </p>
            </div>
          </div>

          {/* Get Involved */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-10 shadow-2xl border border-emerald-500">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Join Us in Making a Difference
              </h3>
              <p className="text-base sm:text-lg text-white/95 mb-6 max-w-2xl mx-auto leading-relaxed">
                Whether you're a student, professional, or community member, 
                there's a place for you in our movement. Together, we can transform fashion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;