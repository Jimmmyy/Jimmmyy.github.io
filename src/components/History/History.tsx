"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import Timeline from "./Timeline";
import { experiences, education } from "@/components/History/data";
import { useLanguage } from "@/context/LanguageContext";

const History = () => {
  const { t } = useLanguage();

  return (
    <section
      id="history"
      className="scroll-mt-28 my-24 px-4 sm:px-6 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
        {t.history.title}
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Experience */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white mb-8">
            <Briefcase className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            {t.history.experience}
          </h3>
          <Timeline items={experiences} />
        </div>
        {/* Education */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white mb-8">
            <GraduationCap className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            {t.history.education}
          </h3>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
};

export default History;
