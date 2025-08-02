"use client";

import { motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";

interface ClickMeProps {
  active: boolean;
  onClick: () => void;
}

const ClickMe = ({ active, onClick }: ClickMeProps) => (
  <motion.span
    initial={{ scale: 1 }}
    animate={
      active
        ? { scale: 1, rotate: 0 }
        : { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }
    }
    transition={
      active ? { duration: 0.2 } : { repeat: Infinity, duration: 1.2 }
    }
    className="text-pink-500"
    title="Clique ici !"
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <div className="p-2 rounded-full bg-blue-900/30  hover:bg-blue-800 transition">
      <MousePointerClick className="w-6 h-6 text-blue-400" />
    </div>
  </motion.span>
);

export default ClickMe;
