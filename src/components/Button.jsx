import { motion } from "framer-motion";
import { MotionConfig } from "framer-motion";

export default function Button() {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig
        transition={{
          duration: 0.2,
          ease:"easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.5, rotate: "2.5deg" }}
          className="example-button"
        >
          click me!
        </motion.button>
        <motion.button
          style={{
            backgroundColor: "red",
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.5, rotate: "-2.5deg" }}
          className="example-button"
        >
          click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}
