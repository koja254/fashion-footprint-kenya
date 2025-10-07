import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Calendar, Users } from "lucide-react";
import Navigation from "@/components/Navigation";

const Community = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-20T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Join Our <span className="text-primary">Community</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Be part of the movement. Connect, share, and make a difference together.
            </p>
          </div>

          {/* Instagram Section */}
          <div className="mb-16">
            <div className="bg-gradient-warm rounded-3xl p-10 sm:p-14 shadow-strong text-center">
              <Instagram className="w-16 h-16 sm:w-20 sm:h-20 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Follow The Swap Circle
              </h2>
              <p className="text-lg sm:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Stay updated with our latest events, upcycling inspiration, and community stories. 
                Share your sustainable fashion journey with us!
              </p>
              <Button
                variant="hero"
                size="lg"
                asChild
                className="text-lg px-10 py-6 shadow-glow"
              >
                <a 
                  href="https://www.instagram.com/the_swap_circle?igsh=cWN3ZWxyeHhqemM2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Instagram className="w-6 h-6" />
                  @the_swap_circle
                </a>
              </Button>
            </div>
          </div>

          {/* Event Countdown */}
          <div className="mb-16">
            <div className="bg-gradient-hero rounded-3xl p-10 sm:p-14 shadow-glow">
              <div className="text-center mb-8">
                <Calendar className="w-16 h-16 sm:w-20 sm:h-20 text-primary-foreground mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                  Next Cloth Swap Event
                </h2>
                <p className="text-xl sm:text-2xl text-primary-foreground/95 font-semibold">
                  October 20, 2025
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary-foreground/30">
                  <div className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                    {timeLeft.days}
                  </div>
                  <div className="text-sm sm:text-base text-primary-foreground/90 font-medium">
                    Days
                  </div>
                </div>
                <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary-foreground/30">
                  <div className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                    {timeLeft.hours}
                  </div>
                  <div className="text-sm sm:text-base text-primary-foreground/90 font-medium">
                    Hours
                  </div>
                </div>
                <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary-foreground/30">
                  <div className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-sm sm:text-base text-primary-foreground/90 font-medium">
                    Minutes
                  </div>
                </div>
                <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary-foreground/30">
                  <div className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-sm sm:text-base text-primary-foreground/90 font-medium">
                    Seconds
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-lg text-primary-foreground/95 mb-6">
                  Mark your calendar and join us for an exciting day of fashion exchange!
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Community */}
          <div className="mb-16">
            <div className="bg-gradient-sustainable rounded-3xl p-10 sm:p-14 shadow-strong text-center">
              <MessageCircle className="w-16 h-16 sm:w-20 sm:h-20 text-sustainable-foreground mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-sustainable-foreground mb-4">
                Join The Swap Circle WhatsApp Group
              </h2>
              <p className="text-lg sm:text-xl text-sustainable-foreground/95 mb-8 max-w-2xl mx-auto leading-relaxed">
                Connect with like-minded individuals, get event updates, share tips, 
                and be part of our growing sustainable fashion community.
              </p>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-sustainable-foreground text-sustainable hover:bg-sustainable-foreground/90 text-lg px-10 py-6 shadow-lg"
              >
                <a 
                  href="https://chat.whatsapp.com/KaNMhkcDE6QGx8GbwxNRP7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Join WhatsApp Group
                </a>
              </Button>
            </div>
          </div>

          {/* Community Benefits */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-10">
              Why Join Our Community?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border-2 border-border text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Meet people who share your passion for sustainable fashion and environmental responsibility.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border-2 border-border text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Events
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get early access to swap events, workshops, and community gatherings.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border-2 border-border text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Learn & Share
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exchange tips, tutorials, and inspiration for upcycling and sustainable living.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-earth rounded-2xl p-8 sm:p-10 shadow-soft">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Together, We Make the Difference
              </h3>
              <p className="text-base sm:text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Every person who joins our community is a step towards a more sustainable future. 
                Your participation matters — let's transform fashion together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
