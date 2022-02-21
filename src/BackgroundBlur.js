import React from "react";
import "./BackgroundBlur.css";
import { motion, AnimatePresence } from "framer-motion";

function BackgroundBlur({ showModal }) {
  return (
    <AnimatePresence initial={false}>
      {showModal && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="blur-background"
        ></motion.div>
      )}
    </AnimatePresence>
  );
}

export default BackgroundBlur;
