import React from "react";
import HeroImage from "../../assets/Container.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#0f0f0f] px-6 lg:px-12">
      <div className="max-w-360 mx-auto py-16"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="left space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Discover Your Dream <br />
                Property with <span className="text-white">Estatein</span>
              </h1>

              <p className="mt-6 text-[#b3b3b3] text-base md:text-lg max-w-xl">
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
            </div>

            <div className="btn flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-xl border border-[#2a2a2a] text-white bg-[#141414] hover:bg-[#1c1c1c] transition">
                Learn More
              </button>

              <button className="px-6 py-3 rounded-xl bg-[#6c4cff] text-white font-semibold hover:bg-[#5a3fe0] transition">
                Browse Properties
              </button>
            </div>

            <div className="hero-card grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="card-1 bg-[#141414] border border-[#262626] rounded-2xl px-6 py-5">
                <h3 className="text-3xl font-bold text-white">200+</h3>
                <p className="text-[#999999] text-sm mt-1">Happy Customers</p>
              </div>

              <div className="card-2 bg-[#141414] border border-[#262626] rounded-2xl px-6 py-5">
                <h3 className="text-3xl font-bold text-white">10k+</h3>
                <p className="text-[#999999] text-sm mt-1">Properties For Clients</p>
              </div>

              <div className="card-3 bg-[#141414] border border-[#262626] rounded-2xl px-6 py-5">
                <h3 className="text-3xl font-bold text-white">16+</h3>
                <p className="text-[#999999] text-sm mt-1">Years of Experience</p>
              </div>
            </div>
          </div>

          <div className="right relative w-full h-full min-h-100 lg:min-h-150 overflow-hidden">
            <img
              src={HeroImage}
              alt="Hero Building"
              className="w-full h-full object-cover rounded-2xl" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;