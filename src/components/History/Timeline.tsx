"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ClickMe from "./ClickMe";

type TimelineItem = {
  title: string;
  org: string;
  date: string;
  location: string;
  description?: string; // Optional description for additional details
};

const Timeline = ({ items }: { items: TimelineItem[] }) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />
      <div className="flex flex-col gap-10 pl-12">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex items-center cursor-pointer ${
              active === i ? "ring-2 ring-blue-400" : ""
            }`}
            onClick={() => setActive(active === i ? null : i)}
          >
            {/* Timeline point */}
            <span
              className={`absolute left-[-2.5rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 shadow-lg border-2 border-white dark:border-gray-900 transition-all ${
                active === i ? "scale-125 ring-4 ring-blue-300" : ""
              }`}
            />
            {/* Content */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 w-full transition-all flex items-center gap-3">
              {/* Click me logo */}
              <ClickMe
                active={active === i}
                onClick={() => setActive(active === i ? null : i)}
              />
              <div className="flex-1">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.org} – {item.location}
                </p>
                <span className="text-xs text-gray-500">{item.date}</span>
                {active === i && (
                  <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    {item.description || "No additional details available."}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
