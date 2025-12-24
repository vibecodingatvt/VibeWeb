import DiskImage from '../assets/Disk.png';

const About = () => {
  return (
    <div className="mx-4 mt-4 mb-48">
        <div className="relative min-h-[calc(100vh-20px)] overflow-x-hidden">
        {/* Disk Image */}
        <div className="absolute inset-0 overflow-visible pointer-events-none z-0">
          <img 
            src={DiskImage} 
            alt="Vinyl Record" 
            className="absolute left-[-15%] sm:left-[-10%] top-1/2 transform -translate-y-1/2 w-[70%] sm:w-[60%] max-w-[900px] opacity-40"
          />
        </div>
        
        {/* Left Section - Top Left Corner */}
        <div className="relative z-10 text-white p-4 transform translate-x-48 translate-y-48">
          <h1 className="text-[60px] sm:text-5xl lg:text-6xl font-bold mb-2 text-white font-['Coolvetica']">
            Welcome to VibeCoders @ VT.
          </h1>
          <p className="text-[40px] mb-2 text-[#CECECE] font-['Coolvetica']">
            Promote smart use of AI to "vibe-code" ideas and ship quickly.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <span className="text-[#CECECE] text-sm font-bold">►</span>
              <span className="text-[30px] text-[#CECECE] font-['Coolvetica']">Ideate.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#CECECE] text-sm font-bold">►</span>
              <span className="text-[30px] text-[#CECECE] font-['Coolvetica']">Build.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#CECECE] text-sm font-bold">►</span>
              <span className="text-[30px] text-[#CECECE] font-['Coolvetica']">Ship.</span>
            </li>
          </ul>
        </div>

        {/* Right Section - Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 z-10 text-white text-right p-4 transform -translate-x-48 -translate-y-48">
          <h2 className="text-[60px] sm:text-4xl lg:text-5xl font-bold mb-2 text-white font-['Coolvetica']">
            What do we do?
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-end gap-3">
              <span className="text-[30px] text-[#CECECE] font-['Coolvetica']">ACTUALLY insightful workshops.</span>
              <span className="text-[#CECECE] text-sm font-bold rotate-180 inline-block">►</span>
            </li>
            <li className="flex items-center justify-end gap-3">
              <span className="text-[30px] text-[#CECECE] font-['Coolvetica']">
                Learn to become cracked at <span className="underline">The Mentorship Program</span>
              </span>
              <span className="text-[#CECECE] text-sm font-bold rotate-180 inline-block">►</span>
            </li>
            <li className="flex items-center justify-end gap-3">
              <span className="text-[30px] text-[#CECECE] font-['Coolvetica']">
                Provide a space for like-minded programmers to connect.
              </span>
              <span className="text-[#CECECE] text-sm font-bold rotate-180 inline-block">►</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

