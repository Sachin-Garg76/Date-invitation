import React, { useState } from "react";
import { useDate } from "../Context/DateContext.jsx";
import { motion } from "framer-motion";
import "../Styles/Sixth.css";

const Sixth = () => {
  const { dateData } = useDate();

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  // Format selected date
  const formattedDate = dateData.date
    ? new Date(dateData.date + "T00:00:00").toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Date not selected";

  // Save data to MongoDB
  const handleConfirmDate = async () => {
    setError("");

    // Prevent multiple submissions
    if (saving || saved) {
      return;
    }

    // Validate data
    if (!dateData.location || !dateData.date || !dateData.time) {
      setError("Please select location, date and time first.");
      return;
    }

    setSaving(true);

    console.log("Data being sent:", dateData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/date`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answer: "yes",
            location: dateData.location,
            date: dateData.date,
            time: dateData.time,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to save date"
        );
      }

      console.log("Saved successfully:", result);

      setSaved(true);
    } catch (error) {
      console.error("Error:", error);

      setError(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      className="sixth-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="sixth-card"
        initial={{
          opacity: 0,
          scale: 0.88,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {/* Progress */}

        <div className="sixth-progress-section">
          <span className="sixth-step-count">
            6 of 6
          </span>

          <div className="sixth-progress-bar">
            <span className="sixth-progress-active"></span>
            <span className="sixth-progress-active"></span>
            <span className="sixth-progress-active"></span>
            <span className="sixth-progress-active"></span>
            <span className="sixth-progress-active"></span>
            <span className="sixth-progress-active"></span>
          </div>
        </div>

        {/* Content */}

        <div className="sixth-content">

          {/* Happy GIF */}

          <motion.div
            className="sixth-gif-wrapper"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              type: "spring",
              stiffness: 180,
            }}
          >
            <img
              src="https://media.tenor.com/774iiywZQxIAAAAM/peach-goma-peach-cat.gif"
              alt="Happy celebration"
              className="sixth-gif"
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
              delay: 0.4,
              duration: 0.6,
            }}
          >
            Okayyy, deal done! ❤️
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            className="sixth-subtitle"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.6,
            }}
          >
            Date done. Time done.
          </motion.p>

          {/* Confirmation Details */}

          <motion.div
            className="sixth-confirmation"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
          >
            {/* Location */}

            <div className="sixth-detail">
              <span className="sixth-detail-icon">
                📍
              </span>

              <div>
                <small>Location</small>

                <strong>
                  {dateData.location || "Location not selected"}
                </strong>
              </div>
            </div>

            {/* Date */}

            <div className="sixth-detail">
              <span className="sixth-detail-icon">
                📅
              </span>

              <div>
                <small>Date</small>

                <strong>
                  {formattedDate}
                </strong>
              </div>
            </div>

            {/* Time */}

            <div className="sixth-detail">
              <span className="sixth-detail-icon">
                🕒
              </span>

              <div>
                <small>Time</small>

                <strong>
                  {dateData.time || "Time not selected"}
                </strong>
              </div>
            </div>

            {/* Meeting Text */}

            <p className="sixth-meeting-text">
              Milte hain uss time pe 🥰
            </p>

            <span className="sixth-date-label">
              It's a date! 💕
            </span>
          </motion.div>

          {/* Confirm Button */}

          <motion.button
            className="sixth-confirm-btn"
            onClick={handleConfirmDate}
            disabled={saving || saved}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.6,
            }}
          >
            {saving
              ? "Saving... ⏳"
              : saved
              ? "Date Confirmed ❤️"
              : "Confirm Date ❤️"}
          </motion.button>

          {/* Success Message */}

          {saved && (
            <motion.p
              className="sixth-success-message"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            >
              Date confirmed successfully! 🥰❤️
            </motion.p>
          )}

          {/* Error */}

          {error && (
            <motion.p
              className="sixth-error-message"
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              {error}
            </motion.p>
          )}

          {/* Bottom Message */}

          <motion.p
            className="sixth-bottom-text"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.6,
            }}
          >
            Can't wait to see you ❤️
          </motion.p>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sixth;