import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/Second.css";

// Direct Tenor GIF URL
const GIF_URL =
  "https://media1.tenor.com/m/NHrA_C90ZbYAAAAd/please-please-please.gif";

const noMessages = [
  "No 💔",
  "Are you sure? 🥺",
  "Think again 👀",
  "Please? 🥹",
  "Maybe? ❤️",
];

const Second = () => {
  const [noCount, setNoCount] = useState(0);

  const handleNoClick = () => {
    if (noCount < noMessages.length - 1) {
      setNoCount((prev) => prev + 1);
    }
  };

  const isNoDisabled = noCount === noMessages.length - 1;

  return (
    <motion.div
      className="second-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="second-card"
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 25,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >

        {/* Progress */}
        <div className="second-progress-section">
          <span className="second-step-count">
            2 of 6
          </span>

          <div className="second-progress-bar">
            <span className="second-progress-active"></span>
            <span className="second-progress-active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Content */}
        <div className="second-content">

          {/* Decorative Hearts */}
          <div className="floating-heart heart-one">♥</div>
          <div className="floating-heart heart-two">♥</div>
          <div className="floating-heart heart-three">♥</div>
          <div className="floating-heart heart-four">♥</div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            Will you go on
            <br />
            a date with me? <span>❤️</span>
          </motion.h1>

          <motion.p
            className="second-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          >
            I promise it'll be worth it 🥰
          </motion.p>

          {/* GIF */}
          <motion.div
            className="second-gif-container"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.45,
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
          >
            <img
              src={GIF_URL}
              alt="Cute please animation"
              className="second-love-gif"
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="date-buttons"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
          >

            {/* YES */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <Link
                to="/third"
                className="yes-button"
              >
                Yes ❤️
              </Link>
            </motion.div>

            {/* NO */}
            <motion.button
              type="button"
              className={`no-button ${
                isNoDisabled ? "no-button-disabled" : ""
              }`}
              onClick={handleNoClick}
              disabled={isNoDisabled}
              animate={
                noCount > 0 && !isNoDisabled
                  ? {
                      scale: [1, 1.08, 1],
                    }
                  : {
                      scale: 1,
                    }
              }
              transition={{
                duration: 0.35,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={noMessages[noCount]}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {noMessages[noCount]}
                </motion.span>
              </AnimatePresence>
            </motion.button>

          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Second;