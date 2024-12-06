import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HeartAnimation = React.memo(({ isVisible }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { scale: [0, 1.2, 1], opacity: [0, 1, 0] } : {}}
      transition={{ duration: 0.6 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    >
      <Heart className="w-24 h-24 text-red-500 fill-current" />
    </motion.div>
  );
});

HeartAnimation.displayName = "HeartAnimation";

export default HeartAnimation;
