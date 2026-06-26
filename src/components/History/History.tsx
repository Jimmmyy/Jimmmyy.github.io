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
      <div className="section-title-wrapper">
        <h2 className="section-title">{t.history.title}</h2>
        <div className="section-divider" />
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Experience */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-6 uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-blue-500" />
            {t.history.experience}
          </h3>
          <Timeline items={experiences} />
        </div>
        {/* Education */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-6 uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-blue-500" />
            {t.history.education}
          </h3>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
};

export default History;
