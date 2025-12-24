import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="relative z-50 bg-transparent">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center h-20">
          
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="VibeCoders Logo" className="h-10 w-auto translate-y-[3px]" />
            <span className="text-white font-bold text-xl uppercase font-['Coolvetica']">
              VIBECODERS
            </span>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:opacity-80 transition-opacity text-base navbar-thin-text">
              About
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity text-base navbar-thin-text">
              Mentorship
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity text-base navbar-thin-text">
              FAQ
            </a>
            {/* Register Button */}
            <button 
              className="bg-white text-[#252525] px-[15px] py-[3px] rounded-2xl hover:opacity-90 transition-opacity text-base whitespace-nowrap navbar-thin-text"
            >
              Register
            </button>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Right Side - Theme Toggle */}
          <div className="flex items-center shrink-0">
            {/* Dark Mode Toggle Icon */}
            <button className="text-white hover:opacity-80 transition-opacity p-1">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

