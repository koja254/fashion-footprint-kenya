import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Calendar, Users, CalendarPlus, Share2, QrCode } from "lucide-react";
import Navigation from "@/components/Navigation";
import event from "@/assets/event.jpeg";

const Community = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showQrHint, setShowQrHint] = useState(false);

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

  const addToCalendar = () => {
    const event = {
      title: "The Swap Circle - Cloth Swap Event",
      description: "Join us for an exciting day of sustainable fashion exchange! Bring your pre-loved clothes and discover new treasures.",
      location: "TBA",
      start: "2025-10-20T10:00:00",
      end: "2025-10-20T16:00:00"
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.start.replace(/[-:]/g, '')}/${event.end.replace(/[-:]/g, '')}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Navigation />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-emerald-600">Community</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of the movement. Connect, share, and make a difference together.
            </p>
          </div>

          {/* Event Countdown with Poster */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Countdown Section */}
                <div className="p-10 sm:p-14 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-gray-50">
                  <div className="text-center lg:text-left mb-8">
                    <div className="inline-flex items-center gap-3 bg-emerald-50 rounded-full px-6 py-3 mb-6 border border-emerald-100">
                      <Calendar className="w-6 h-6 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Upcoming Event</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                      Next Cloth Swap
                    </h2>
                    <p className="text-2xl sm:text-3xl text-gray-700 font-bold mb-2">
                      October 20, 2025
                    </p>
                    <p className="text-lg text-gray-600">
                      10:00 AM - 4:00 PM
                    </p>
                  </div>

                  {/* Countdown Timer */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    <div className="bg-white rounded-xl p-4 border-2 border-gray-200 text-center transform hover:scale-105 hover:border-emerald-300 transition-all shadow-sm">
                      <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-1">
                        {timeLeft.days}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wider">
                        Days
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-2 border-gray-200 text-center transform hover:scale-105 hover:border-emerald-300 transition-all shadow-sm">
                      <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-1">
                        {timeLeft.hours}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wider">
                        Hours
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-2 border-gray-200 text-center transform hover:scale-105 hover:border-emerald-300 transition-all shadow-sm">
                      <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-1">
                        {timeLeft.minutes}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wider">
                        Minutes
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-2 border-gray-200 text-center transform hover:scale-105 hover:border-emerald-300 transition-all shadow-sm">
                      <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-1">
                        {timeLeft.seconds}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wider">
                        Seconds
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={addToCalendar}
                      className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700 text-lg px-8 py-6 rounded-xl shadow-lg font-semibold"
                    >
                      <CalendarPlus className="w-5 h-5 mr-2" />
                      Add to Calendar
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 text-lg px-8 py-6 rounded-xl font-semibold"
                    >
                      <Share2 className="w-5 h-5 mr-2" />
                      Share Event
                    </Button>
                  </div>
                </div>

                {/* Event Poster - Interactive */}
                <div 
                  className="relative h-full min-h-[400px] lg:min-h-[600px] group cursor-pointer"
                  onMouseEnter={() => setShowQrHint(true)}
                  onMouseLeave={() => setShowQrHint(false)}
                >
                  <img 
                    src={event} 
                    alt="The Swap Circle Event - Scan QR Code for Details" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay that appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${showQrHint ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  {/* QR Code Indicator */}
                  <div className={`absolute top-8 right-8 transition-all duration-300 ${showQrHint ? 'scale-110' : 'scale-100'}`}>
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border-2 border-emerald-400">
                      <QrCode className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>

                  {/* Info Box - Appears on hover */}
                  <div className={`absolute bottom-8 left-8 right-8 transition-all duration-500 ${showQrHint ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="bg-emerald-100 rounded-lg p-3 flex-shrink-0">
                          <QrCode className="w-6 h-6 text-emerald-700" />
                        </div>
                        <div>
                          <p className="text-gray-900 text-lg font-bold mb-2">
                            Scan QR Code for Details
                          </p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Swap clothes, meet amazing people, enjoy refreshments, and learn upcycling techniques!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Permanent subtle hint */}
                  {!showQrHint && (
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-pulse">
                        <QrCode className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Instagram */}
            <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-gray-300 transition-all shadow-lg hover:shadow-xl">
              <div className="relative p-10 sm:p-12 text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Follow Us on Instagram
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                  Daily inspiration, event updates, and sustainable fashion tips. Join our visual community!
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 text-lg px-10 py-6 rounded-full shadow-lg font-semibold group-hover:scale-105 transition-transform"
                >
                  <a 
                    href="https://www.instagram.com/the_swap_circle" 
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

            {/* WhatsApp */}
            <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-gray-300 transition-all shadow-lg hover:shadow-xl">
              <div className="relative p-10 sm:p-12 text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Join Our WhatsApp
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                  Connect directly with our community. Get instant updates and share your journey!
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 text-lg px-10 py-6 rounded-full shadow-lg font-semibold group-hover:scale-105 transition-transform"
                >
                  <a 
                    href="https://chat.whatsapp.com/KaNMhkcDE6QGx8GbwxNRP7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Join Group
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Community Benefits */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900">
              Why Join Our Community?
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Discover the amazing benefits of being part of The Swap Circle family
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-emerald-300 text-center group hover:-translate-y-2">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Connect & Network
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Meet passionate individuals who share your love for sustainable fashion and make lasting friendships.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-emerald-300 text-center group hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Exclusive Events
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get early access to swap events, workshops, styling sessions, and special community gatherings.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-emerald-300 text-center group hover:-translate-y-2">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg text-3xl">
                  💡
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Learn & Grow
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access exclusive tutorials, upcycling tips, and sustainable living inspiration from our community experts.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 sm:p-16 shadow-2xl relative overflow-hidden border border-gray-700">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Together, We Transform Fashion
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  Every person who joins our community is a step towards a more sustainable future. 
                  Your participation matters — let's make a difference, one swap at a time.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-emerald-600/20 border border-emerald-500/30 backdrop-blur-sm px-6 py-3 rounded-full text-emerald-300 font-semibold">
                    ♻️ Sustainable
                  </span>
                  <span className="bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm px-6 py-3 rounded-full text-blue-300 font-semibold">
                    🤝 Community-Driven
                  </span>
                  <span className="bg-teal-600/20 border border-teal-500/30 backdrop-blur-sm px-6 py-3 rounded-full text-teal-300 font-semibold">
                    💚 Eco-Friendly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;