export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  github?: string;
  demo?: string;
  hidden?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DealScout",
    description: "Chrome Extension for real estate listing analysis",
    technologies: ["Gemini", "Nextplace.ai"],
    details: [
      "Developed a Chrome extension to evaluate ROI of Zillow property listings by scraping real estate data, computing valuations with Nextplace.ai, and integrating with Gemini LLM",
      "Secured $27K+ in grant funding by presenting at the 2025 Bittensor Endgame Summit, highlighting its value for decentralized real estate intelligence",
      "Integrated Gemini to power an in-extension chat interface offering further property insights using scraped listing data",
    ],
    github: "https://github.com/gurubazawada/extension",
  },
  {
    id: 2,
    title: "Pennstagram",
    description: "Instagram clone + RAG chatbot — NETS 2120 final project",
    technologies: [
      "React",
      "Node/Express",
      "AWS S3",
      "AWS EMR",
      "AWS EC2",
      "ChromaDB",
      "Apache Kafka",
      "Apache Spark",
      "Langchain.js",
      "Docker",
    ],
    details: [
      "Built a scalable Instagram-style web app with React supporting real-time social feed using Kafka, hosting backend services on EC2 with Docker, image upload to S3, and RAG chatbot by integrating Langchain",
      "Enabled efficient personalized content ranking using Spark-based adsorption algorithm by processing graph data on Apache Spark and streaming updates with Kafka",
    ],
  },
  {
    id: 3,
    title: "Lucidity",
    description: "Chrome Extension using ML to block unproductive websites",
    technologies: ["HTML/JS/CSS", "Node.js", "NumPy", "Pandas", "NLTK"],
    details: [
      "Developed a Chrome Extension with Node.js backend to block unproductive websites, boosting student productivity by 24%",
      "Built ML model to classify websites based on textual content using TF-IDF with NumPy, Pandas, and NLTK",
      "Deployed and piloted at Los Altos Christian Schools, leading to a provisional patent application (No. 63005219)",
      "Awarded City of Palo Alto's Thinkfund Grant, Conrad Challenge International Finalist, Diamond Challenge Regional Semi-Finalist",
    ],
    github: "https://github.com/Neontus/Lucidity_Extension",
    demo: "https://lucidity.ninja",
  },
  {
    id: 4,
    title: "Taurus",
    description: "Chrome extension injecting Polymarket prediction markets into X/Twitter",
    technologies: ["React", "Vite", "Fastify", "TypeScript", "OpenAI", "Polymarket"],
    details: [
      "Built a Chrome extension (Manifest V3) using React + Vite that injects real-time Polymarket prediction market widgets into X.com tweets via Shadow DOM for full style isolation",
      "Built a Fastify/TypeScript backend with hybrid tweet-to-market matching using 40% keyword + 60% semantic scoring, trade execution via Polymarket CLOB, and page-level AI insights powered by GPT-4o-mini",
      "Implemented auto-exit rules with AI confirmation, dual wallet support (guest PolyPoints vs MetaMask + USDC), and real-time position tracking with PnL monitoring",
    ],
  },
  {
    id: 5,
    title: "Stockify",
    description: "A way for artists to monetize their IP through a stock exchange",
    technologies: ["Next.js", "Supabase", "Redis", "Express"],
    details: [
      "Engineered a full-stack platform with Next.js front end, integrated with Spotify OAuth and Web API for artists data, and a Node.js/Express backend that computes artist price changes via synthetic micro-tick simulations",
      "Simulated a real-time exchange for music artists by modeling price volatility using popularity metrics, enabling users to track and trade artist shares",
    ],
    github: "https://github.com/Neontus/stockify",
    demo: "https://stockify-mocha.vercel.app/",
    hidden: true,
  },
  {
    id: 6,
    title: "RustyDJ",
    description: "Open-source DJ software built in Rust",
    technologies: ["Rust"],
    details: [
      "Creating free, open-source DJ software in Rust, focusing on performance and real-time audio processing",
    ],
    github: "https://github.com/Neontus/rustyDJ",
    hidden: true,
  },
];
