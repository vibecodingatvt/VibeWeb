const HackAVibe = () => {
  return (
    <div className="relative z-10 text-left py-12 px-12 mb-48">
      {/* Main Title */}
      <h1 className="text-5xl sm:text-6xl lg:text-[250px] font-bold text-[#CECECE] mb-2 font-['Coolvetica']">
        HACKaVIBE
      </h1>

      {/* Explanatory Text */}
      <div className="text-[#CECECE] mb-8 font-['Coolvetica']">
        <p className="text-[40px]">
          A vibe-athon (hackathon).
        </p>
        <p className="text-[40px]">
          Code the feeling, build with intuition, turn your vibes into reality.
        </p>
      </div>

      {/* Coming Soon Text */}
      <p className="text-[90px] font-bold text-white font-['Coolvetica'] italic transform -translate-y-10">
        More information coming soon...
      </p>
    </div>
  );
};

export default HackAVibe;