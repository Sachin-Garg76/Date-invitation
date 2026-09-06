import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDate } from "../Context/DateContext.jsx";
import { motion } from "framer-motion";
import "../Styles/Fifth.css";

const Fifth = () => {
  const { dateData, setDateData } = useDate();

  const dateInputRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(
    dateData.date || ""
  );

  const [selectedTime, setSelectedTime] = useState(
    dateData.time || "3:00 PM – 6:00 PM"
  );

  const times = [
    {
      value: "9:00 AM – 12:00 PM",
      label: "9:00 AM – 12:00 PM",
      sub: "Morning",
    },
    {
      value: "2:00 PM – 5:00 PM",
      label: "2:00 PM – 5:00 PM",
      sub: "Afternoon",
    },
    {
      value: "3:00 PM – 6:00 PM",
      label: "3:00 PM – 6:00 PM",
      sub: "Evening",
    },
    {
      value: "4:00 PM – 7:00 PM",
      label: "4:00 PM – 7:00 PM",
      sub: "Evening",
    },
  ];

  const formatDate = (date) => {
    if (!date) return "Select a date";

    return new Date(date + "T00:00:00").toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;

    setSelectedDate(newDate);

    setDateData({
      ...dateData,
      date: newDate,
    });
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time.value);

    setDateData({
      ...dateData,
      time: time.value,
    });
  };

  const openDatePicker = () => {
    if (dateInputRef.current) {
      if (typeof dateInputRef.current.showPicker === "function") {
        dateInputRef.current.showPicker();
      } else {
        dateInputRef.current.focus();
        dateInputRef.current.click();
      }
    }
  };

  return (
    <motion.div
      className="fifth-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="fifth-card"
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

        {/* ================= PROGRESS ================= */}

        <div className="fifth-progress-section">
          <span className="fifth-step-count">
            5 of 6
          </span>

          <div className="fifth-progress-bar">
            <span className="fifth-progress-active"></span>
            <span className="fifth-progress-active"></span>
            <span className="fifth-progress-active"></span>
            <span className="fifth-progress-active"></span>
            <span className="fifth-progress-active"></span>
            <span></span>
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="fifth-content">

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
            Great! Now pick a
            <br />
            date & time <span>💕</span>
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            className="fifth-subtitle"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          >
            Choose what works best for you.
          </motion.p>

          {/* ================= DATE ================= */}

          <motion.div
            className="fifth-section"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
          >
            <h3>Select a date</h3>

            <div
              className="fifth-date-box"
              onClick={openDatePicker}
            >

              {/* Calendar Icon */}

              <span className="calendar-icon">
                📅
              </span>

              {/* Date Text */}

              <div className="date-text">
                <small>Your date</small>

                <span
                  className={
                    !selectedDate
                      ? "date-placeholder"
                      : ""
                  }
                >
                  {formatDate(selectedDate)}
                </span>
              </div>

              {/* Date Input */}

              <input
                ref={dateInputRef}
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                min={
                  new Date()
                    .toISOString()
                    .split("T")[0]
                }
              />

              {/* Calendar Icon */}

              <span className="calendar-arrow">
                📅
              </span>

            </div>
          </motion.div>

          {/* ================= TIME ================= */}

          <motion.div
            className="fifth-section fifth-time-section"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.5,
            }}
          >
            <h3>Select a time</h3>

            <div className="fifth-time-options">

              {times.map((time, index) => {

                const isSelected =
                  selectedTime === time.value;

                return (
                  <motion.button
                    key={time.value}
                    type="button"
                    className={`fifth-time-card ${
                      isSelected
                        ? "fifth-selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleTimeChange(time)
                    }
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay:
                        0.7 +
                        index * 0.08,
                      duration: 0.4,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                  >

                    {/* Check */}

                    {isSelected && (
                      <motion.span
                        className="fifth-time-check"
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
                      </motion.span>
                    )}

                    <strong>
                      {time.label}
                    </strong>

                    <small>
                      {time.sub}
                    </small>

                  </motion.button>
                );
              })}

            </div>
          </motion.div>

          {/* ================= CONTINUE ================= */}

          <motion.div
            className="fifth-button-wrapper"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.95,
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
              to="/sixth"
              className="fifth-continue-btn"
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

export default Fifth;