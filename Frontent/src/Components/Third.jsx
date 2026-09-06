import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/Third.css";

// Direct GIF URL
const GIF_URL =
  "https://media.tenor.com/--llCUumGTcAAAAm/emotions-joy.webp";

const Third = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <motion.div
      className="third-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="third-card"
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

        {/* Progress Section */}
        <div className="third-progress-section">
          <span className="third-step-count">
            3 of 6
          </span>

          <div className="third-progress-bar">
            <span className="third-progress-active"></span>
            <span className="third-progress-active"></span>
            <span className="third-progress-active"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Main Content */}
        <div className="third-content">

          {/* Decorative Hearts */}
          <motion.div
            className="third-floating-heart third-heart-one"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ♥
          </motion.div>

          <motion.div
            className="third-floating-heart third-heart-two"
            animate={{
              y: [0, 8, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ♥
          </motion.div>

          <motion.div
            className="third-floating-heart third-heart-three"
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ♥
          </motion.div>

          <motion.div
            className="third-floating-heart third-heart-four"
            animate={{
              y: [0, 9, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ♥
          </motion.div>

          {/* GIF */}
          <motion.div
            className="third-gif-container"
            initial={{
              opacity: 0,
              scale: 0.65,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 110,
            }}
          >
            <img
              src={GIF_URL}
              alt="Cute love animation"
              className="third-love-gif"
            />
          </motion.div>

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
              delay: 0.35,
              duration: 0.6,
            }}
          >
            Wait... did you really
            <br />
            say YES? <span>🥺</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="third-subtitle"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
          >
            I just want to make sure I'm not dreaming.
          </motion.p>

          {/* Confirmation Button */}
          <AnimatePresence mode="wait">

            {!confirmed ? (
              <motion.div
                key="confirm-button"
                className="third-button-wrapper"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <button
                  type="button"
                  className="confirm-button"
                  onClick={() => setConfirmed(true)}
                >
                  YES, I DID! ❤️
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="confirmed-message"
                className="confirmed-wrapper"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                }}
              >
                <p className="confirmed-text">
                  Yay! I knew it! 🥰❤️
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    to="/forth"
                    className="next-button"
                  >
                    Continue ❤️
                    <span>→</span>
                  </Link>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Third;