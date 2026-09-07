export const resume = {
  name: "Urvish Babariya",
  role: "B.Tech – Information and Communication Technology",
  email: "urvishbabariya.work.07@gmail.com",
  linkedin: "https://linkedin.com/in/urvish-babariya",
  github: "https://github.com/Urvish2007",
  roles: [
    "Backend Developer",
    "AI & RAG Engineer",
    "Competitive Programmer",
  ],

  education: [
    {
      school: "Dhirubhai Ambani University",
      degree: "B.Tech in Information and Communication Technology",
      score: null,
      period: "2024 – Present",
      location: "Gandhinagar, Gujarat",
    },
    {
      school: "Gaytri Vidhya Mandir (GHSEB) — 12th Grade",
      degree: null,
      score: "98% (99.81 PR) · GUJCET 116.25/120 (99.82 PR)",
      period: "2023 – 2024",
      location: "Ahmedabad, Gujarat",
    },
    {
      school: "Uma Vidhyalya (GSEB) — 10th Grade",
      degree: null,
      score: "94.50% (99.72 PR)",
      period: "2021 – 2022",
      location: "Ahmedabad, Gujarat",
    },
  ],

  coursework: [
    "Data Structures",
    "Design & Analysis of Algorithms",
    "Computer Networks",
    "Computer Systems Programming",
    "Database Management Systems",
    "Object-Oriented Programming (OOP)",
    "Software Engineering",
  ],

  projects: [
    {
      name: "PharmaChain",
      stack: ["Spring Boot", "PostgreSQL", "Spring Security", "Spring AI", "Docker"],
      bullets: [
        "Architected an enterprise-grade, 3-tier pharmaceutical supply chain backend using Spring Boot, replacing application-level checks with impenetrable PostgreSQL triggers to strictly enforce FDA compliance rules.",
        "Integrated an AI Compliance Copilot via Spring AI, combining local Ollama embeddings and pgvector for RAG-based live-database Q&A and automated regulatory recall generation.",
        "Secured 100+ REST endpoints with JWT and 6-role RBAC, while maintaining an immutable, SHA-256 cryptographic audit ledger directly in the database.",
        "Established CI/CD pipelines via GitHub Actions and Testcontainers, leading architecture reviews that resolved critical JPA data-integrity defects.",
      ],
      github: "https://github.com/Urvish2007/PharmaChain-DB", 
      demo: null,
      flagship: true,
    },
    {
      name: "Classic Tetris Game",
      stack: ["C++", "OOP", "Data Structures", "Windows API"],
      bullets: [
        "Engineered a fully playable, terminal-based Tetris game in C++ utilizing the Windows Console API for dynamic cursor manipulation, real-time keyboard polling, and color rendering.",
        "Designed a robust OOP architecture featuring independent Tetromino and GameState classes to cleanly manage 2D matrix rotations, collision detection, and dynamic grid updates.",
        "Implemented a scalable game loop with precise timing (`<chrono>`) and progressive difficulty scaling based on score thresholds and lines cleared.",
      ],
      github: "https://github.com/Urvish2007/OOPs-Classic-Tetris-Game", 
      demo: null,
      flagship: false,
    },
    {
      name: "CodeMentor-PRO",
      stack: ["Python", "Gradio", "Groq LLM", "Judge0", "ChromaDB"],
      bullets: [
        "Built an execution-verified AI coding mentor that actively runs submitted code in local sandboxes (Python) and remote Judge0 environments (C++/Java/JS) to decisively catch runtime errors rather than relying on LLM hallucinations.",
        "Engineered a persistent weakness-tracking system using ChromaDB to profile users' historical submissions, automatically identifying structural patterns in their syntax or logic errors.",
        "Developed a responsive Gradio UI featuring screenshot-to-code OCR (Groq Vision), level-adaptive explanations (Beginner to Expert), and logic-preserving code cleanups backed by strict equivalence verification.",
      ],
      github: "https://github.com/Urvish2007/CodeMentor-PRO-Adaptive-Code-Explainer", 
      demo: "https://huggingface.co/spaces/Urvxshhhhh0201/CodeMentor-PRO",
      flagship: false,
    },
  ],

  skills: {
    "Languages": ["Java", "C", "C++", "SQL", "Python"],
    "Backend & Frameworks": ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "RESTful APIs", "Microservices"],
    "AI & Data": ["Spring AI", "LangChain", "LangGraph", "Gradio", "RAG Pipelines", "AI Agents (ReAct)"],
    "DevOps, Tools & Testing": ["Git", "Docker", "GitHub Actions (CI/CD)", "Maven", "JWT", "Postman", "JUnit", "Testcontainers"],
    "Databases": ["PostgreSQL", "MySQL", "pgvector", "ChromaDB (Vector DB)"],
    "Soft Skills": ["Team Collaboration", "Leadership", "Problem Solving", "Communication"],
  },

  leadership: [
    {
      role: "Campus Ambassador",
      org: "GeeksforGeeks x DAIICT",
      period: "Jan 2026 – Jun 2026",
      detail: "Organized guidance sessions to boost platform awareness and student engagement.",
    },
    {
      role: "Social Work Intern",
      org: "Shree Krishnam Foundation",
      period: "Dec 2025",
      detail: "Mentored rural students in Mathematics and English; coordinated community health surveys and medical camps.",
    },
    {
      role: "Club Member",
      org: "Electronics Hobby Club",
      period: "Apr 2025 – Present",
      detail: "Led hands-on workshops on foundational electronics, embedded systems, and Arduino projects.",
    },
    {
      role: "Coordinator",
      org: "Synapse'25",
      period: "Feb 2025",
      detail: "Directed core event logistics: guest relations, stage operations, and cross-team communication.",
    },
  ],

  achievements: [
    { label: "Codeforces", value: "Pupil · Max 1360", link: "https://codeforces.com/profile/vinishhhh7" }, 
    { label: "CodeChef", value: "3-Star · Max 1612", link: "https://www.codechef.com/users/silentub34" }, 
    { label: "LeetCode", value: "Knight · Max 1956", link: "https://leetcode.com/u/Urvish_Babariya/" }, 
    { label: "Problems Solved", value: "1800+", link: "#" }, 
    { label: "Code C Blind 2024 & Code Relay 2025", value: "1st Runner-Up", link: null },
    { label: "GUJCET / Board 2024", value: "99.82 Percentile — Top 0.18% of 1.37 lakh students", link: null },
    { label: "12th Science, Gujarat", value: "All-Gujarat Rank 50", link: null },
    { label: "Microsoft Student Technical Club Gen-AI Hackathon", value: "2nd Runner-Up", link: null },
  ],
};
