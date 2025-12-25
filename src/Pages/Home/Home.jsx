import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-onyx font-sans text-alabaster selection:bg-gold selection:text-onyx">
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-10 py-8 border-b border-gold/20 sticky top-0 bg-onyx/90 backdrop-blur-sm z-50">
        <div className="text-3xl font-display font-light tracking-extra uppercase text-gold">Atelier No. 47</div>
        <div className="hidden md:flex space-x-12 text-[10px] font-semibold uppercase tracking-extra">
          <a href="#" className="hover:text-gold transition-colors">The Collection</a>
          <a href="#" className="hover:text-gold transition-colors">Artistry</a>
          <a href="#" className="hover:text-gold transition-colors">Philosophy</a>
        </div>
        <button className="border border-gold text-gold px-6 py-2 text-[10px] font-semibold uppercase tracking-widest hover:bg-gold hover:text-onyx transition-all duration-500">
          Shop Now
        </button>
      </nav>

      {/* Hero Section: Cinematic & Asymmetrical */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-0 items-center">
          <div className="md:col-span-8 relative z-10">
            <h1 className="text-6xl md:text-9xl font-display font-light leading-none mb-8 animate-fade-up">
              PAIN-FREE <br />
              <span className="italic text-gold ml-20 md:ml-40">Artistry</span>
            </h1>
            <div className="max-w-md ml-auto md:mr-20 border-l border-gold/30 pl-8 py-4">
              <p className="text-lg font-light leading-relaxed mb-8 text-alabaster/80">
                A gentle, safe, and effective waxing formula designed for women who want smooth, hair-free skin without pain — anytime, anywhere.
              </p>
              <button className="flex items-center gap-4 text-gold group uppercase tracking-extra text-xs font-bold">
                Explore the Collection <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Architectural Image Placement */}
          <div className="md:col-span-4 mt-12 md:mt-0 relative">
            <div className="aspect-[3/4] border border-gold/20 p-4">
              <div className="w-full h-full bg-plum relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop" 
                  alt="Luxury Texture" 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-gold/10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Product Split Section: Ivory Parchment Block */}
      <section className="py-32">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          <div className="md:w-3/5 bg-[url('https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125">
            <div className="w-full h-full bg-plum/40 backdrop-brightness-50"></div>
          </div>
          
          <div className="md:w-2/5 bg-ivory p-12 md:p-24 flex flex-col justify-center text-onyx">
            <h2 className="text-4xl font-display font-semibold mb-8 border-b border-onyx/10 pb-4">Featured Sizes</h2>
            <div className="space-y-8 mb-12">
              <div className="flex justify-between items-end border-b border-onyx/10 pb-2">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gold">Petite</p>
                  <p className="text-xl font-display uppercase">225g Signature</p>
                </div>
                <p className="text-xl font-light">PKR 1,350</p>
              </div>
              <div className="flex justify-between items-end border-b border-onyx/10 pb-2">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gold">Classic</p>
                  <p className="text-xl font-display uppercase">450g Signature</p>
                </div>
                <p className="text-xl font-light">PKR 2,450</p>
              </div>
              <div className="flex justify-between items-end border-b border-onyx/10 pb-2">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gold">Grand</p>
                  <p className="text-xl font-display uppercase">900g Signature</p>
                </div>
                <p className="text-xl font-light">PKR 4,499</p>
              </div>
            </div>
            <button className="bg-onyx text-gold py-5 uppercase tracking-extra text-[10px] font-bold hover:bg-plum transition-colors duration-500">
              View Full Details
            </button>
          </div>
        </div>
      </section>

      {/* Why Atelier No. 47: Geometric & Architectural */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-5xl font-display text-center mb-24 uppercase tracking-widest">The Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
          {[
            { title: "Pain-Free", desc: "Designed for sensitive skin with bespoke precision." },
            { title: "Instant", desc: "Results that endure for up to 4 weeks of elegance." },
            { title: "At-Home", desc: "Professional salon results in your private sanctuary." },
            { title: "Organic", desc: "Dermatologically friendly, earth-conscious ingredients." },
            { title: "Finish", desc: "A smooth and soft texture that mimics polished silk." },
            { title: "Certified", desc: "Halal, GMP, and ISO 9001 certified excellence." },
          ].map((item, idx) => (
            <div key={idx} className="bg-onyx p-12 hover:bg-plum/20 transition-colors group">
              <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4">No. 0{idx + 1}</p>
              <h3 className="text-2xl font-display mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-sm font-light text-alabaster/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications: Minimalist Thin Lines */}
      <section className="py-20 border-y border-gold/20">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-50">
          {['Halal Certified', 'Certified Organic', 'GMP Manufacturing', 'ISO 9001 Quality'].map((text) => (
            <div key={text} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-semibold">
              <div className="w-8 h-px bg-gold"></div>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Review Section: Pull Quote Style */}
      <section className="py-32 bg-ivory text-onyx">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-display italic mb-12">"Smooth, hair-free skin without discomfort, trusted by thousands."</h2>
          <button className="border-b-2 border-gold pb-2 text-xs font-bold uppercase tracking-extra hover:text-gold transition-all">
            Read Customer Reviews
          </button>
        </div>
      </section>

      {/* Footer: Simple & Regal */}
      <footer className="bg-plum py-24 text-alabaster">
        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <h2 className="text-4xl font-display uppercase tracking-extra text-gold mb-8">Atelier No. 47</h2>
            <p className="max-w-xs text-sm font-light opacity-60 leading-loose">
              An expression of modern luxury. We craft experiences that transform your routine into a ritual of beauty and confidence.
            </p>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-extra font-bold text-gold mb-6">Inquiries</h4>
            <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Contact Us</p>
            <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Shipping & Returns</p>
            <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Privacy Policy</p>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-extra font-bold text-gold mb-6">Social</h4>
            <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Instagram</p>
            <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Facebook</p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-10 border-t border-white/5 text-[9px] uppercase tracking-[0.5em] opacity-40 text-center">
          © {new Date().getFullYear()} Atelier No. 47. Crafted for Excellence.
        </div>
      </footer>
    </div>
  );
};

export default Home;