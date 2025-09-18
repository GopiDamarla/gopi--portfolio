import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://in.linkedin.com/" target="_blank"  rel="noopener noreferrer">
            <img src="/linkedin.png" alt="" />
          </a>
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="" />
          </a> */}
          
          <a href="https://github.com/GopiDamarla" target="_blank" rel="noopener noreferrer">
            <img src="/github3.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
