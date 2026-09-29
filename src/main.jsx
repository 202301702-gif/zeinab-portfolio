import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* =====================================================
   PROJECTS
===================================================== */

const projects = [
  {
    title: "SafeSphere AI",
    subtitle: "AI-Powered Smart Personal Safety Ecosystem",
    description:
      "My current graduation project: an intelligent personal safety ecosystem designed to detect potential risks before incidents happen. It combines computer vision, trajectory analysis, contextual risk scoring, GPS-based safe routing, voice interaction, and an emergency response workflow.",
    tags: [
      "Python",
      "Computer Vision",
      "YOLO",
      "Tracking",
      "AI Agents",
      "RAG",
      "GPS",
    ],
    featured: true,
    category: "GRADUATION PROJECT",
    link: "#",
  },

  {
    title: "Medical AI Assistant",
    subtitle: "X-Ray Analysis + RAG + Voice Assistant",
    description:
      "A healthcare AI system combining medical image classification with an intelligent assistant. The project includes an X-ray disease classifier, RAG-based medical question answering, chatbot interaction, and voice-based communication.",
    tags: [
      "Python",
      "TensorFlow",
      "CNN",
      "RAG",
      "NLP",
      "Voice AI",
    ],
    category: "AI & HEALTHCARE",
    link: "#",
  },

  {
    title: "Facial Emotion Recognition",
    subtitle: "Deep Learning for Real-Time Emotion Detection",
    description:
      "A deep learning computer vision project for classifying facial expressions into seven emotion classes. The project explores CNN and MobileNetV2 approaches with real-time webcam detection.",
    tags: [
      "Python",
      "TensorFlow",
      "CNN",
      "MobileNetV2",
      "OpenCV",
    ],
    category: "COMPUTER VISION",
    link: "#",
  },

  {
    title: "Spam Email Classifier",
    subtitle: "Machine Learning Text Classification",
    description:
      "A machine learning project for detecting spam messages using TF-IDF feature extraction and classification models.",
    tags: [
      "Python",
      "Machine Learning",
      "TF-IDF",
      "Naive Bayes",
      "NLP",
    ],
    category: "MACHINE LEARNING",
    link: "#",
  },

  {
    title: "YOLO Object Detection",
    subtitle: "Real-Time Computer Vision",
    description:
      "A real-time object detection application using YOLO and OpenCV to identify and track objects in visual input such as images and video.",
    tags: [
      "Python",
      "YOLO",
      "OpenCV",
      "Computer Vision",
    ],
    category: "COMPUTER VISION",
    link: "#",
  },

  {
    title: "Banking Transactions Intelligence System",
    subtitle: "Big Data Analytics with PySpark",
    description:
      "A data engineering and analytics project that processes banking transaction data using PySpark to extract meaningful patterns, insights, and transaction intelligence.",
    tags: [
      "Python",
      "PySpark",
      "Big Data",
      "Data Analysis",
    ],
    category: "DATA & BIG DATA",
    link: "#",
  },

  {
    title: "Face Recognition & Attendance",
    subtitle: "Automated Identification System",
    description:
      "A computer vision application designed to recognize registered faces and support automated attendance management using facial recognition techniques.",
    tags: [
      "Python",
      "OpenCV",
      "Face Recognition",
      "Computer Vision",
    ],
    category: "COMPUTER VISION",
    link: "#",
  },

  {
    title: "Stroke Prediction",
    subtitle: "Healthcare Risk Prediction",
    description:
      "A supervised machine learning project that analyzes patient-related features to predict stroke risk and explore factors associated with the prediction.",
    tags: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
    ],
    category: "MACHINE LEARNING",
    link: "#",
  },

  {
    title: "IMDB Sentiment Analysis",
    subtitle: "Natural Language Processing",
    description:
      "An NLP project that analyzes movie reviews and classifies their sentiment using text preprocessing and machine learning techniques.",
    tags: [
      "Python",
      "NLP",
      "Text Classification",
      "Machine Learning",
    ],
    category: "NLP",
    link: "#",
  },

  {
    title: "CIFAR-10 Image Classification",
    subtitle: "Convolutional Neural Network",
    description:
      "A deep learning project using convolutional neural networks to classify images from the CIFAR-10 dataset into multiple object categories.",
    tags: [
      "Python",
      "TensorFlow",
      "CNN",
      "Deep Learning",
    ],
    category: "DEEP LEARNING",
    link: "#",
  },

  {
    title: "ESP32 Smart Lighting House",
    subtitle: "IoT-Based Smart Home System",
    description:
      "An embedded systems project using ESP32, sensors, relays, and LEDs to create an automated smart lighting environment.",
    tags: [
      "ESP32",
      "IoT",
      "Sensors",
      "Embedded Systems",
    ],
    category: "IOT",
    link: "#",
  },

  {
    title: "FitTrack",
    subtitle: "Mobile Fitness Application",
    description:
      "A mobile application project focused on fitness tracking, structured interfaces, and practical user-centered functionality.",
    tags: [
      "React Native",
      "JavaScript",
      "Mobile Development",
      "UI/UX",
    ],
    category: "SOFTWARE",
    link: "https://github.com/202301702-gif/FitTrack",
  },
];


/* =====================================================
   SERVICES
===================================================== */

const services = [
  {
    number: "01",
    icon: "AI",
    title: "AI & Machine Learning",
    description:
      "Building machine learning and deep learning solutions for prediction, classification, pattern recognition, and intelligent decision-making.",
    tags: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
    ],
  },

  {
    number: "02",
    icon: "CV",
    title: "Computer Vision",
    description:
      "Developing computer vision solutions for image classification, object detection, face recognition, emotion recognition, and visual analysis.",
    tags: [
      "YOLO",
      "OpenCV",
      "CNN",
    ],
  },

  {
    number: "03",
    icon: "NLP",
    title: "NLP & Generative AI",
    description:
      "Creating intelligent text-based systems including NLP applications, RAG pipelines, chatbots, and AI assistants.",
    tags: [
      "NLP",
      "RAG",
      "LangChain",
    ],
  },

  {
    number: "04",
    icon: "DATA",
    title: "Data Analysis & Big Data",
    description:
      "Cleaning, analyzing, transforming, and processing data to discover useful patterns and generate meaningful insights.",
    tags: [
      "Pandas",
      "NumPy",
      "PySpark",
    ],
  },

  {
    number: "05",
    icon: "APP",
    title: "AI-Powered Applications",
    description:
      "Turning AI models and ideas into practical applications with user-focused interfaces and useful digital experiences.",
    tags: [
      "Python",
      "React Native",
      "APIs",
    ],
  },

  {
    number: "06",
    icon: "IoT",
    title: "IoT & Smart Systems",
    description:
      "Developing smart system prototypes using microcontrollers, sensors, automation, and intelligent control workflows.",
    tags: [
      "ESP32",
      "IoT",
      "Sensors",
    ],
  },
];


/* =====================================================
   SKILLS
===================================================== */

const skills = [
  "Python",
  "C#",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "YOLO",
  "RAG",
  "AI Agents",
  "LangChain",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "PySpark",
  "SQL",
  "Git & GitHub",
  "React Native",
  "ESP32",
  "IoT",
];


/* =====================================================
   APP
===================================================== */

function App() {
  return (
    <div className="site">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="nav">

        <a className="brand" href="#home">
          <span>Z</span>
          ZY.
        </a>

        <div className="navLinks">

          <a href="#about">
            About
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <a
          className="navCta"
          href="#contact"
        >
          Let's Talk
          <span>↗</span>
        </a>

      </nav>


      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          id="home"
          className="hero section"
        >

          <div className="heroCopy">

            <div className="eyebrow">

              <span className="dot"></span>

              AI ENGINEER • MACHINE LEARNING • COMPUTER VISION

            </div>


            <h1>

              Building{" "}

              <span>
                intelligent
              </span>{" "}

              solutions for real-world problems.

            </h1>


            <p className="lead">

              I'm Zeinab Yasser, a Computer Science &
              Artificial Intelligence student passionate
              about Artificial Intelligence, Machine Learning,
              Computer Vision, NLP, and building practical
              technology that creates real-world impact.

            </p>


            <div className="heroButtons">

              <a
                className="primaryBtn"
                href="#projects"
              >
                Explore My Work
                <span>↗</span>
              </a>


              <a
                className="secondaryBtn"
                href="#contact"
              >
                Contact Me
              </a>

            </div>


            {/* SOCIAL LINKS */}

            <div className="socials">

              <a
                href="https://github.com/202301702-gif"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  GH
                </span>

                GitHub
              </a>


              <a
                href="https://www.linkedin.com/in/zeinab-elrify"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  in
                </span>

                LinkedIn
              </a>


              <a
                href="mailto:202301702@pua.edu.eg"
              >
                <span>
                  @
                </span>

                Email
              </a>

            </div>

          </div>


          {/* =================================================
              PROFILE PHOTO
          ================================================= */}

          <div className="portraitWrap">

            <div className="orbit orbit1"></div>

            <div className="orbit orbit2"></div>


            <div className="portraitCard">

              <div className="portraitPlaceholder">

                <img
                  src="/zeinab.png"
                  alt="Zeinab Yasser"
                  className="profilePhoto"
                />

                <p>
                  ZEINAB YASSER
                </p>

                <small>
                  AI & MACHINE LEARNING
                </small>

              </div>


              <div className="floatingTag tag1">
                AI / ML
              </div>


              <div className="floatingTag tag2">
                COMPUTER VISION
              </div>


              <div className="floatingTag tag3">
                PYTHON
              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="section about"
        >

          <div className="sectionLabel">
            01 — ABOUT ME
          </div>


          <div className="aboutGrid">

            <div>

              <h2>

                Turning curiosity

                <br />

                into{" "}

                <span>
                  intelligent systems.
                </span>

              </h2>

            </div>


            <div className="aboutText">

              <p>

                I'm a Computer Science &
                Artificial Intelligence student
                with a strong interest in Artificial
                Intelligence, Machine Learning
                and Computer Vision.

              </p>


              <p>

                Through academic projects and
                practical training, I've worked
                on machine learning models,
                deep learning, computer vision,
                NLP, data analysis, IoT and
                mobile applications.

              </p>


              <p>

                My goal is to grow as an AI Engineer
                and build intelligent solutions that
                are not only technically strong,
                but also useful in the real world.

              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            SERVICES
        ================================================= */}

        <section
          id="services"
          className="section servicesSection"
        >

          <div className="sectionTop">

            <div>

              <div className="sectionLabel">
                02 — SERVICES
              </div>


              <h2>

                What I can{" "}

                <span>
                  build.
                </span>

              </h2>

            </div>


            <p className="sectionHint">

              AI-focused solutions combining
              machine learning, software development,
              data and practical problem solving.

            </p>

          </div>


          <div className="servicesGrid">

            {services.map(
              (service) => (

                <article
                  className="serviceCard"
                  key={service.number}
                >

                  <div className="serviceTop">

                    <span className="serviceNumber">
                      {service.number}
                    </span>


                    <span className="serviceIcon">
                      {service.icon}
                    </span>

                  </div>


                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.description}
                  </p>


                  <div className="serviceTags">

                    {service.tags.map(
                      (tag) => (

                        <span key={tag}>
                          {tag}
                        </span>

                      )
                    )}

                  </div>

                </article>

              )
            )}

          </div>

        </section>


        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          id="projects"
          className="section"
        >

          <div className="sectionTop">

            <div>

              <div className="sectionLabel">
                03 — SELECTED WORK
              </div>


              <h2>

                Things I've{" "}

                <span>
                  built.
                </span>

              </h2>

            </div>


            <p className="sectionHint">

              AI, Machine Learning, Computer Vision,
              NLP, Data and Software projects.

            </p>

          </div>


          <div className="projectGrid">

            {projects.map(
              (project, index) => (

                <article
                  key={project.title}
                  className={`project ${
                    project.featured
                      ? "featured"
                      : ""
                  }`}
                >

                  {/* PROJECT VISUAL */}

                  <div className="projectVisual">

                    <div className="projectNumber">

                      {String(
                        index + 1
                      ).padStart(2, "0")}

                    </div>


                    <div className="projectIcon">

                      {project.featured
                        ? "AI"
                        : project.category ===
                          "COMPUTER VISION"
                        ? "CV"
                        : project.category ===
                          "NLP"
                        ? "NLP"
                        : project.category ===
                          "DATA & BIG DATA"
                        ? "DATA"
                        : project.category ===
                          "IOT"
                        ? "IOT"
                        : project.category ===
                          "SOFTWARE"
                        ? "APP"
                        : "ML"}

                    </div>


                    <div className="visualGrid"></div>


                    <div className="projectCategory">

                      {project.category}

                    </div>


                    {project.featured && (

                      <div className="featuredBadge">

                        GRADUATION PROJECT

                      </div>

                    )}

                  </div>


                  {/* PROJECT CONTENT */}

                  <div className="projectBody">

                    <h3>
                      {project.title}
                    </h3>


                    <h4>
                      {project.subtitle}
                    </h4>


                    <p>
                      {project.description}
                    </p>


                    <div className="tags">

                      {project.tags.map(
                        (tag) => (

                          <span key={tag}>
                            {tag}
                          </span>

                        )
                      )}

                    </div>


                    {project.link !== "#" ? (

                      <a
                        className="textBtn"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >

                        View Project

                        <span>
                          ↗
                        </span>

                      </a>

                    ) : (

                      <span className="textBtn disabledBtn">

                        Project Details

                        <span>
                          →
                        </span>

                      </span>

                    )}

                  </div>

                </article>

              )
            )}

          </div>

        </section>


        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="section skillsSection"
        >

          <div className="sectionLabel">
            04 — TECHNICAL SKILLS
          </div>


          <div className="skillsHeader">

            <h2>

              My technical{" "}

              <span>
                toolkit.
              </span>

            </h2>


            <p>

              Technologies, frameworks and tools
              I've worked with across my projects.

            </p>

          </div>


          <div className="skillsCloud">

            {skills.map(
              (skill) => (

                <div
                  className="skill"
                  key={skill}
                >

                  {skill}

                </div>

              )
            )}

          </div>

        </section>


        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section
          id="experience"
          className="section experience"
        >

          <div className="sectionLabel">
            05 — EXPERIENCE & EDUCATION
          </div>


          <div className="timeline">

            {/* UNIVERSITY */}

            <div className="timelineItem">

              <span className="year">
                2023 — Present
              </span>


              <div>

                <h3>
                  B.Sc. Computer Science &
                  Artificial Intelligence
                </h3>


                <p>
                  Pharos University in Alexandria
                </p>


                <span>

                  Artificial Intelligence major
                  with a focus on machine learning,
                  deep learning, computer vision,
                  software development and data.

                </span>

              </div>

            </div>


            {/* DEPI */}

            <div className="timelineItem">

              <span className="year">
                2026
              </span>


              <div>

                <h3>
                  DEPI — Machine Learning Engineering
                </h3>


                <p>
                  AWS Machine Learning Track
                </p>


                <span>

                  Training covering Prompt Engineering,
                  AWS Data Engineering, ML Foundations,
                  NLP, Generative AI and practical
                  machine learning applications.

                </span>

              </div>

            </div>


            {/* CIB */}

            <div className="timelineItem">

              <span className="year">
                2026
              </span>


              <div>

                <h3>
                  CIB Summer Training
                </h3>


                <p>
                  Banking & Technology Exposure
                </p>


                <span>

                  Professional training experience
                  with exposure to the banking and
                  technology environment.

                </span>

              </div>

            </div>


            {/* CREATIVA */}

            <div className="timelineItem">

              <span className="year">
                2026
              </span>


              <div>

                <h3>
                  CREATIVA — From Idea to Execution
                </h3>


                <p>
                  Innovation & Entrepreneurship
                </p>


                <span>

                  Program focused on transforming
                  ideas into validated prototypes
                  and practical MVP concepts.

                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="contact section"
        >

          <div className="contactBox">

            <div className="sectionLabel">
              06 — CONTACT
            </div>


            <h2>

              Let's build

              <br />

              <span>
                something intelligent.
              </span>

            </h2>


            <p>

              I'm open to opportunities,
              collaborations, internships and
              projects related to Artificial
              Intelligence and Machine Learning.

            </p>


            <div className="contactButtons">

              <a
                className="primaryBtn"
                href="mailto:202301702@pua.edu.eg"
              >

                Email Me

                <span>
                  ✉
                </span>

              </a>


              <a
                className="secondaryBtn"
                href="https://www.linkedin.com/in/zeinab-elrify"
                target="_blank"
                rel="noreferrer"
              >

                LinkedIn

                <span>
                  ↗
                </span>

              </a>

            </div>


            <div className="contactEmail">

              202301702@pua.edu.eg

            </div>

          </div>

        </section>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <span>
          © 2026 Zeinab Yasser
        </span>


        <span>
          AI • ML • Computer Vision • NLP
        </span>


        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}


/* =====================================================
   RENDER
===================================================== */

createRoot(
  document.getElementById("root")
).render(
  <App />
);