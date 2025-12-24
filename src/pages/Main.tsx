import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import Mentorship from '../components/Mentorship';

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-1 relative overflow-x-hidden overflow-y-auto">
        <About />
        <Mentorship />
      </div>
      <Footer />
    </div>
  );
};

export default Main;