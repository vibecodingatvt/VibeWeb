import DiscordIcon from '../assets/Discord.svg';
import LinkedinIcon from '../assets/Linkedin.svg';
import InstagramIcon from '../assets/Instagram.svg';
import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#252525] w-full text-white p-5 overflow-hidden">
      {/* big section */}
      <div className="w-full pl-6 sm:pl-8 lg:pl-12 xl:pl-16 pr-6 sm:pr-8 lg:pr-12 xl:pr-16 mb-35 overflow-hidden">
        <h1 className="text-left font-['Coolvetica'] leading-none overflow-hidden whitespace-nowrap max-w-full text-[clamp(120px,16vw,280px)] tracking-[-0.02em]">VIBECODERS</h1>
        <div className="flex items-center gap-4 mt-[-30px]">
            <h1 className="text-left text-white font-['Coolvetica']" style={{ fontSize: 'clamp(24px, 4vw, 50px)' }}>Join us.</h1>
            <a href="#" className="text-black rounded-xl font-light bg-white px-3 py-0.5 mt-[5px] text-sm sm:text-base cursor-pointer hover:opacity-90 transition-opacity inline-block">Register</a>
        </div>
      </div>
      {/* small section */}
      <div className="relative flex items-center justify-between w-full pl-6 sm:pl-8 lg:pl-12 xl:pl-16 pr-6 sm:pr-8 lg:pr-12 xl:pr-16">
        {/* Left: Copyright */}
        <h1 className="text-left text-white text-[20px] font-['Coolvetica']">© 2026 VIBECODERS</h1>
        
        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-[-10px]">
          <img src={Logo} alt="VibeCoders Logo" className="h-14 w-auto translate-y-[-3px] drop-shadow-lg" />
        </div>
        
        {/* Right: Social Icons and Contact */}
        <div className="relative flex items-center">
            {/* Social Icons */}
            <div className="absolute bottom-full mb-2 flex gap-4 right-0">
                <a href="https://discord.gg/6wXkJzEu" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={DiscordIcon} alt="Discord Icon" className="h-8 w-11 translate-y-[-3px]" />
                </a>
                <a href="https://www.linkedin.com/company/vibe-coding-vt" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={LinkedinIcon} alt="Linkedin Icon" className="h-8 w-8 translate-y-[-3px]" />
                </a>
                <a href="https://www.instagram.com/vibecodingatvt/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={InstagramIcon} alt="Instagram Icon" className="h-8 w-8 translate-y-[-3px]" />
                </a>
            </div>
            {/* Contact text */}
            <p className="text-white text-[16px] font-['Coolvetica'] text-right">
              Contact us at <span className="underline">vibecodingatvt@gmail.com</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;