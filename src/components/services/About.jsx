import { useRef } from "react";
import "./services.scss";
import { motion, px, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      {/* <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div> */}
      {/* <div className="w-full px-[12%] py-10 pt-7 scroll-mt-20 mt-5">
        <h1 className="text-center">Introduction </h1>
        <div className=" listContainer flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className=" w-64 sm:w-80 rounded-3xl max-w-none">
            <img src="/hero.png" alt=" user " className="w-full rounded-3xl" />
          </div>
          <div className="flex-1 ">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field Throughout my career I have
              had the privilege of collaborating with prestigious organizations
              contributing to their success and growth{" "}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <li className="border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer">
                <image src="/hero.png" alt="icon" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold "> Technologies</h3>
                <p className="text-sm">
                  {" "}
                  HTML, CSS, JavaScript React Js, Next Js
                </p>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div> */}
       <section className="about-section">
      <h1  className="text-center">Introduction </h1>
      <div className="about-container">
        <img src='/gopifull.jpg' alt="Profile" className="profile-img pl-5" />
        <div className="about-content">
          <p className="about-description">
            I am an experienced Frontend Developer with over a decade of professional expertise in the field.
            Throughout my career, I have had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <div className="about-cards">
            <div className="card active">
              <div className="card-icon"><img src="/code-icon-dark.png " width="20px" alt="code icon" /></div>
              <div className="card-title">Languages</div>
              <div className="card-text">HTML, CSS, JavaScript, React Js, Next Js, java, Springboot, Wordpress</div>
            </div>
            <div className="card ">
              <div className="card-icon"><img src="/edu-icon-dark.png " width="20px" alt="code icon" /></div>
              <div className="card-title">Education</div>
              <div className="card-text">B.Tech in Electrical and Electronics Engineering </div>
            </div>
            <div className="card">
              <div className="card-icon"><img src="/project-icon-dark.png " width="20px" alt="code icon" /></div>
              <div className="card-title">Projects</div>
              <div className="card-text">Built more than 5 projects</div>
            </div>
          </div>

          <div className="tools-used">
            <span>Tools I use</span>
            <div className="tools-icons">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default About;
