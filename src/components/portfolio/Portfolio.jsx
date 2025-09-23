import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AI Chat Bot",
    img: "/AiChat.png",
    desc: "AI Chat Bot is an intelligent conversational application built with React and styled using Tailwind CSS. It integrates the GEMI API for LLM to deliver smart, context-aware responses. Designed for seamless interaction, it demonstrates modern front-end development practices and real-time AI-driven communication.",
    link:"https://hello-guru-chatbot.netlify.app/"
  },
  {
    id: 2,
    title: "Kanban Application",
    img: "/kanban.png",
    desc: "The Kanban Application is a task management tool built with React for a dynamic and interactive front end, styled using Tailwind CSS for a clean and responsive design. It helps users organize tasks, track progress, and boost productivity with an intuitive drag-and-drop Kanban board interface.",
    link:"https://kanban-gopi.netlify.app/"
  },



  {
    id: 3,
    title: "Gym Management ",
    img: "/fitPro.png",
    desc: "Gym Management System is a web application built with Next.js for a dynamic front end and styled using Tailwind CSS. It streamlines fitness center operations by managing members, workouts, and schedules efficiently. The project showcases modern UI design, responsive layouts, and smooth navigation for an enhanced user experience.",
    link:"https://github.com/GopiDamarla/gms.git"
  },
  {
    id: 4,
    title: "Jewelry Shop",
    img: "jewellery.png",
    link:"https://lg-gold-works.lovable.app/",
    desc: "Jewelry is a lovable web application where users can explore, purchase, and customize unique jewelry pieces. The platform combines style with technology, offering a seamless shopping experience. Built using modern web technologies, it ensures secure transactions, personalized designs, and a user-friendly interface that enhances both creativity and convenience.",
  },
  {
    id: 5,
    title: "Flex Guru ",
    img: "/flexguru2.jpg",
    desc: "Developed a personalized fitness and diet planning web application to help users receive tailored workout and nutrition plans.Integrated a voice assistant using the Web Speech API to enable intuitive, hands-free user interactions.	Designed a secure login system, responsive UI, and connected the backend to manage personalized data and content.",
    link:"https://flexguru.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank"  rel="noopener noreferrer"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.slice().reverse().map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
