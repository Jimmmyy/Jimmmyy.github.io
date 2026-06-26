"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const technologies = [
  { name: "Python",    src: "/icons/python.svg",    color: "bg-blue-100 dark:bg-blue-900/40" },
  { name: "Airflow",   src: "/icons/airflow.svg",   color: "bg-green-100 dark:bg-green-900/40" },
  { name: "Terraform", src: "/icons/terraform.svg", color: "bg-purple-100 dark:bg-purple-900/40" },
  { name: "Docker",    src: "/icons/docker.svg",    color: "bg-sky-100 dark:bg-sky-900/40" },
  { name: "GCP",       src: "/icons/gcp.svg",       color: "bg-orange-100 dark:bg-orange-900/40" },
  { name: "AWS",       src: "/icons/aws.svg",       color: "bg-yellow-100 dark:bg-yellow-900/40" },
];

/**
 * About section.
 * Photo casual (avatar.jpg), bio, CV download, tech badges.
 */

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="scroll-mt-20 w-full py-24 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0 md:divide-x divide-gray-200 dark:divide-gray-700">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:pr-8 flex-shrink-0 flex justify-center w-full md:w-auto"
      >
        <div className="relative w-44 h-44 sm:w-52 sm:h-52">
          <Image
            src="/images/avatar.jpg"
            alt="Jimmy Nguyen — à Taiwan"
            fill
            className="rounded-full object-cover border-4 border-blue-400 shadow-lg"
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:pl-8 flex-1 text-center md:text-left"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
          {t.about.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
          {t.about.bio}
        </p>
        <a
          href="/CV_JimmyNguyen.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 active:scale-95 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          {t.about.downloadCv}
        </a>

        {/* Tech badges */}
        <div className="mt-8">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-4 uppercase tracking-widest">
            {t.about.techTitle}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${tech.color} border border-transparent hover:border-blue-300 dark:hover:border-blue-700 transition-all`}
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="opacity-80"
                />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default About;
