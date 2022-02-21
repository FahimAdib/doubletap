import React from "react";
import "./BackgroundBlur.css";
import { motion, AnimatePresence } from "framer-motion";

function BackgroundBlur({ showModal }) {
  return (
    <AnimatePresence initial={false}>
      {showModal && (
        <motion.div
          key="modal"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.2 }}
          className="blur-background"
        ></motion.div>
      )}
    </AnimatePresence>
  );
}

export default BackgroundBlur;
