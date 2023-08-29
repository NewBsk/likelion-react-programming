import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FramerLogo } from "./Logo";
import { useState } from "react";
// import reactUrl from '@/assets/react.svg?url';
// import reactRaw from '@/assets/react.svg?raw';

// console.log(reactUrl);
// console.log(reactRaw);

function Heading() {
  const [animKey, setAnimKey] = useState(0);

  const handleRefreshAnimation = () => {
    setAnimKey((key) => (key += 1));
  };

  return (
    <motion.h1 whileHover={{ scale: 1.2, rotate: -2 }}>
      <Link to="/" onClick={handleRefreshAnimation}>
        <FramerLogo key={animKey} size={60} className="text-blue-300" />
      </Link>
    </motion.h1>
  );
}

export default Heading;
