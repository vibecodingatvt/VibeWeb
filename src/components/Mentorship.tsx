import VTImage from '../assets/VTImage.png';

const Mentorship = () => {
  return (
    <div className="flex flex-col font-['Coolvetica'] mx-4 mt-4 mb-48">
      <h1 className="text-white text-[40px] leading-tight px-4 pb-4 ml-10">
        Pair up with a mentor for career guidance,<br />socialize, and academic insights.
      </h1>
      <div className="relative mx-auto px-4 inline-block">
        <img src={VTImage} alt="VT Image" className="block" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#252525] rounded-xl w-[60%] h-[50%] flex">
            
            {/* Left Column - Mentor */}
            <div className="flex-1 flex flex-col justify-between p-8">
              <h2 className="text-white text-[40px] font-bold font-['Coolvetica']">Mentor</h2>
              <div className="flex-1 flex items-center">
                <p className="text-white text-[30px] font-['Coolvetica'] transform -translate-y-5">
                  Share your insights, gain leadership experiences, reinforce your expertise.
                </p>
              </div>
              <button className="bg-white text-black rounded-xl px-4 py-2 flex items-center gap-2 self-start font-Roboto">
                Mentor Registration
                <span className="text-black">►</span>
              </button>
            </div>

            {/* Divider */}
            <div className="w-[0.5px] bg-[#CECECE] my-7"></div>

            {/* Right Column - Mentee */}
            <div className="flex-1 flex flex-col justify-between p-8">
              <h2 className="text-white text-[40px] font-bold font-['Coolvetica']">Mentee</h2>
              <div className="flex-1 flex items-center">
                <p className="text-white text-[30px] font-['Coolvetica'] transform -translate-y-5">
                  Accelerate your growth, gain fresh perspectives, unlock your potential.
                </p>
              </div>
              <button className="bg-white text-black rounded-xl px-4 py-2 flex items-center gap-2 self-start font-Roboto">
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