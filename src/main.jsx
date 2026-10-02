import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    area: "Generative AI",
    title: "Multimodal Medical Assistant",
    subtitle: "RAG chatbot + chest X-ray classification + voice",
    description:
      "A healthcare AI system that combines computer vision, NLP and generative AI: a CNN classifies chest X-rays, a RAG chatbot answers from a custom knowledge base, and speech-to-text / text-to-speech enable voice interaction.",
    tags: ["RAG", "LLM", "CNN", "NLP", "STT / TTS"],
    featured: true,
  },
  {
    area: "Computer Vision",
    title: "ONCO-VISION",
    subtitle: "AI-assisted brain tumor visualization",
    description:
      "Turns MRI data into 3D anatomical visualizations using 3D segmentation, tumor classification, spatial AR and an uncertainty-aware safety layer.",
    tags: ["3D U-Net", "PyTorch", "MONAI", "AR"],
    featured: true,
  },
  {
    area: "Computer Vision",
    title: "Real-Time YOLO Detection",
    subtitle: "Object detection + face-recognition attendance",
    description:
      "A real-time framework using YOLO and OpenCV for multi-class object detection, extended with a face-recognition attendance workflow.",
    tags: ["YOLO", "OpenCV", "Python"],
    featured: true,
  },
  {
    area: "Other",
    title: "3D Coin Collector",
    subtitle: "Interactive 3D game in Unity & C#",
    description:
      "A 3D game with a custom environment, physics boundaries, dynamic collision boxes and score tracking.",
    tags: ["Unity", "C#", "Physics"],
    featured: true,
  },
  {
    area: "ML & Data",
    title: "Banking Transactions Intelligence",
    description:
      "A PySpark pipeline for cleaning, transforming and analyzing large banking datasets, with anomaly detection.",
    tags: ["PySpark", "Big Data"],
  },
  {
    area: "ML & Data",
    title: "NLP Spam Detection",
    description:
      "Text preprocessing and machine learning to separate spam from legitimate messages.",
    tags: ["NLP", "Scikit-learn"],
  },
  {
    area: "Computer Vision",
    title: "CIFAR-10 Image Classifier",
    description:
      "A convolutional neural network built with TensorFlow / Keras for multi-class image classification.",
    tags: ["CNN", "TensorFlow", "Keras"],
  },
  {
    area: "Computer Vision",
    title: "Facial Emotion Recognition",
    description:
      "A deep learning system that classifies emotions from facial expressions in images and video.",
    tags: ["CNN", "OpenCV"],
  },
  {
    area: "Other",
    title: "Smart Home Lighting",
    description:
      "An IoT project with sensors and microcontrollers running automated lighting rules.",
    tags: ["IoT", "Automation"],
  },
];

const services = [
  { title: "LLM Applications", text: "Chatbots, assistants and intelligent workflows powered by large language models.", tags: ["LLMs", "Prompt Engineering", "Chatbots"] },
  { title: "RAG Systems", text: "Retrieval-augmented pipelines that ground model answers in your own knowledge base.", tags: ["RAG", "Embeddings", "Knowledge Bases"] },
  { title: "Computer Vision", text: "Object detection, image classification, face recognition and 3D vision.", tags: ["YOLO", "OpenCV", "CNN"] },
  { title: "Medical AI", text: "Medical imaging and multimodal assistants for healthcare-oriented problems.", tags: ["X-Ray", "MONAI", "Medical NLP"] },
  { title: "Machine Learning", text: "End-to-end workflows from preprocessing and feature engineering to training and evaluation.", tags: ["Scikit-learn", "TensorFlow", "PyTorch"] },
  { title: "Data & Big Data", text: "Cleaning, transforming and analyzing large datasets, including anomaly detection.", tags: ["PySpark", "SQL", "Pandas"] },
];

const filters = ["All", "Generative AI", "Computer Vision", "ML & Data", "Other"];

const skillGroups = [
  { title: "Generative AI", skills: ["LLMs", "RAG", "Prompt Engineering", "LLM Integration", "Conversational AI", "Embeddings"] },
  { title: "Computer Vision", skills: ["YOLO", "OpenCV", "Image Processing", "Face Recognition", "3D Vision", "Medical Imaging"] },
  { title: "Machine & Deep Learning", skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "CNN", "NLP"] },
  { title: "Data & Big Data", skills: ["Python", "Pandas", "NumPy", "SQL", "PySpark"] },
  { title: "Cloud & Tools", skills: ["AWS ML", "Git", "GitHub", "Unity", "C#", "JavaScript"] },
];

const experience = [
  {
    year: "2026",
    title: "Cross-Platform ITI Summer Camp",
    org: "Information Technology Institute (ITI)",
    text: "Selected for structured technical training with hands-on development.",
  },
  {
    year: "2026",
    title: "Digital Egypt Pioneers Initiative",
    org: "DEPI — AWS Machine Learning",
    text: "Focused on AWS Machine Learning and practical cloud-based AI workflows.",
  },
  {
    year: "2025",
    title: "Artificial Intelligence Internship",
    org: "Arabian Academy",
    text: "Intensive AI / ML training with practical work in Python, TensorFlow, OpenCV, data preprocessing, model training and evaluation.",
  },
  {
    year: "2023 – Present",
    title: "B.Sc. Computer Science — Artificial Intelligence",
    org: "Pharos University in Alexandria",
    text: "Coursework and projects across machine learning, deep learning, computer vision, NLP, big data and software development.",
  },
];

const links = {
  github: "https://github.com/202301702-gif",
  linkedin: "https://www.linkedin.com/in/zeinab-elrify",
  email: "mailto:202301702@pua.edu.eg",
};

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText("202301702@pua.edu.eg");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email:", "202301702@pua.edu.eg");
    }
  };
  return (
    <button type="button" className="btn ghost" onClick={copy}>
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}

function SectionHead({ title, intro }) {
  return (
    <div className="sectionHead">
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.area === filter);
  const featured = shown.filter((p) => p.featured);
  const rest = shown.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <SectionHead
        title="Selected projects"
        intro="Generative AI, computer vision, data and software, from research-style prototypes to complete applications."
      />

      <div className="filters" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {featured.length > 0 && (
        <div className="featuredGrid">
          {featured.map((p) => (
            <article className="card featuredCard" key={p.title}>
              <span className="area">{p.area}</span>
              <h3>{p.title}</h3>
              <p className="sub">{p.subtitle}</p>
              <p>{p.description}</p>
              <Tags items={p.tags} />
            </article>
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="restGrid">
          {rest.map((p) => (
            <article className="card" key={p.title}>
              <span className="area">{p.area}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <Tags items={p.tags} />
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="logo">ZY</span>
          <span>Zeinab Yasser</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </nav>
        <a href="#contact" className="btn small">Contact</a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroText">
            <p className="status">
              <span className="dot" /> Open to AI internships and opportunities
            </p>
            <h1>
              I build AI systems that <em>understand</em> language, images and data.
            </h1>
            <p className="lead">
              I'm Zeinab, a Computer Science &amp; AI student at Pharos University
              in Alexandria. I work across Generative AI, LLMs, RAG, computer
              vision and machine learning, and I like turning models into
              complete, usable applications.
            </p>
            <div className="actions">
              <a href="#projects" className="btn">View projects</a>
              <a href="#contact" className="btn ghost">Get in touch</a>
            </div>
            <div className="socials">
              <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="heroPhoto">
            <img src="/zeinab.png" alt="Zeinab Yasser" />
            <ul className="chips">
              <li>LLMs &amp; RAG</li>
              <li>Computer Vision</li>
              <li>Deep Learning</li>
            </ul>
          </div>
        </section>

        <section id="about" className="section">
          <SectionHead
            title="About me"
            intro="From classical machine learning to generative AI, with a focus on building things that work end to end."
          />
          <div className="aboutGrid">
            <div className="aboutText">
              <p>
                I started with machine learning and computer vision, then moved
                toward large language models and retrieval-augmented generation.
                What I enjoy most is combining several AI components, such as a
                language model, a vision model and a knowledge base, inside one
                application.
              </p>
              <p>
                My projects cover generative AI assistants, 3D and medical
                imaging, real-time object detection, big data analytics and
                interactive software. Healthcare is one application area I've
                explored, but my interest is AI as a whole.
              </p>
            </div>
            <ul className="focus">
              <li><strong>Generative AI</strong><span>LLMs, RAG, conversational systems</span></li>
              <li><strong>Computer Vision</strong><span>Detection, classification, 3D</span></li>
              <li><strong>Machine Learning</strong><span>Pipelines from data to evaluation</span></li>
              <li><strong>Data &amp; Cloud</strong><span>PySpark, SQL, AWS ML</span></li>
            </ul>
          </div>
        </section>

        <section id="services" className="section">
          <SectionHead
            title="What I build"
            intro="The AI and software areas I work in, and what I can help with."
          />
          <div className="servicesGrid">
            {services.map((sv) => (
              <article className="card" key={sv.title}>
                <h3>{sv.title}</h3>
                <p>{sv.text}</p>
                <Tags items={sv.tags} />
              </article>
            ))}
          </div>
        </section>

        <Projects />

        <section id="skills" className="section">
          <SectionHead
            title="Skills"
            intro="The tools and concepts I use to learn, experiment and build."
          />
          <div className="skillsGrid">
            {skillGroups.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <Tags items={g.skills} />
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHead
            title="Experience & education"
            intro="Training, internships and academic work that shaped my path."
          />
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.title}>
                <span className="year">{e.year}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p className="org">{e.org}</p>
                  <p>{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="contact">
          <h2>Let's build something intelligent.</h2>
          <p>
            Interested in generative AI, LLM applications, computer vision or
            collaboration? I'd be glad to hear from you.
          </p>
          <div className="actions center">
            <a href={links.email} className="btn">Send an email</a>
            <CopyEmail />
          </div>
          <p className="emailText">202301702@pua.edu.eg</p>
          <div className="socials center">
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Zeinab Yasser</span>
        <span>Computer Science &amp; Artificial Intelligence</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);