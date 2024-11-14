import { logo } from "../assets";
import { socialsInfo } from "../constants/socialsInfo";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <>
      <div className="flex-[0.75]  p-10 rounded-2xl text-white ">
        <div className="container flex flex-col md:flex-row justify-evenly items-center  ">
          <div className="w-full text-center h-52  px-11 ">
            <img
              src={logo}
              alt="logo"
              className="w-36 h-36 object-contain mx-auto"
            />
            {/* <p className="text-gray-400 max-w-sm">Portfolio</p> */}
          </div>

          <div className="w-full h-52 text-center md:text-left px-11">
            {/* <h2 className="text-gray-600 mb-2">Contact</h2>
            <ul className="space-y-2 text-gray-300 ">
              <li>Made With Love</li>
            </ul>
            <br /> */}
            <h2 className="text-gray-600 mb-2">Location</h2>
            <ul className="space-y-2 text-gray-300 ">
              <li>Baguio City, Philippines, 2600</li>
            </ul>
          </div>

          <div className="w-full h-52 text-center md:text-left px-11">
            <h2 className="text-gray-600 mb-2">Socials</h2>
            <ul className="space-y-2 text-gray-300 ">
              {socialsInfo.map((socials) => (
                <li key={socials.name}>
                  <a
                    href={socials.url}
                    className="hover:text-white transition-colors"
                    target={socials.target}
                  >
                    {socials.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-52 text-center md:text-left px-11">
            <h2 className="text-gray-600 mb-2">Links</h2>
            <ul className="space-x-0 text-gray-300 ">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4 text-gray-400 text-sm">
          <p>©2024 - J3 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

const WrappedFooter = SectionWrapper(Footer, "footer");
export default WrappedFooter;
