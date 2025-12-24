import VTImage from '../assets/VTImage.png';

const Mentorship = () => {
  return (
    <div className="relative z-10 flex flex-col font-['Coolvetica'] mt-4 mb-12 sm:mb-24 md:mb-48">
      <h1 className="text-white text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight px-2 sm:px-4 md:px-6 lg:px-8 pb-4">
        Pair up with a mentor for career guidance,<br />socialize, and academic insights.
      </h1>
      <div className="relative mx-auto px-2 sm:px-4 md:px-6 lg:px-8 inline-block w-full max-w-full">
        <img 
          src={VTImage} 
          alt="VT Image" 
          className="block w-full h-auto max-w-full" 
        />
        <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-[#252525] rounded-xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-[45%] sm:h-[48%] md:h-[50%] flex flex-col md:flex-row overflow-hidden">
            
            {/* Left Column - Mentor */}
            <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 md:p-6 lg:p-8 min-h-0">
              <h2 className="text-white text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold font-['Coolvetica'] mb-3 sm:mb-4 md:mb-6">
                Mentor
              </h2>
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6 shrink-0">
                <p className="text-white text-[12px] sm:text-[16px] md:text-[20px] lg:text-[30px] font-['Coolvetica'] leading-tight">
                  Share your insights, gain leadership experiences, reinforce your expertise.
                </p>
              </div>
              <button className="bg-white text-black rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 self-start font-Roboto text-[11px] sm:text-[13px] md:text-[14px] lg:text-base shrink-0">
                Mentor Registration
                <span className="text-black">►</span>
              </button>
            </div>

            {/* Divider */}
            <div className="w-full md:w-[0.5px] h-[0.5px] md:h-auto bg-[#CECECE] my-2 md:my-4 shrink-0"></div>

            {/* Right Column - Mentee */}
            <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 md:p-6 lg:p-8 min-h-0">
              <h2 className="text-white text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold font-['Coolvetica'] mb-3 sm:mb-4 md:mb-6">
                Mentee
              </h2>
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6 shrink-0">
                <p className="text-white text-[12px] sm:text-[16px] md:text-[20px] lg:text-[30px] font-['Coolvetica'] leading-tight">
                  Accelerate your growth, gain fresh perspectives, unlock your potential.
                </p>
              </div>
              <button className="bg-white text-black rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 self-start font-Roboto text-[11px] sm:text-[13px] md:text-[14px] lg:text-base shrink-0">
                Mentee Registration
                <span className="text-black">►</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;