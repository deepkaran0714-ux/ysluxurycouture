function LuxuryGraphic({variant="suit"}){
  return (
    <svg viewBox="0 0 200 260" className="w-28 h-36">
      <defs>
        <linearGradient id="gold" x1="0" x2="1">
          <stop offset="0%" stopColor="#d4af37"/>
          <stop offset="100%" stopColor="#f5e6a3"/>
        </linearGradient>
      </defs>
      {variant === "suit" && (
        <g stroke="url(#gold)" strokeWidth="2" fill="none">
          <path d="M40 40 L100 20 L160 40 L140 200 L60 200 Z" />
          <path d="M100 20 L100 200" />
          <path d="M60 120 L140 120" />
        </g>
      )}
      {variant === "pattern" && (
        <g>
          {[...Array(6)].map((_,i)=> (
            <circle key={i} cx={30+i*25} cy={130} r={6} fill="url(#gold)" opacity="0.6">
              <animate attributeName="cy" values="120;140;120" dur="2s" repeatCount="indefinite" begin={`${i*0.2}s`} />
            </circle>
          ))}
        </g>
      )}
    </svg>
  )
}

export default function YSLuxuryCoutureHomePage() {
  const collections = [
    {
      title: 'Bespoke Wedding Suits',
      text: 'Tailored masterpieces for grooms who want timeless elegance on their most important day.'
    },
    {
      title: 'Executive Power Suits',
      text: 'Sharp, commanding silhouettes designed for CEOs, founders, and business leaders.'
    },
    {
      title: 'Red Carpet Couture',
      text: 'Luxury statement suits handcrafted for exclusive occasions.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Luxury Clients' },
    { number: '100%', label: 'Custom Tailored' },
    { number: '24hr', label: 'VIP Response' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-serif">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_35%)] pointer-events-none" />

      <nav className="relative z-20 flex justify-between items-center px-8 lg:px-20 py-6 border-b border-white/10 backdrop-blur-md">
        <h1 className="text-2xl tracking-[0.3em] text-yellow-300">YS LUXURY COUTURE</h1>
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-gray-300">
          <a href="#">Home</a>
          <a href="#">Collections</a>
          <a href="#">Craftsmanship</a>
          <a href="#">VIP Booking</a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-4">Luxury Tailoring Redefined</p>
            <h1 className="text-6xl lg:text-8xl leading-tight font-light mb-8">
              Crafted for
              <span className="block italic text-yellow-300">Elite Gentlemen</span>
            </h1>
            <p className="text-lg text-gray-300 leading-8 max-w-xl mb-10">
              Bespoke suits handcrafted for high-net-worth clients who value exclusivity, precision, and prestige.
            </p>
            <div className="flex gap-5 mb-12">
              <button className="px-8 py-4 rounded-2xl bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform shadow-2xl">
                Book VIP Consultation
              </button>
              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                View Collection
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 max-w-xl">
              {stats.map((stat, index) => (
                <div key={index} className="border border-white/10 rounded-2xl p-4 bg-white/5 text-center">
                  <p className="text-2xl text-yellow-300">{stat.number}</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center items-center h-[650px]">
            <div className="absolute w-[28rem] h-[28rem] rounded-full bg-yellow-300/20 blur-3xl" />
            <div className="relative w-80 h-[520px] rounded-[2rem] bg-gradient-to-br from-zinc-900 to-zinc-700 border border-yellow-300/30 shadow-[0_40px_100px_rgba(0,0,0,0.7)] transform rotate-3 hover:rotate-0 hover:scale-105 transition duration-700">
              <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center">
                <LuxuryGraphic variant="suit" />
                <p className="text-3xl text-yellow-300">Royal Signature</p>
                <p className="text-sm text-gray-400 mt-2">Luxury 3D couture visual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl text-center mb-16">Featured Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((item, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-2 transition shadow-xl">
                <h3 className="text-2xl text-yellow-300 mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl text-center mb-16">Luxury Gallery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative h-96 rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_45%)]" />
                <div className="absolute inset-6 rounded-[1.5rem] border border-yellow-300/20 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition duration-500">
                  <div className="text-center">
                    <LuxuryGraphic variant="pattern" />
                    <p className="text-2xl text-yellow-300">Signature Look {item}</p>
                    <p className="text-sm text-gray-400 mt-2">Bespoke couture craftsmanship</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center mb-16">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'An unmatched experience — the suit elevated my presence instantly.',
              'Pure luxury from consultation to final fitting. Exceptional craftsmanship.',
              'The perfect blend of prestige, elegance, and confidence.'
            ].map((quote, index) => (
              <div
                key={index}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-xl backdrop-blur-md"
              >
                <p className="text-lg leading-8 text-gray-300 italic">“{quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.3em] text-yellow-300">Elite Client</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-yellow-300/20 bg-white/5 backdrop-blur-md shadow-2xl p-10 lg:p-14">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-3">Private Consultation</p>
            <h2 className="text-5xl mb-4">Book Your VIP Fitting</h2>
            <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
              Reserve a private styling consultation for a fully bespoke luxury suit experience tailored to your lifestyle and presence.
            </p>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-300 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-300 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-300 outline-none"
            />
            <input
              type="text"
              placeholder="Preferred Appointment Date"
              className="px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-300 outline-none"
            />
            <textarea
              placeholder="Tell us about your suit requirements and occasion"
              rows={5}
              className="md:col-span-2 px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-300 outline-none resize-none"
            />
            <div className="md:col-span-2 text-center pt-4">
              <button
                type="submit"
                className="px-10 py-4 rounded-2xl bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform shadow-2xl"
              >
                Schedule VIP Consultation
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Luxury Brand Story / Motion Showcase */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-black shadow-2xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 lg:p-16">
              <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-4">The Experience</p>
              <h2 className="text-5xl mb-6">A Suit That Moves With Power</h2>
              <p className="text-gray-300 text-lg leading-8 mb-8">
                Every silhouette is sculpted to command attention — from boardrooms to red carpets. Experience couture that reflects prestige, status, and timeless confidence.
              </p>
              <button className="px-8 py-4 rounded-2xl bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform">
                Explore Signature Motion
              </button>
            </div>
            <div className="relative h-[420px] lg:h-[520px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2),transparent_50%)] animate-pulse" />
              <div className="relative w-72 h-[420px] rounded-[2rem] border border-yellow-300/20 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transform hover:scale-105 transition duration-700">
                <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-black/30 backdrop-blur-xl flex flex-col items-center justify-center">
                  <div className="w-28 h-36 border-2 border-yellow-300 rounded-t-full rounded-b-xl mb-6 animate-bounce" />
                  <p className="text-2xl text-yellow-300">Luxury Motion Showcase</p>
                  <p className="text-sm text-gray-400 mt-2">Premium animated hero display</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-3">Signature Packages</p>
            <h2 className="text-5xl">Luxury Suit Tiers</h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
              Designed for discerning gentlemen, each package delivers an elevated bespoke experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Classic Elite', price: '$899', detail: 'Perfect for weddings and formal occasions' },
              { name: 'Executive Prestige', price: '$1499', detail: 'Luxury business and power dressing experience' },
              { name: 'Royal Couture', price: '$2499', detail: 'Ultra-premium fully bespoke VIP package' }
            ].map((plan, index) => (
              <div key={index} className="rounded-[2rem] border border-yellow-300/20 bg-white/5 backdrop-blur-md p-8 shadow-2xl hover:-translate-y-2 transition duration-500">
                <h3 className="text-2xl text-yellow-300 mb-4">{plan.name}</h3>
                <p className="text-5xl mb-4">{plan.price}</p>
                <p className="text-gray-400 leading-7 mb-8">{plan.detail}</p>
                <button className="w-full px-6 py-4 rounded-2xl bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform">
                  Enquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-3">Exclusive Styles</p>
            <h2 className="text-5xl">Signature Suit Collections</h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
              Explore statement pieces designed for weddings, business leadership, and elite evening events.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              'Wedding Couture',
              'Business Elite',
              'Black Tie Tuxedo',
              'Celebrity Red Carpet'
            ].map((style, index) => (
              <div key={index} className="group rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl hover:-translate-y-2 transition duration-500">
                <div className="h-72 flex items-center justify-center border-b border-white/10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_50%)]">
                  <LuxuryGraphic variant="pattern" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-yellow-300 mb-2">{style}</h3>
                  <p className="text-gray-400 text-sm leading-7">Premium handcrafted tailoring for distinguished gentlemen.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 to-zinc-900 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="p-10 lg:p-16">
              <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-4">Our Heritage</p>
              <h2 className="text-5xl mb-6">Craftsmanship & Brand Story</h2>
              <p className="text-gray-300 text-lg leading-8 mb-6">
                At YS Luxury Couture, every suit is a statement of power, prestige, and timeless elegance. Each piece is handcrafted with precision using the world’s finest fabrics and bespoke tailoring techniques.
              </p>
              <p className="text-gray-400 leading-8 mb-8">
                From private consultations to final fittings, our process is designed for elite gentlemen who demand exclusivity and perfection.
              </p>
              <button className="px-8 py-4 rounded-2xl bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform">
                Discover Our Craft
              </button>
            </div>
            <div className="relative h-[420px] lg:h-[520px] flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_50%)]">
              <div className="w-72 h-[420px] rounded-[2rem] border border-yellow-300/20 bg-black/30 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center">
                <LuxuryGraphic variant="suit" />
                <p className="text-2xl text-yellow-300">Handcrafted Excellence</p>
                <p className="text-sm text-gray-400 mt-2">Luxury tailoring legacy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Press & Celebrity Endorsements */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {['Featured in Vogue Style','Trusted by CEOs','Celebrity Event Styling'].map((item, i) => (
            <div key={i} className="p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
              <p className="text-yellow-300 text-xl mb-3">{item}</p>
              <p className="text-gray-400">Elite social proof designed to build prestige.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Concierge Service */}
      <section className="px-8 lg:px-20 py-24 text-center">
        <h2 className="text-5xl mb-6">Private Concierge</h2>
        <p className="text-gray-400 max-w-3xl mx-auto leading-8">Dedicated one-on-one styling support from first consultation to final delivery.</p>
      </section>

      {/* Fabric Library */}
      <section className="px-8 lg:px-20 py-24">
        <div className="grid md:grid-cols-4 gap-6">
          {['Italian Wool','Cashmere Blend','Velvet Luxe','British Tweed'].map((fabric, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
              <p className="text-yellow-300">{fabric}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="px-8 lg:px-20 py-24">
        <h2 className="text-5xl text-center mb-12">Our Bespoke Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {['Consultation','Measurements','Tailoring','Final Fitting'].map((step, i) => (
            <div key={i} className="p-6 rounded-3xl border border-yellow-300/20 bg-white/5 text-center">
              <p className="text-yellow-300 text-xl">0{i+1}</p>
              <p className="mt-2">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 lg:px-20 py-24">
        <h2 className="text-5xl text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {['How long does tailoring take?','Do you offer home visits?','Can I customize fabrics?'].map((q,i)=>(
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">{q}</div>
          ))}
        </div>
      </section>

      {/* Global Shipping */}
      <section className="px-8 lg:px-20 py-24 text-center">
        <h2 className="text-5xl mb-6">Worldwide Luxury Delivery</h2>
        <p className="text-gray-400">Serving clients across Australia, Dubai, London, and New York.</p>
      </section>

      {/* VIP Membership */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-5xl mx-auto rounded-[2rem] p-12 bg-gradient-to-r from-white/5 to-yellow-300/10 border border-yellow-300/20 text-center">
          <h2 className="text-5xl mb-4">YS Black Card Membership</h2>
          <p className="text-gray-300">Priority fittings, private previews, and exclusive fabric access.</p>
        </div>
      </section>

      {/* Awards */}
      <section className="px-8 lg:px-20 py-24">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {['Best Luxury Tailor 2026','Premium Craft Award','Elite Service Excellence'].map((award,i)=>(
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">{award}</div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 lg:px-20 py-24 text-center">
        <h2 className="text-6xl mb-6">Ready to Own the Room?</h2>
        <button className="px-10 py-4 rounded-2xl bg-yellow-300 text-black font-semibold">Begin Your Couture Journey</button>
      </section>
      {/* VIP Newsletter & Private Invite */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto rounded-[2rem] border border-yellow-300/20 bg-gradient-to-r from-zinc-900 to-black shadow-2xl p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-3">Private Access</p>
              <h2 className="text-5xl mb-4">Join the VIP Inner Circle</h2>
              <p className="text-gray-300 leading-8">
                Receive exclusive invitations to new collections, premium fabric drops, and private fitting events curated for distinguished clients.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-yellow-300"
              />
              <button className="px-8 py-4 rounded-2xl bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform">
                Request Invite
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* VIP Appointment Calendar & Deposit */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto rounded-[2rem] border border-yellow-300/20 bg-gradient-to-br from-zinc-900 to-black shadow-2xl p-10 lg:p-14">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-3">Secure Your Slot</p>
            <h2 className="text-5xl mb-4">Reserve Your Appointment</h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-8">
              Select your preferred consultation time and confirm with a premium booking deposit to reserve an exclusive fitting session.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl text-yellow-300 mb-6">Available Time Slots</h3>
              <div className="grid grid-cols-2 gap-4">
                {['10:00 AM','12:00 PM','2:00 PM','4:00 PM'].map((slot, i) => (
                  <button key={i} className="px-4 py-4 rounded-2xl border border-white/10 hover:border-yellow-300 hover:bg-white/5 transition">
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-300/20 bg-white/5 p-8 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">Booking Deposit</p>
              <p className="text-6xl text-yellow-300 mb-4">$150</p>
              <p className="text-gray-300 leading-8 mb-8">
                Fully redeemable against your final bespoke order.
              </p>
              <button className="w-full px-8 py-4 rounded-2xl bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform">
                Proceed to Secure Booking
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Personal Stylist Live Chat */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-3">Instant Assistance</p>
              <h2 className="text-5xl mb-4">Talk to Your Personal Stylist</h2>
              <p className="text-gray-300 leading-8">
                Connect instantly with our luxury style concierge for fabric guidance, occasion styling, measurements, and VIP appointment assistance.
              </p>
            </div>
            <div className="rounded-[2rem] border border-yellow-300/20 bg-black/30 p-6">
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 text-gray-300">Hello sir, how may we craft your perfect look today?</div>
                <div className="p-4 rounded-2xl bg-yellow-300 text-black ml-8">I need a bespoke wedding tuxedo consultation.</div>
              </div>
              <div className="flex gap-3">
                <input className="flex-1 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-yellow-300" placeholder="Message your stylist..." />
                <button className="px-6 py-4 rounded-2xl bg-yellow-300 text-black font-semibold">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cinematic Lookbook Experience */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-950 to-black shadow-2xl">
          <div className="grid lg:grid-cols-3 gap-0">
            {["Midnight Tuxedo","Royal Wedding","Executive Noir"].map((look, i) => (
              <div key={i} className="relative h-[520px] border-r border-white/10 last:border-r-0 group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_55%)] group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-8 rounded-[1.5rem] border border-yellow-300/20 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center">
                  <div className="w-24 h-32 border-2 border-yellow-300 rounded-t-full rounded-b-xl mb-6 group-hover:scale-110 transition duration-500" />
                  <p className="text-2xl text-yellow-300">{look}</p>
                  <p className="text-sm text-gray-400 mt-2">Runway-inspired signature styling</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Founder’s Signature Note */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto rounded-[2rem] border border-yellow-300/20 bg-gradient-to-br from-zinc-950 to-black shadow-2xl p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-3">From The Founder</p>
              <h2 className="text-5xl mb-6">A Personal Note on Excellence</h2>
              <p className="text-gray-300 text-lg leading-8 mb-6">
                Every suit we create is more than tailoring — it is an expression of ambition, identity, and timeless confidence.
              </p>
              <p className="text-gray-400 leading-8">
                YS Luxury Couture was built for gentlemen who expect nothing less than perfection. Our mission is to craft presence, prestige, and unforgettable first impressions.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">
              <p className="text-3xl italic text-yellow-300 mb-4">YS</p>
              <p className="text-gray-400 uppercase tracking-[0.3em] text-sm">Founder Signature</p>
            </div>
          </div>
        </div>
      </section>
      {/* Client Transformation Showcase */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-3">Transformation</p>
            <h2 className="text-5xl">Before & After Styling</h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
              See how bespoke couture transforms confidence, presence, and personal brand.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {['Before Styling','After YS Couture'].map((label, i) => (
              <div key={i} className="rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl">
                <div className="h-[420px] flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_50%)]">
                  <div className="w-28 h-36 border-2 border-yellow-300 rounded-t-full rounded-b-xl" />
                </div>
                <div className="p-6 text-center">
                  <p className="text-2xl text-yellow-300">{label}</p>
                  <p className="text-sm text-gray-400 mt-2">Luxury visual transformation showcase</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Luxury Wedding & Event Packages */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-3">Special Occasions</p>
            <h2 className="text-5xl">Wedding & Event Packages</h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
              Bespoke styling experiences crafted for weddings, galas, business summits, and red carpet moments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Groom Royale', price: '$1299', text: 'Luxury wedding suit with private fittings and styling consultation.' },
              { title: 'Black Tie Gala', price: '$1799', text: 'Premium tuxedo experience for formal events and exclusive evenings.' },
              { title: 'VIP Group Styling', price: '$2999', text: 'Custom styling for groom parties, executives, and special groups.' }
            ].map((pkg, i) => (
              <div key={i} className="rounded-[2rem] border border-yellow-300/20 bg-white/5 backdrop-blur-md p-8 shadow-2xl hover:-translate-y-2 transition duration-500">
                <h3 className="text-2xl text-yellow-300 mb-4">{pkg.title}</h3>
                <p className="text-5xl mb-4">{pkg.price}</p>
                <p className="text-gray-400 leading-7 mb-8">{pkg.text}</p>
                <button className="w-full px-6 py-4 rounded-2xl bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform">
                  Reserve Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Private Showroom Location */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 to-black shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="p-10 lg:p-16">
              <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-4">Visit Us</p>
              <h2 className="text-5xl mb-6">Private Luxury Showroom</h2>
              <p className="text-gray-300 text-lg leading-8 mb-6">
                Experience YS Luxury Couture in person at our exclusive private showroom. Designed for VIP clients seeking a discreet and premium tailoring experience.
              </p>
              <p className="text-gray-400 mb-8">
                Melbourne • By Appointment Only
              </p>
              <button className="px-8 py-4 rounded-2xl bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform">
                Get Directions
              </button>
            </div>

            <div className="relative h-[420px] lg:h-[520px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_50%)] flex items-center justify-center">
              <div className="w-72 h-[360px] rounded-[2rem] border border-yellow-300/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-gray-400">
                Map Preview
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Editorial Journal */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-yellow-300 mb-3">Editorial</p>
            <h2 className="text-5xl">The YS Luxury Journal</h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-8">
              Insights on tailoring, occasion styling, luxury fabrics, and the art of dressing with distinction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'How to Choose the Perfect Wedding Suit',
                category: 'Style Guide',
                excerpt: 'A refined guide for grooms seeking timeless elegance and unforgettable presence.'
              },
              {
                title: 'The Fabrics Preferred by Modern Gentlemen',
                category: 'Fabric Insight',
                excerpt: 'Discover premium cloth selections designed for comfort, luxury, and sharp structure.'
              },
              {
                title: 'Power Dressing for Executives',
                category: 'Luxury Living',
                excerpt: 'Learn how bespoke tailoring elevates authority, confidence, and first impressions.'
              }
            ].map((article, index) => (
              <article
                key={index}
                className="group rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl hover:-translate-y-2 transition duration-500"
              >
                <div className="h-56 border-b border-white/10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.16),transparent_50%)] flex items-center justify-center">
                  <LuxuryGraphic variant="pattern" />
                </div>
                <div className="p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-4">{article.category}</p>
                  <h3 className="text-2xl text-white mb-4 leading-snug">{article.title}</h3>
                  <p className="text-gray-400 leading-7 mb-6">{article.excerpt}</p>
                  <button className="text-yellow-300 uppercase tracking-[0.25em] text-sm">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-8 lg:px-20 py-20 border-t border-white/10 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="text-2xl tracking-[0.3em] text-yellow-300 mb-4">YS LUXURY COUTURE</h3>
            <p className="text-gray-400 leading-7">
              Bespoke luxury suits crafted for gentlemen who value prestige, exclusivity, and timeless elegance.
            </p>
          </div>

          <div>
            <h4 className="text-lg text-yellow-300 mb-4">Quick Links</h4>
            <div className="space-y-3 text-gray-400">
              <p>Home</p>
              <p>Collections</p>
              <p>VIP Booking</p>
              <p>Testimonials</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg text-yellow-300 mb-4">Follow the Brand</h4>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[1,2,3].map((i) => (
                <div key={i} className="h-20 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-xs text-gray-400">
                  Insta {i}
                </div>
              ))}
            </div>
            <p className="text-gray-400">Instagram • WhatsApp • Email</p>
          </div>
        </div>
      </footer>

      {/* Floating VIP Contact Button */}
      <a
        href="#"
        className="fixed bottom-8 right-8 z-50 px-6 py-4 rounded-full bg-yellow-300 text-black font-semibold shadow-[0_20px_50px_rgba(212,175,55,0.35)] hover:scale-105 transition-transform"
      >
        Book Now
      </a>
    </div>
  );
}
