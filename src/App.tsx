import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Mentorship from './components/Mentorship';
import Tech from './components/Tech';
import HackAVibe from './components/HackAVibe';
import DiskImage from './assets/Disk.png';
import StickyChatbar from './components/StickyChatbar';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      {/* Background Disk Image */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden will-change-transform">
        <img 
          src={DiskImage} 
          alt="Vinyl Record" 
          className="absolute left-[clamp(-20%,-15vw,-10%)] top-[50%] transform -translate-y-1/2 w-[clamp(90%,95vw,900px)] sm:w-[clamp(80%,85vw,900px)] md:w-[clamp(70%,75vw,900px)] lg:w-[clamp(60%,70vw,900px)] max-w-[900px] opacity-40 will-change-transform aspect-square object-contain"
        />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 relative overflow-x-hidden overflow-y-auto">
        <About />
        <Mentorship />
        <Tech />
        <HackAVibe />
      </div>
      
      <Footer />
      <StickyChatbar />
    </div>
  );
}

export default App;
