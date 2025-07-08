import { CiMail, CiUser } from "react-icons/ci";
import { BiMessage } from "react-icons/bi";
import { RiContactsBook3Line, RiShareBoxLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import {
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTiktok,
} from "react-icons/io5";

const Contact = () => {
  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%] " id="contact">
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#800d0d] to-[#5a0606] aos-init aos-animate"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span>Contact</span>
        </h2>
        <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-3xl sm:text-lg flex items-center justify-center gap-2 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          Have a question? Send me a message, and I'll get back to you as soon
          as possible.
        </p>
      </div>
      <div className="h-auto py-10 flex items-center justify-center 2xl:pr-[3.1%] lg:pr-[3.8%]  md:px-0">
        <div className="container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-500 hover:shadow-[#6366f1]/10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#800d0d] to-[#5a0606]">
                  Liên Hệ
                </h2>
                <p className="text-gray-400">
                  Got something to discuss? Send me a message and let's talk.
                </p>
              </div>
              <RiContactsBook3Line className="w-10 h-10 text-[#872d2d] opacity-50" />
            </div>
            <div className="space-y-6">
              <div
                className="relative group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="100"
              >
                <CiUser className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#f16363] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                />
              </div>
              <div
                className="relative group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="100"
              >
                <CiMail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#f16363] transition-colors" />
                <input
                  type="mail"
                  name="mail"
                  placeholder="Email"
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                />
              </div>
              <div
                className="relative group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                <BiMessage className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#f16363] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Message"
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                />
              </div>
              <button
                className="w-full bg-gradient-to-r from-[#c94f4f] to-[#872d2d] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                <FiSend />
                Send
              </button>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
              <h3
                className="text-xl font-semibold text-white mb-6 flex items-center gap-2 aos-init aos-animate"
                data-aos="fade-down"
              >
                <span className="inline-block w-8 h-1 bg-red-800 rounded-full"></span>
                Connect With Me
              </h3>
              <div className="flex flex-col gap-8">
                <a
                  href="https://www.facebook.com/duy.thien.1702/"
                  target="_blank"
                  className="group relative flex items-center justify-between p-6 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r from-[#0A66C2] to-[#0077B5]"
                  ></div>

                  <div className="relative flex items-center gap-4">
                    <div className="relative flex items-center justify-center">
                      <div
                        className="bg-blue-500 absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                      ></div>
                      <div className="relative p-2 rounded-md">
                        <FaFacebookF className="text-blue-600 w-6 h-6 transition-all duration-500 group-hover:scale-105" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                        Let's Connect
                      </span>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        on Facebook
                      </span>
                    </div>
                  </div>
                  <RiShareBoxLine
                    className="lucide lucide-external-link w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                    ></div>
                  </div>
                </a>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href="https://www.instagram.com/_iam.xien/"
                    target="_blank"
                    className="group relative flex items-center justify-between p-6 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
                    ></div>

                    <div className="relative flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="bg-red-500 absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                        ></div>
                        <div className="relative p-2 rounded-md">
                          <IoLogoInstagram className="text-red-600 w-6 h-6 transition-all duration-500 group-hover:scale-105" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                          Instagram
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          _iam.xien
                        </span>
                      </div>
                    </div>
                    <RiShareBoxLine
                      className="lucide lucide-external-link w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                      ></div>
                    </div>
                  </a>
                  <a
                    href="https://discord.com/channels/@duythien79"
                    target="_blank"
                    className="group relative flex items-center justify-between p-6 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r from-[#160ac2] to-[#6400b5]"
                    ></div>

                    <div className="relative flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="bg-indigo-500 absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                        ></div>
                        <div className="relative p-2 rounded-md">
                          <IoLogoDiscord className="text-indigo-700 w-6 h-6 transition-all duration-500 group-hover:scale-105" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                          Discord
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          @duythien79
                        </span>
                      </div>
                    </div>
                    <RiShareBoxLine
                      className="lucide lucide-external-link w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href="https://www.tiktok.com/@dt1702t"
                    target="_blank"
                    className="group relative flex items-center justify-between p-6 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r from-[#000000] via-[#25F4EE] to-[#FE2C55]"
                    ></div>

                    <div className="relative flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="bg-black absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                        ></div>
                        <div className="relative p-2 rounded-md">
                          <IoLogoTiktok className="text-black w-6 h-6 transition-all duration-500 group-hover:scale-105" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                          Tiktok
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          dt1702t
                        </span>
                      </div>
                    </div>
                    <RiShareBoxLine
                      className="lucide lucide-external-link w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                      ></div>
                    </div>
                  </a>
                  <a
                    href="https://github.com/duythi3n"
                    target="_blank"
                    className="group relative flex items-center justify-between p-6 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r from-[#333] to-[#24292e]"
                    ></div>

                    <div className="relative flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="bg-gray-300 absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                        ></div>
                        <div className="relative p-2 rounded-md">
                          <IoLogoGithub className="text-white w-6 h-6 transition-all duration-500 group-hover:scale-105" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                          Github
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          duythi3n
                        </span>
                      </div>
                    </div>
                    <RiShareBoxLine
                      className="lucide lucide-external-link w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
