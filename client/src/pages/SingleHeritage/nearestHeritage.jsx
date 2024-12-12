import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const HeritageNotifications = ({ heritages }) => {
  const [visibleHeritages, setVisibleHeritages] = useState([]);
  const [showNotifications, setShowNotifications] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setVisibleHeritages(heritages);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowNotifications(scrollPosition < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heritages]);

  const handleClose = (index) => {
    setVisibleHeritages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClick = (slug) => {
    navigate(`/heritage/${slug}`);
  };

  return (
    <AnimatePresence>
      {showNotifications && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 z-50 flex flex-col-reverse items-end space-y-4 space-y-reverse"
        >
          {visibleHeritages.map((heritage, index) => (
            <motion.div
              key={heritage.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-80 mb-4"
            >
              <div className="relative">
                <img
                  src={heritage.image.url}
                  alt={heritage.name}
                  className="w-full h-40 object-cover"
                />
                <button
                  onClick={() => handleClose(index)}
                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                  aria-label="Close notification"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {heritage.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {heritage.state_culture_name}
                </p>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {heritage.introduction}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-amber-600">
                    {(heritage.distance / 1000).toFixed(2)} km away
                  </span>
                  <button
                    className="px-3 py-1 bg-amber-600 text-white text-sm rounded-md font-medium hover:bg-amber-700 transition-colors duration-300"
                    onClick={() => handleClick(heritage.slug)}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeritageNotifications;
