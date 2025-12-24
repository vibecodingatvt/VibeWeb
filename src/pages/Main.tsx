import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-1 relative overflow-x-hidden overflow-y-auto">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Main;