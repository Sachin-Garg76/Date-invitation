import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDate } from "../Context/DateContext.jsx";
import { motion } from "framer-motion";
import "../Styles/Forth.css";

const locations = [
  {
    id: "coffee",
    title: "Coffee Shop",
    image:
      "https://plus.unsplash.com/premium_photo-1664191866501-5e7ad9f07a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "restaurant",
    title: "Restaurant",
    image:
      "https://lovingnewyork.es/wp-content/uploads/2019/01/restaurantes-romanticos-en-nueva-york-190108105239001.jpg",
  },
  {
    id: "park",
    title: "Park",
    image:
      "https://i.pinimg.com/originals/35/89/94/358994c1ec6adc80563b6bcb5701d53e.jpg",
  },
  {
    id: "vrindavan",
    title: "Vrindavan",
    image:
      "https://media.istockphoto.com/id/2201040621/photo/kirti-temple-in-barsana-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=2X45kcxHdYxZy907Lb4mMh6JUFx2eTd6ec9OaBX-Ffc=",
  },
];

const Forth = () => {
   const { dateData, setDateData } = useDate();

  const [selectedLocation, setSelectedLocation] = useState(
    dateData.location || "coffee"
  );
  return (
    <motion.div
      className="fourth-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="fourth-card"
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
        <div className="fourth-progress-section">
          <span className="fourth-step-count">
            4 of 6
          </span>

          <div className="fourth-progress-bar">
            <span className="fourth-progress-active"></span>
            <span className="fourth-progress-active"></span>
            <span className="fourth-progress-active"></span>
            <span className="fourth-progress-active"></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Content */}
        <div className="fourth-content">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            Okay, then... pick a
            <br />
            location <span>📍</span>
          </motion.h1>

          <motion.p
            className="fourth-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          >
            Where should we go?
          </motion.p>

          {/* Location Cards */}
          <motion.div
            className="location-options"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
          >
            {locations.map((location, index) => {
              const isSelected =
                selectedLocation === location.id;

              return (
                <motion.button
                  key={location.id}
                  type="button"
                  className={`location-card ${isSelected
                      ? "location-selected"
                      : ""
                    }`}
                  onClick={() => {
                    setSelectedLocation(location.id);

                    setDateData({
                      ...dateData,
                      location: location.title,
                    });
                  }}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.55 + index * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >

                  {/* Selected Check */}
                  {isSelected && (
                    <motion.div
                      className="location-check"
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      ✓
                    </motion.div>
                  )}

                  {/* Image */}
                  <div className="location-image-wrapper">
                    <img
                      src={location.image}
                      alt={location.title}
                      className="location-image"
                    />
                  </div>

                  {/* Title */}
                  <span className="location-title">
                    {location.title}
                  </span>

                </motion.button>
              );
            })}
          </motion.div>

          {/* Continue */}
          <motion.div
            className="fourth-button-wrapper"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Link
              to="/fifth"
              className="fourth-continue-btn"
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

export default Forth;