import { GiStarfighter } from "react-icons/gi";
import { FaQuoteLeft } from "react-icons/fa";
// import useAOS from "../../Hooks/useAOS.jsx";
import "aos/dist/aos.css";
import Viewproject from "../../component/Button/Viewproject.jsx";
import DownCV from "../../component/Button/DownCV.jsx";

const About = ({ name }) => {
  // useAOS();
  return (
    <div
      className="about min-h-screen pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-20 sm-mt-0 scroll-mt-32"
      id="about"
    >
      <div className="mt-30">
        <div className="text-center lg:mb-8 mb-2 px-[5%]">
          <div className="inline-block relative group">
            <h2
              className="text-6xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#800d0d] to-[#5a0606] aos-init aos-animate"
              data-aos="zoom-in-up"
              data-aos-duration="600"
            >
              {name}
            </h2>
          </div>
          <div
            className="mt-2 text-gray-400 max-w-2xl mx-auto text-3xl sm:text-lg flex items-center justify-center gap-2 aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <GiStarfighter className="lucide lucide-sparkles w-5 h-5 text-red-700" />
            <p>Transforming ideas into digital experiences</p>
            <GiStarfighter className="lucide lucide-sparkles w-5 h-5 text-red-700" />
          </div>
        </div>
        <div className="w-full mx-auto pt-8 sm:pt-12 relative">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-auto gap-10 lg:gap-16 items-center">
            <div>
              <div
                className="space-y-6 text-center lg:text-center"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <p className="text-2xl text-gray-400 leading-relaxed text-center pb-4">
                  As a recent graduate in Information Technology with a passion
                  for web interface development, I have built a solid foundation
                  in HTML, CSS, JavaScript, and the ReactJS library through
                  personal projects and academic coursework. I am always eager
                  to learn new technologies, take responsibility seriously, and
                  work well in a team environment. My goal is to become a
                  professional Front-End Developer who delivers smooth and
                  modern user experiences.
                </p>
              </div>
              <div className="my-6 space-y-6">
                <div
                  className="w-[95vw] lg:w-[50%] mx-auto p-6 flex items-center justify-center bg-gradient-to-r from-[#3f1e1e] to-[#2e1a1a] border border-[#6e3a3a] rounded-lg gap-3"
                  data-aos="zoom-in-up"
                  data-aos-duration="1200"
                >
                  <FaQuoteLeft className="text-[#9e5a5a] text-2xl" />
                  <p className="italic text-[#B0B0D9] text-lg font-semibold leading-relaxed text-center">
                    "Leveraging AI as a professional tool, not a replacement."
                  </p>
                </div>
                <div className="lg:w-[60%] mx-auto flex flex-col lg:flex-row gap-4 items-center lg:justify-between">
                  <div data-aos="zoom-in-up" data-aos-duration="1400">
                    <DownCV />
                  </div>
                  <div data-aos="zoom-in-up" data-aos-duration="1400">
                    <Viewproject />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
