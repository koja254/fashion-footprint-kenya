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
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32 bg-card">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Who <span className="text-primary">We Are</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              We are <span className="font-semibold text-primary">Solicitors Firm One</span>, 
              a dedicated team of final-year LLB students passionate about environmental law and sustainable change.
            </p>
            <p className="text-lg text-secondary-dark font-medium">
              Course: International Environmental Law & Policy (SLS 4140)
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <div className="bg-gradient-hero rounded-2xl p-10 sm:p-14 shadow-glow text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-primary-foreground/95 leading-relaxed max-w-4xl mx-auto">
                Together, we investigate how second-hand clothing shapes Kenya's environment, 
                economy, and legal landscape, working toward sustainable solutions that benefit 
                communities and preserve our planet.
              </p>
            </div>
          </div>

          {/* What Drives Us */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10">
              What Drives Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-warm rounded-2xl p-8 shadow-soft text-center">
                <div className="text-6xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Legal Empowerment
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  We believe in the power of law to create lasting environmental change and protect communities.
                </p>
              </div>

              <div className="bg-gradient-earth rounded-2xl p-8 shadow-soft text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Environmental Justice
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  We advocate for policies that protect our environment and ensure sustainability for future generations.
                </p>
              </div>

              <div className="bg-gradient-sustainable rounded-2xl p-8 shadow-soft text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-sustainable-foreground mb-3">
                  Community Action
                </h3>
                <p className="text-sustainable-foreground/95 leading-relaxed">
                  We empower communities with knowledge and tools to make informed, sustainable choices.
                </p>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 border-border"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-md border-4 border-primary/30"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <h3 className="text-sm sm:text-base font-semibold text-foreground leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2">
                      Final-Year LLB Student
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-soft border-2 border-border">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6">
                As law students studying International Environmental Law & Policy, we witnessed firsthand 
                the devastating impact of textile waste in Kenya. What started as an academic project 
                evolved into a passionate campaign to drive real change.
              </p>
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6">
                We saw mountains of discarded clothing in Dandora, spoke with communities affected by 
                textile pollution, and studied the legal frameworks that could protect our environment. 
                We realized that meaningful change requires more than just laws — it requires awareness, 
                community action, and a shift in mindset.
              </p>
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                Fashion Footprint is our contribution to this movement. Through research, education, 
                and community engagement, we're working to transform how Kenya approaches fashion and 
                textile waste. We believe that by combining legal expertise with grassroots activism, 
                we can create a more sustainable future for all.
              </p>
            </div>
          </div>

          {/* Get Involved */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-sustainable rounded-2xl p-8 sm:p-10 shadow-strong">
              <h3 className="text-2xl sm:text-3xl font-bold text-sustainable-foreground mb-4">
                Join Us in Making a Difference
              </h3>
              <p className="text-base sm:text-lg text-sustainable-foreground/95 mb-6 max-w-2xl mx-auto leading-relaxed">
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
