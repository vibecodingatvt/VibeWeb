import CopilotImage from '../assets/copilot.png';
import CursorImage from '../assets/cursor.png';
import WindsurfImage from '../assets/windsurf.png';

const Tech = () => {
  return (
    <div className="flex flex-col items-center text-white py-12 mb-48">
      {/* Top Text */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center font-['Coolvetica']">
        Learn to use vibe coding technologies.
      </h1>

      {/* Logo Boxes */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {/* Cursor Logo */}
        <div className="bg-[#252525] rounded-xl p-6 flex items-center justify-center">
          <img src={CursorImage} alt="Cursor" className="w-60 h-24 object-contain" />
        </div>

        <div className="bg-[#252525] rounded-xl p-6 flex items-center justify-center">
          <img src={CopilotImage} alt="Copilot" className="w-60 h-24 object-contain" />
        </div>

        {/* Windsurf Logo */}
        <div className="bg-[#252525] rounded-xl p-6 flex items-center justify-center">
          <img src={WindsurfImage} alt="Windsurf" className="w-60 h-24 object-contain" />
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-2xl sm:text-2xl text-center font-['Coolvetica']">
        and more.
      </p>
    </div>
  );
};

export default Tech;