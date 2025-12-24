const About = () => {
  return (
    <div className="relative min-h-screen px-4 py-12 md:py-24 pb-32 md:pb-24 mt-10">
      {/* Left Section - Welcome */}
      <div className="relative z-10 mb-16 md:mb-0 md:absolute md:top-12 md:left-8 lg:left-16">
        <h1 className="text-white text-[32px] md:text-[48px] lg:text-[56px] font-bold font-['Coolvetica'] leading-tight mb-2">
          Welcome to VibeCoders @ VT.
        </h1>
        <p className="text-[#CECECE] text-[24px] md:text-[22px] lg:text-[32px] font-['Coolvetica'] mb-2">
          Promote the smart use of AI to "vibe-code" ideas and ship quickly.
        </p>
        <ul className="text-[#CECECE] text-[20px] md:text-[20px] lg:text-[24px] font-['Coolvetica'] space-y-3">
          <li className="flex items-center">
            <span className="mr-2">►</span>
            <span>Ideate.</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2">►</span>
            <span>Build.</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2">►</span>
            <span>Ship.</span>
          </li>
        </ul>
      </div>

      {/* Right Section - What do we do? */}
      <div className="relative z-10 md:absolute md:bottom-16 md:right-8 lg:right-16 text-right max-w-[500px] md:max-w-none mb-36">
        <h1 className="text-white text-[32px] md:text-[48px] lg:text-[56px] font-bold font-['Coolvetica'] leading-tight mb-2">
          What do we do?
        </h1>
        <ul className="text-[#CECECE] text-[20px] md:text-[20px] lg:text-[24px] font-['Coolvetica'] space-y-3">
          <li className="flex items-center justify-end">
            <span>ACTUALLY insightful workshops.</span>
            <span className="ml-2">◀</span>
          </li>
          <li className="flex items-center justify-end">
            <span>
              Learn to become cracked at{' '}
              <span className="underline">The Mentorship Program</span>
            </span>
            <span className="ml-2">◀</span>
          </li>
          <li className="flex items-center justify-end">
            <span>Provide a space for like-minded programmers to connect.</span>
            <span className="ml-2">◀</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

