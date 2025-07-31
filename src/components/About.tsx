"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "Python", src: "/icons/python.svg" },
  { name: "Airflow", src: "/icons/airflow.svg" },
  { name: "Terraform", src: "/icons/terraform.svg" },
  { name: "Docker", src: "/icons/docker.svg" },
  { name: "GCP", src: "/icons/gcp.svg" },
  { name: "AWS", src: "/icons/aws.svg" },
];

/**
 * About section.
 * Shows a profile image, a short bio, a download link for the CV,
 * and a list of technologies with icons.
 */

const About = () => {
  return (
    <section
      id="about"
      className="my-20 max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center md:divide-x divide-gray-200 dark:divide-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6 md:mb-0 md:pr-8 flex-shrink-0 flex justify-center w-full md:w-1/3"
      >
        <div className="relative w-48 h-48">
          <Image
            src="/images/avatar.jpg"
            alt="Profile picture"
            fill
            className="rounded-full object-cover border-4 border-blue-600 dark:border-blue-400 shadow"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:pl-8 flex-1 text-center md:text-left"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          About me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
          {`I'm a data engineer with over 4 years of experience designing,
          building, and maintaining modern data platforms. I enjoy solving
          complex data problems, working with scalable cloud infrastructure, and
          enabling teams to make data-driven decisions through robust pipelines.`}
        </p>
        <a
          href="/cv.pdf"
          download
          className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          Download my CV
        </a>

        {/* Tech logos */}
        <div className="mt-8">
          <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Some technologies I work with:
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={36}
                  height={36}
                  className="opacity-80 hover:opacity-100 transition"
                />
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
