// src/components/home/HeroSection.jsx
import { Play, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen md:min-h-[85vh] flex items-center">

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-green-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-12 w-32 h-32 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-8 w-24 h-24 bg-gradient-to-r from-cyan-200/30 to-green-200/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-1/4 left-16 w-20 h-20 bg-gradient-to-r from-indigo-200/25 to-green-200/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-300/15 to-purple-300/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />

      {/* MOBILE VERSION */}
      <div className="md:hidden relative z-10 w-full px-4 py-8 text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-medium text-slate-800 mb-2">Welcome to</h2>

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-300 to-green-200 transform -skew-y-1 rounded-lg opacity-80"></div>
            <h1 className="relative text-2xl font-bold text-slate-800 px-4 py-2">
              Schrodinger's buildings!
            </h1>
          </div>

          <p className="text-slate-600 text-base mb-4 mt-4">For your own world</p>
          <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
            Find modern or traditional buildings for your needs - A house? A tower? A mob farm? We have it just for you to share and have!
          </p>
        </div>

        {/* Mobile Images */}
        <div className="mb-8 max-w-xs mx-auto">
          <div className="space-y-3">
            <div className="relative group">
              <div className="bg-white/15 backdrop-blur-2xl border border-white/25 rounded-2xl overflow-hidden shadow-xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105">
                <div className="w-full h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=687&auto=format&fit=crop"
                    alt="Featured"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative group">
                <div className="bg-white/15 backdrop-blur-2xl border border-white/25 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-500">
                  <div className="w-full h-20 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=150&fit=crop"
                      alt="Featured 2"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-white/15 backdrop-blur-2xl border border-white/25 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-500">
                  <div className="w-full h-20 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=150&fit=crop"
                      alt="Featured 3"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-3 max-w-xs mx-auto">
          <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-sm">
            <span>Explore Buildings</span>
          </button>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-start max-w-3xl">

          <h2 className="text-6xl font-medium text-slate-800 mb-4">Welcome to</h2>

          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-300 to-green-200 transform -skew-y-1 rounded-xl opacity-80"></div>
            <h1 className="relative text-6xl font-semibold text-slate-800 px-6 py-3 whitespace-nowrap">
              Schrodinger's Buildings!
            </h1>
          </div>

          <p className="text-2xl text-slate-600 mb-6">For your own world</p>

          <p className="text-lg text-slate-500 max-w-xl leading-relaxed mb-10">
            Find modern or traditional buildings for your needs - A house? A tower? A mob farm? We have it just for you to share and have!
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-6">
            <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-10 py-5 rounded-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 text-lg">
                <span>Explore Buildings</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
