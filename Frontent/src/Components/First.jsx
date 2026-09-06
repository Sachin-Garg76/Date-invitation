import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/First.css";

const GIF_URL =
  "https://media1.tenor.com/m/q2SNrE0x2Z0AAAAd/gif-gatinho.gif";

const First = () => {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="date-card"
        initial={{ opacity: 0, scale: 0.94, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >

        {/* Progress Section */}
        <div className="progress-section">
          <span className="step-count">1 of 6</span>

          <div className="progress-bar">
            <span className="progress-active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I want to ask
            <br />
            you something...
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Just hear me out for a second 👀
          </motion.p>

          {/* Love GIF */}
          <motion.div
            className="love-gif-container"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
          >
            <img
              src={GIF_URL}
              alt="Cute love animation"
              className="love-gif"
            />
          </motion.div>

          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.5,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              to="/second"
              className="continue-btn"
            >
              Continue
              <span>→</span>
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default First;