import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiDatabase, FiServer } from "react-icons/fi";
import { FaJava, FaBrain } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Front End Development",
      icon: <DiAtom />,
      description:
        "As a Front-end developer, I would love to develope any front-end application using React and its libraries.",
    },
    {
      id: 2,
      title: "MERN Development",
      icon: <FiServer />,
      description:
        "I am very familiar with NodeJS, Express JS, and MongoDB/Mongoose. So I can build full-stack application with MERN.",
    },
    {
      id: 3,
      title: "Web Design",
      icon: <BiPalette />,
      description:
        "I also provide Fully Responsive Static Website Design with HTML, CSS, Bootstrap, Tailwind.",
    },
    {
      id: 4,
      title: "Java Developer",
      icon: <FaJava />,
      description:
        "I am a Java Developer specializing in building scalable applications using Java, Spring Boot, and Hibernate.",
    },
    {
      id: 5,
      title: "Machine Learning Engineer",
      icon: <FaBrain />,
      description:
        "I specialize in building and deploying Machine Learning models, optimizing algorithms, and developing AI-driven solutions. My expertise includes Python, TensorFlow, PyTorch, Scikit-learn, and cloud-based ML deployment. I work with data preprocessing, feature engineering, model training, and API integration to deliver intelligent, scalable solutions.",
    },
    {
      id: 6,
      title: "Data Analyst",
      icon: <MdAnalytics />,
      description:
        "I specialize in Data Analysis, providing insights through data visualization, statistical analysis, and business intelligence tools. Proficient in SQL, Python, Excel, and Power BI, I transform raw data into actionable insights to drive decision-making.",
    },
    {
      id: 7,
      title: "Database Management",
      icon: <FiDatabase />,
      description:
        "Connecting Web Database to the server. Fixing All kinds of issue with related to database with database advanced operators.",
    },
    // {
    //   id: 4,
    //   title: "Web Management",
    //   icon: <FiServer />,
    //   description:
    //     "I will manage any kinds of website. Data Management, Component management, Service management and so on.",
    // },
    // {
    //   id: 5,
    //   title: "Backend Development",
    //   icon: <FiServer />,
    //   description:
    //   "MVC Architectural Backend Development with Mongoose (Schema, Model etc) to manage the server easily.",
    // },
    // {
    //   id: 6,
    //   title: "Database Management",
    //   icon: <FiServer />,
    //   description:
    //     "Connecting Web Database to the server. Fixing All kinds of issue with related to database with database advanced operators.",
    // },
  ];
  return (
    <div className="py-20 parent"
    // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-accent shadow-lg"
              : "bg-[#313131] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
