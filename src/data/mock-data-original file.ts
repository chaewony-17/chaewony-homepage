import { Bot, Camera, Image, Cpu } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Chaewon Yang",
  greeting: "Hello, I'm Chaewon :)",
  title: "M.S. Graduate in Architectural Engineering",
  institution: "Seoul National University",
  bio: "I received my Master's degree in Architectural Engineering from Seoul National University, where I was advised by Prof. Changbum R. Ahn. My research interests are in robotic navigation and machine learning to enhance safety and efficiency in the field of construction.",
  featuredNews: {
    text: 'In May 2025, I made my first academic presentation at i3CE 2025 with the paper "Active Robot Vision with Perception-Aware Navigation for Worker Monitoring".',
    link: "#publications"
  },
  email: "chaewony@snu.ac.kr",
  phone: "+82-10-7578-1943",
  location: "39-425, Seoul National University\n1 Gwanak-ro, Gwanak-gu, Seoul, Korea 08826",
  cvLink: "https://docs.google.com/document/d/1W_OZzRfeHJns1BMMXdq74GmU2znqBCtC/edit",
  socials: {
    scholar: "https://scholar.google.co.kr/citations?hl=ko&user=Cds-RDQAAAAJ",
    github: "https://github.com/chaewony-17",
    linkedin: "https://www.linkedin.com/in/chaewon-yang-0661ab303/"
  }
};

export const RESEARCH_INTERESTS = [
  { id: 1, title: "Robotic Navigation", icon: Bot, description: "Developing autonomous navigation strategies for mobile robots operating in complex and dynamic construction environments, with a focus on safety, efficiency, and real-world deployability." },
  { id: 2, title: "Active Robot Vision", icon: Camera, description: "Designing perception-aware navigation methods that enable robots to actively acquire informative viewpoints under occlusion and uncertainty in construction monitoring scenarios." },
  { id: 3, title: "Image & Language Understanding", icon: Image, description: "Exploring image-based scene understanding to capture the visual context of construction activities, with the goal of improving reasoning about worker behavior and task progress." },
  { id: 4, title: "Embodied AI", icon: Cpu, description: "Building integrated perception-action systems where robots can reason about incomplete visual information and plan actions to obtain task-relevant observations in real-world environments." },
];

export const PUBLICATIONS = [
  {
    id: 1,
    title: "Active Robot Vision with Perception-Aware Navigation for Worker Monitoring",
    authors: "Yang C., Park J., Park, M., Ahn, C. R.",
    venue: "Proceedings of the 2025 ASCE International Conference on Computing in Civil Engineering (i3CE 2025)",
    year: "2025",
    abstract: "This paper presents a perception-aware navigation framework that enables a mobile robot to actively optimize its viewpoint for worker monitoring on construction sites, improving visibility and monitoring coverage.",
    image: "/images/pub-1.png",
    links: { pdf: "papers/active-robot-vision.pdf", scholar: "https://scholar.google.co.kr/scholar?oi=bibs&cluster=17987844590995390699&btnI=1&hl=ko" }
  },
  {
    id: 2,
    title: "Reinforcement Learning-Based Navigation for Monitoring Personal Protective Equipment in Occluded Environments",
    authors: "Yang, C., Park, J., Park, M., Ahn, C. R.",
    venue: "The 2025 Spring Annual Conference of Architectural Institute of Korea (AIK) — Excellent Paper Award",
    year: "2025",
    abstract: "We propose a reinforcement learning-based robot navigation strategy for detecting and monitoring PPE compliance in occluded construction environments, enabling proactive safety management.",
    image: "/images/project-2.png",
    links: { pdf: "papers/rl-navigation-ppe.pdf", url: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE12169703" }
  },
  {
    id: 3,
    title: "Analysis of On-Site Utilization of the Hazard and Risk Prevention Plan System in the Construction Industry",
    authors: "Ji, J., Won, J., Shin, S., Yoo, B., Yang, C., Lee, C., Park, M., Ahn, C. R.",
    venue: "Journal of Korea Institute of Construction Safety, Vol.7(2), pp.25-30",
    year: "2024",
    abstract: "This study analyzes the on-site utilization and effectiveness of the Hazard and Risk Prevention Plan (HRPP) system across construction projects in Korea, identifying practical barriers and opportunities for improvement.",
    links: { pdf: "papers/hazard-risk-prevention.pdf", url: "https://scholar.kyobobook.co.kr/article/detail/4040070607873" }
  }
];

export const PROJECTS = [
  {
    id: 1,
    slug: "active-robot-vision",
    title: "Self-Aware Active Perception and Navigation in Occluded Environments",
    description: "A self-aware active perception framework that integrates VLM-based visual reasoning with uncertainty-driven navigation, enabling a mobile robot to evaluate worker lifeline states and actively seek better viewpoints when observations are unreliable.",
    image: "/images/project-1.png",
    tags: ["Python", "PyTorch", "VLMs", "SAM", "CLIP", "Next-Best-View"],
    links: {},
    details: {
      overview: "This project presents a self-aware active perception framework for worker safety monitoring in occluded construction environments. By integrating VLM-based visual reasoning with uncertainty-driven navigation, the framework enables a mobile robot to evaluate worker lifeline connection states and actively seek better viewpoints when the current observation is not reliable enough for decision-making.",
      motivation: "Construction-site monitoring is frequently hindered by occlusion, limited viewpoints, and reduced visual clarity at longer distances. Although prior studies have improved visibility through active sensing, they have not sufficiently addressed whether the visual evidence is reliable enough for safety-critical interpretation. This limitation is especially important in tasks such as lifeline inspection, where ambiguous observations should lead to cautious reasoning rather than overconfident classification.",
      methodology: "The framework first uses a VLM-based reasoning module to interpret visual evidence related to worker lifeline connection, while explicitly estimating perceptual uncertainty. Human annotation data are used to characterize viewpoint-dependent ambiguity and to assess whether the model's uncertainty behavior is aligned with human perception. When the observation remains inconclusive, an uncertainty-aware NBV planner selects a new viewpoint by considering semantic relevance, expected information gain, and motion cost, allowing the robot to iteratively reduce uncertainty through active repositioning.",
      results: "The proposed method improved both reasoning reliability and navigation performance. The VLM-based reasoning module substantially outperformed the prompt-only baseline and showed appropriate abstention behavior under ambiguous conditions. In addition, the uncertainty-driven NBV strategy achieved higher success in resolving uncertain observations than the RL-based comparison method. These findings support the effectiveness of combining self-aware reasoning with active viewpoint selection for more reliable construction safety monitoring.",
      venue: "M.S. Thesis — Seoul National University (in preparation)",
      tools: ["Python", "PyTorch", "Unity", "Vision-Language Models (VLMs)", "Segment Anything Model (SAM)", "CLIP", "Next-Best-View"],
      inProgress: true
    }
  },
  {
    id: 2,
    slug: "rl-navigation-ppe",
    title: "RL-Based Navigation for PPE Monitoring",
    description: "A reinforcement learning framework that trains a mobile robot to navigate through occluded construction environments and detect workers lacking proper Personal Protective Equipment (PPE), enhancing on-site safety.",
    image: "/images/project-2.png",
    tags: ["PyTorch", "Reinforcement Learning", "ROS", "Gazebo", "Unity", "Python"],
    links: { paper: "papers/active-robot-vision.pdf" },
    details: {
      overview: "This project develops a mobile robot-based active vision system for worker safety monitoring in occluded construction environments. The robot learns to reposition itself to reduce occlusion and keep monitoring targets, such as PPE-related cues and lifelines, within a reliable detection field rather than simply maximizing angular coverage.",
      motivation: "Fixed camera systems on construction sites often suffer from occlusion and limited viewpoints, reducing detection reliability. Prior active monitoring research improved visibility mainly by expanding observation angles, but it did not fully account for whether the target remained within the robot's reliable detection range or whether the resulting robot-worker distance was appropriate for safe and non-intrusive monitoring.",
      methodology: "The project uses deep reinforcement learning with PPO to train a mobile robot navigation policy in a simulated construction environment. A perception-aware detection field is incorporated into both the state space and reward design so that the robot learns to move around workers, avoid obstacles, maintain target visibility, and balance detection performance with worker-robot proxemics.",
      results: "The proposed detection field models consistently outperformed the prior baseline in detecting lifelines under occlusion. In the initial study, the short-range detection field achieved the best success rate (0.80 vs. 0.42 baseline) with more efficient trajectories. In the extended study, multiple field configurations revealed a trade-off: shorter fields improved detection reliability, while larger fields increased worker distance and comfort but reduced success rates. These findings show that optimizing the detection field is key to balancing perception performance, navigation efficiency, and safe human-robot interaction.",
      venue: "i3CE 2025 & AIK 2025 Spring Conference (Excellent Paper Award)",
      tools: ["Python", "PyTorch", "ROS", "Gazebo", "Unity", "ML-agents", "PPO", "Open3D"],
      pdfs: [
        { label: "i3CE 2025 Paper", path: "papers/active-robot-vision.pdf" },
        { label: "AIK 2025 Paper", path: "papers/rl-navigation-ppe.pdf" }
      ]
    }
  }
];

export const NEWS = [
  { id: 0, date: "Feb 2026", content: '🎓 Graduated with M.S. in Architectural Engineering from Seoul National University (GPA 4.18/4.3). Thesis: "Context-aware Robot Navigation for Resolving Perceptual Uncertainty in Construction Environments".' },
  { id: 1, date: "May 2025", content: '🎤 Made my first academic presentation at i3CE 2025 (ASCE International Conference on Computing in Civil Engineering) in New Orleans, Louisiana with the paper "Active Robot Vision with Perception-Aware Navigation for Worker Monitoring".' },
  { id: 2, date: "Apr 2025", content: '🏆 Received the Excellent Paper Award at the 2025 Spring Annual Conference of the Architectural Institute of Korea (AIK) for "Reinforcement Learning-Based Navigation for Monitoring Personal Protective Equipment in Occluded Environments".' },
  { id: 3, date: "Mar 2024", content: "📚 Started the M.S. program in Architectural Engineering at Seoul National University under the supervision of Prof. Changbum R. Ahn." },
  { id: 4, date: "Feb 2024", content: "🎓 Graduated Summa Cum Laude (GPA 4.33/4.50) with a B.S. in Architecture and Building Science from Chung-Ang University." },
  { id: 5, date: "2023", content: '🥇 Received the Grand Award in the "Chung-Ang Architecture Exhibition 2023" for the project: BIM-enabled Detection of Dynamic Blind Spots for Construction Worker Safety.' },
];
