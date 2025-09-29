const TeamSection = () => {
  const teamMembers = [
    "Agwa Awino",
    "Samuel Ngware", 
    "Priscilla Achol",
    "Yahya Adan",
    "Natasha Joy",
    "Swaleh Sanaa",
    "Wairimu Mburu",
    "Nkaiwuatei Sarah Kiserian",
    "Maingi Isidoro Fredrick Muriithi",
    "Paul Jerry Wafula"
  ];

  return (
    <section id="team" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We are <span className="font-semibold text-primary">Solicitors Firm One</span>, 
            a dedicated team of final-year LLB students passionate about environmental law and sustainable change.
          </p>
          <p className="text-lg text-secondary-dark">
            Course: International Environmental Law & Policy (SLS 4140)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((name, index) => (
            <div 
              key={name}
              className="bg-background rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Final-Year LLB Student
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-earth rounded-xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-secondary-dark mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Together, we investigate how second-hand clothing shapes Kenya's environment, 
              economy, and legal landscape, working toward sustainable solutions that benefit 
              communities and preserve our planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;