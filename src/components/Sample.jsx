import { motion } from "framer-motion";

export const Sample = () => (
  <motion.div
    className="flex p-4 bg-indigo-600 rounded-md shadow-md"
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
  />
);
