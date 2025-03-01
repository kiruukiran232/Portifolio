import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="/IMG_7912_00.jpeg"
              alt="Kiran Kumar Devarapalli"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="Kiran Kumar Devarapalli"
            />

          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Kiran Kumar Devarapalli</h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A Mern-stack Developer",
                  4000,
                  "A Full-stack Developer",
                  4000,
                  "A Front-end Developer",
                  4000,
                  "A Java Developer",
                  4000,
                  "A Machine Learning Engineer",
                  4000,
                  "A Data Analyst",
                  4000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            As a full-stack developer, I am dedicated to building scalable and secure web applications that deliver high performance and seamless user experiences. With hands-on experience in MERN stack development, I specialize in React.js, Next.js, TypeScript, MongoDB, Express.js, and Node.js, ensuring robust and efficient solutions. My expertise extends beyond web development into machine learning, database management, and cybersecurity, as demonstrated in projects like the Cyber-Secured Loan Approval Prediction System, where I implemented homomorphic encryption to enhance data privacy. 
            Additionally, I have built real-time applications using Socket.io, deployed scalable solutions on Render, and developed secure banking systems using Java, Servlets, JSP, and MySQL.
              {/* Dedicated Front-end developer. Capable to solve working problems.
              Passionate about learning & development to reach the target. Eager
              to tackle more complex problems and continue to find ways to
              maximize user efficiency. */}
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            Driven by a passion for solving complex problems and staying at the forefront of technology, I continuously explore cutting-edge innovations to build impactful solutions that align with industry trends and real-world challenges.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Kiran Kumar Devarapalli
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+91-9346764205
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                kirankiruu232@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>West Godavari, Andhra Pradesh, India
              </h2>
              <a
                href="https://drive.google.com/file/d/1EMsaRvvQ6tM6dekweQBQhFg81P-B7iUG/view?usp=sharing"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>

              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
