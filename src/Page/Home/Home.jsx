import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import avt from "@/assets/avt.jpg";
import Viewproject from "../../component/Button/Viewproject.jsx";
import IoIosMail from "../../component/Button/Contact.jsx";
import Contact from "../../component/Button/Contact.jsx";
import ProjectBtn from "../../component/Button/ProjectBtn.jsx";

const Home = () => {
  return (
    <div
      className="home min-h-screen overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mb-20"
      id="home"
    >
      <div className="relative z-10 transition-all duration-1000 opacity-100">
        <div className="container mx-auto  min-h-screen ">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen mt-24 lg:mt-0 md:justify-between gap-0 sm:gap-12 lg:gap-40">
            <div className="right-page w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0 aos-init aos-animate">
              <div className="space-y-4 sm:space-y-6">
                <h3
                  className="text-5xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Hello, It's me
                </h3>
                <h1
                  className="text-8xl font-bold mb-4"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  Duy Thiện
                </h1>
                <h3
                  className="text-4xl font-bold mb-8"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  And I'm a
                  <span className="text-red-700">
                    <Typewriter
                      words={[" Front-end Developer", " Lowkey"]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={70}
                      delaySpeed={1000}
                    />
                  </span>
                </h3>
                <p
                  className="text-2xl text-justify"
                  data-aos="zoom-in-up"
                  data-aos-delay="200"
                >
                  A little more persistence, a little more effort, and what
                  seemed hopeless failure may turn to glorious success.{" "}
                </p>
                <div className="social-media flex gap-4 mb-8">
                  <a
                    className="inline-flex w-15 justify-center items-center h-15 text-3xl bg-transparent border border-red-700 rounded-full text-red-700 hover:bg-red-600 mt-6 mx-2 transition delay-75"
                    href="https://www.facebook.com/duy.thien.1702/"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    className="inline-flex w-15 justify-center items-center h-15 text-3xl bg-transparent border border-red-700 rounded-full text-red-700 hover:bg-red-600 mt-6 mx-2 transition delay-75"
                    href="https://www.tiktok.com/@dt1702t"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <FaTiktok className="bg-transparent" />
                  </a>
                  <a
                    className="inline-flex w-15 justify-center items-center h-15 text-3xl bg-transparent border border-red-700 rounded-full text-red-700 hover:bg-red-600 mt-6 mx-2 transition delay-75"
                    href="https://github.com/duythi3n"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="inline-flex w-15 justify-center items-center h-15 text-3xl bg-transparent border border-red-700 rounded-full text-red-700 hover:bg-red-600 mt-6 mx-2 transition delay-75"
                    href="https://discord.com/channels/@duythien79"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <FaDiscord />
                  </a>
                </div>
                <div className="flex flex-row gap-6 justify-center lg:justify-start">
                  <div
                    className="button flex justify-center lg:w-[160px]"
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                  >
                    <ProjectBtn />
                  </div>
                  <div
                    className="button flex justify-center lg:w-[160px]"
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                  >
                    <Contact />
                  </div>
                </div>
              </div>
            </div>
            <div className="left-page w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0 aos-init aos-animate">
              <img
                className="w-96 h-96 border-4 border-red-700 rounded-full object-cover"
                src={avt}
                alt="Avatar"
                data-aos="fade-up"
                data-aos-delay="500"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
