"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import Timeline from "./Timeline";

const experiences = [
  {
    title: "Data Engineer",
    org: "Company A",
    date: "2022 – Present",
    location: "Paris, France",
    description: "Building data pipelines and ETL processes for analytics.",
  },
  {
    title: "Data Analyst",
    org: "Company B",
    date: "2021 – 2022",
    location: "Remote",
  },
];

const education = [
  {
    title: "Master in Data Science",
    org: "University X",
    date: "2019 – 2021",
    location: "Lyon, France",
  },
  {
    title: "Bachelor in Computer Science",
    org: "University Y",
    date: "2016 – 2019",
    location: "Toulouse, France",
  },
];

const History = () => (
  <section
    id="history"
    className="scroll-mt-28 my-24 px-4 sm:px-6 max-w-5xl mx-auto"
  >
    <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
      History
    </h2>
    <div className="flex flex-col md:flex-row gap-12">
      {/* Experience */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white mb-8">
          <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Experience
        </h3>
        <Timeline items={experiences} />
      </div>
      {/* Education */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white mb-8">
          <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Education
        </h3>
        <Timeline items={education} />
      </div>
    </div>
  </section>
);

export default History;
