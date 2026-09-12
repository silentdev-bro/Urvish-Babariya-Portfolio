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
      score: "CPI: 7.53/10",
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
    "Computer Systems Programming",
    "Database Management Systems",
    "Object-Oriented Programming (OOP)",
    "Operating Systems",
    "Software Engineering",
  ],

  projects: [
    {
      name: "PharmaChain",
      stack: ["React", "Spring Boot 3", "PostgreSQL", "Spring AI", "Docker"],
      bullets: [
        "Engineered a full-stack pharmaceutical supply chain platform using React/TypeScript and a Spring Boot 3 REST API, leveraging PostgreSQL triggers to enforce strict FDA-style drug compliance.",
        "Secured endpoints via JWT authentication (5-role RBAC) with compliant e-signatures; engineered an append-only SHA-256 cryptographic audit ledger to ensure immutable record-keeping.",
        "Developed a Spring AI compliance copilot combining RAG (via pgvector & Ollama) for regulatory documents with Groq LLM tool-calling to enable natural language querying of live inventory data.",
        "Integrated IoT cold-chain telemetry for real-time monitoring, and validated database logic using Testcontainers with CI/CD pipelines managed via GitHub Actions and Docker.",
      ],
      github: "https://github.com/Urvish2007/PharmaChain-DB", 
      demo: null,
      flagship: true,
    },
    {
      name: "LatencyBook",
      stack: ["C++20", "Lock-Free Concurrency", "OS Internals"],
      bullets: [
        "Engineered a low-latency limit order book and alpha-signal engine in C++20, replacing malloc/mutex-based structures with a custom pool allocator and lock-free SPSC ring buffer, cutting allocation cost by 5.6x (9.81ns → 1.76ns) and queue push/pop latency by 36.6x (38.4ns → 1.05ns).",
        "Achieved a fully allocation-free hot path (machine-verified) with O(1) order-book operations (21.5ns add/cancel cycle) and 11.8x faster memory access via 2MB huge pages, driving a full pipeline tick-to-trade latency of 312ns (p50); validated by 40/40 tests under ThreadSanitizer and ASan/UBSan in CI."
      ],
      github: "https://github.com/Urvish2007", 
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
    "Languages": ["Java", "C", "C++/C++20", "SQL", "Python"],
    "Backend & Frameworks": ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "RESTful APIs", "Microservices"],
    "AI & Data": ["Spring AI", "LangChain", "LangGraph", "Gradio", "RAG Pipelines", "AI Agents (ReAct)"],
    "Low-Latency & Systems": ["Lock-Free Concurrency", "Multithreading", "Memory/Pool Allocators", "OS Internals", "Google Benchmark"],
    "DevOps, Tools & Testing": ["Git", "Docker", "GitHub Actions (CI/CD)", "CMake", "Maven", "JWT", "Postman", "JUnit", "GoogleTest", "Testcontainers", "ThreadSanitizer/AddressSanitizer"],
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
