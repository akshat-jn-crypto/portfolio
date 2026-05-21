export const projects = [
  {
    title: 'Spoofing-Aware Fake Audio Detector',
    description: 'Deep-learning voice spoofing detection system using frozen Wav2Vec2 embeddings with a custom CNN-LSTM (5-window sliding temporal context) to detect AI-generated voice clones and deepfakes. Deployed as a FastAPI service with an interactive dashboard; CI/CD via GitHub Actions on Hugging Face Spaces.',
    image: '/images/1.jpeg',
    tags: ['Python', 'PyTorch', 'Wav2Vec2', 'CNN-LSTM', 'FastAPI', 'Docker'],
    source: 'https://huggingface.co/spaces/jnakshat/fakevoicedetector',
    visit: 'https://huggingface.co/spaces/jnakshat/fakevoicedetector',
    id: 0,
  },
  {
    title: 'Expense Management System',
    description: 'Full-stack MERN personal finance app with JWT-based auth, income/expense transaction management, date-range and category filtering, and analytics dashboards. Deployed with a split-hosted architecture: React SPA on Vercel, Express REST API on Render, and MongoDB Atlas as cloud database.',
    image: '/images/2.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Ant Design', 'Vercel'],
    source: 'https://money-manager-byakshat.vercel.app',
    visit: 'https://money-manager-byakshat.vercel.app',
    id: 1,
  },
  {
    title: 'Generative AI RAG Chatbot',
    description: 'Production-grade RAG chatbot on AWS. Ingested and indexed 1,000+ documents via S3 and OpenSearch Serverless; integrated AWS Bedrock with Claude and Titan embeddings. Achieved sub-2s latency and 90%+ answer relevance.',
    image: '/images/3.jpeg',
    tags: ['Python', 'AWS Bedrock', 'AWS S3', 'OpenSearch', 'Lambda', 'LangChain'],
    source: 'https://github.com/akshat-jn',
    id: 2,
  },
  {
    title: 'Laptop Price Predictor',
    description: 'End-to-end ML pipeline scraping 1,000+ Amazon listings with BeautifulSoup. Performed data cleaning, EDA, feature engineering, and dimensionality reduction. Benchmarked 8+ algorithms and finalised Random Forest with 95% accuracy.',
    image: '/images/4.jpeg',
    tags: ['Python', 'BeautifulSoup', 'Pandas', 'Scikit-learn', 'Random Forest'],
    source: 'https://akshat-jn-crypto-amazon-laptops-price-predictor-app-hvj7ek.streamlit.app',
    visit: 'https://akshat-jn-crypto-amazon-laptops-price-predictor-app-hvj7ek.streamlit.app',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2020, text: 'Started B.Tech in Electronics & Communication Engineering (IoT) at NSUT, Delhi' },
  { year: 2021, text: 'International Rank 1 among 200+ global teams at NASA CanSat Competition' },
  { year: 2022, text: 'Software Engineering Intern at HatchnHack — built NLP chatbot with React & MongoDB' },
  { year: 2023, text: 'Data Analyst Intern at Axis Bank — built predictive risk model on 50+ Crore rows of loan data' },
  { year: 2024, text: 'Graduated from NSUT; Joined Axis Bank as Manager, Business Intelligence Unit — building credit risk models at scale' },
];