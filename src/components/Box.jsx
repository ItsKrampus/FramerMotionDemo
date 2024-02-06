import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
export default function Box() {
  const [isVisable, setIsVisable] = useState(true);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        className="example-button"
        onClick={() => setIsVisable(!isVisable)}
        layout
        transition={{duration:1}}
      >
        show/hide
      </motion.button>

      <AnimatePresence mode="popLayout">
        {isVisable && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y:0
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y:[0, 150, -150, -150, 0]
            }}
            transition={{
              duration: 1.5,
              ease: "backInOut",
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              transition:{duration:0.8},
              y:0
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
              borderRadius: "15px",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
