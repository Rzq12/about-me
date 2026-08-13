import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.png";
import Work5 from "../../assets/work5.jpg";
import Work6 from "../../assets/work6.png";
import Work7 from "../../assets/work7.png";
import Work8 from "../../assets/work8.png";
import Work9 from "../../assets/work9.jpg";
import Work10 from "../../assets/work10.jpg";
import Work11 from "../../assets/work11.png";
import Work12 from "../../assets/work12.jpg";

export const projectsData = [
  {
    id: 1,
    slug: "research-rag",
    image: Work11,
    title: "Research RAG",
    category: "AI / LLM",
    tagline:
      "AI-powered research assistant with OpenAlex integration, hybrid retrieval (BM25 + vector), and multi-LLM support (Groq, Gemini).",
    overview: {
      what: "An AI-powered research assistant that lets users search, ingest, and query academic papers using OpenAlex APIs, ChromaDB vector store, and multiple LLM backends.",
      problem:
        "Researchers spend hours manually searching and synthesizing information across papers. ResearchRAG automates discovery, ingestion, and question-answering with source-grounded citations.",
      why: "Built to master production-grade RAG — hybrid retrieval, reranking, HyDE, parent-child chunking, multilingual embeddings, and streaming — while creating a genuinely useful academic tool.",
    },
    features: [
      {
        name: "OpenAlex + PDF Ingestion",
        desc: "Real-time search via OpenAlex API, abstracts-only or full-text mode, OCR fallback for scanned PDFs, Semantic Scholar & Unpaywall integration.",
      },
      {
        name: "Hybrid Retrieval + Reranker",
        desc: "BM25 (keyword/akronim) + vector search fused via RRF (0.4/0.6), multilingual mMARCO cross-encoder reranker with sigmoid scores.",
      },
      {
        name: "Streaming RAG with HyDE",
        desc: "Token-by-token streaming answers, HyDE generates hypothetical abstracts for better retrieval, reasoning blocks displayed as collapsible sections.",
      },
      {
        name: "Multi-Turn Conversation + Citations",
        desc: "Chat history across turns, inline citations [1][2] with relevance scores, metadata filtering per document/section/year, query suggestions.",
      },
      {
        name: "Auth + Per-User Knowledge Base",
        desc: "Login/sign-up with SQLite-backed isolated knowledge bases, paper summarizer (5-section), topic classifier, semantic search panel.",
      },
    ],
    tech: ["Python", "Streamlit", "ChromaDB", "Groq", "Google Gemini", "LangChain", "Hugging Face", "OpenAlex", "BM25"],
    architecture: [
      "User (Login/Sign Up)",
      "Auth Gate (SQLite)",
      "Search OpenAlex / Upload PDF",
      "Advanced PDF Pipeline + OCR",
      "Chunking (Parent-Child Split)",
      "Multilingual Embedding (E5)",
      "Hybrid Retrieval (BM25 + Vector)",
      "RRF Fusion + mMARCO Reranker",
      "HyDE Query Expansion",
      "LLM Streaming (Groq/Gemini/Self-Hosted)",
      "Cited Answer + Source Attribution",
    ],
    results: null,
    outcomes:
      "Built a production-grade RAG system with hybrid retrieval, streaming, multi-provider LLM support, auth, and per-user knowledge bases. Deployed and accessible as a live web application.",
    engineering: [
      {
        title: "Parent-Child Retrieval",
        desc: "Embeds smaller child chunks for precise retrieval, but returns full parent chunks to the LLM to preserve context — critical for paper-length documents.",
      },
      {
        title: "HyDE (Hypothetical Document Embeddings)",
        desc: "LLM generates two hypothetical abstracts for each query, used as additional retrieval vectors — significantly improves recall for conceptual queries that lack keyword overlap.",
      },
      {
        title: "Relevance Threshold + Fallback",
        desc: "When knowledge base scores fall below threshold, automatically falls back to live OpenAlex search then DuckDuckGo — ensuring the assistant always provides useful answers.",
      },
      {
        title: "Multilingual Embedding",
        desc: "Used multilingual-e5-base so Indonesian queries correctly retrieve English papers — critical for Indonesian researchers querying international literature.",
      },
    ],
    deployment: "research-rag.riezqidr.my.id",
    demo: "https://research-rag.riezqidr.my.id/",
    github: "https://github.com/Rzq12/ResearchRAG",
  },
  {
    id: 2,
    slug: "emotion-classifier",
    image: Work9,
    title: "Indo Review Intelligence",
    category: "AI / LLM",
    tagline:
      "Hybrid emotion classifier + RAG + LangGraph agent for automated review intelligence on Indonesian app reviews.",
    overview: {
      what: "A hybrid system combining fine-tuned IndoBERT emotion classifier (anger/happiness/sadness) with RAG-powered LLM and LangGraph agentic layer for automated review insights, chatbot Q&A, and draft response generation.",
      problem:
        "App developers receive thousands of Indonesian-language reviews daily. Manual review analysis doesn't scale — teams need automated emotion classification, complaint summarization, and response drafting.",
      why: "Built to integrate multiple AI paradigms — fine-tuned transformers, RAG, and agentic workflows (LangGraph) — into a cohesive production system with experiment tracking (MLflow) and LLM provider abstraction.",
    },
    features: [
      {
        name: "Emotion Classifier (IndoBERT)",
        desc: "Fine-tuned IndoBERT for 3-class Indonesian emotion classification (anger, happiness, sadness) with TF-IDF + Logistic Regression baseline for comparison.",
      },
      {
        name: "RAG-Powered Insight Generator",
        desc: "Structured summaries (complaint themes, quotes, recommendations) from negative-emotion reviews, grounded to retrieved data and cached.",
      },
      {
        name: "Internal Chatbot",
        desc: "Free-form question answering with grounding to retrieved reviews, anti-hallucination source citations, and relevance scoring.",
      },
      {
        name: "LangGraph Agentic Layer",
        desc: "State machine routes reviews based on confidence (escalate/draft empathy/archive), generates grounded draft replies, and queues for human approval with escalation notifications.",
      },
      {
        name: "Experiment Tracking (MLflow)",
        desc: "F1-macro tracking, confusion matrices, model registry — full experiment lifecycle management.",
      },
    ],
    tech: ["Python", "PyTorch", "HuggingFace Transformers", "IndoBERT", "LangGraph", "ChromaDB", "FastAPI", "MLflow", "Groq", "Gemini", "React", "Vite"],
    architecture: [
      "Indonesian App Reviews",
      "Preprocessing + Label Normalization",
      "TF-IDF Baseline / IndoBERT Fine-tuning",
      "MLflow Tracking + Registry",
      "Emotion Classification",
      "ChromaDB Vector Store",
      "RAG: Insight Generator + Chatbot",
      "LangGraph Agent (Route → Draft → Queue)",
      "FastAPI Endpoints",
      "React Frontend (Fase 5)",
    ],
    results: {
      "Metric": "F1-macro (primary)",
      "Classes": "anger, happiness, sadness",
      "Tracking": "MLflow (SQLite)",
      "LLM Providers": "Groq, Gemini, Ollama",
    },
    engineering: [
      {
        title: "LLM Provider Abstraction",
        desc: "Built a unified interface supporting Groq, Gemini, and Ollama — enabling provider switching without changing application logic and allowing cost/performance trade-offs per use case.",
      },
      {
        title: "Agentic State Machine",
        desc: "LangGraph routes each review through a decision tree: high-confidence negative → escalate with draft response; moderate → generate empathy draft; low-confidence → archive. Human-in-the-loop for all escalations.",
      },
      {
        title: "RAG Grounding Strategy",
        desc: "The chatbot retrieves semantically similar reviews before generating answers, with explicit source attribution to prevent hallucination — critical when answering product-team questions about real user complaints.",
      },
      {
        title: "Two-Stage Classification",
        desc: "Started with TF-IDF + Logistic Regression as a lightweight, interpretable baseline before moving to fine-tuned IndoBERT — demonstrating the performance gap and justifying the added complexity.",
      },
    ],
    deployment: "emotion-classifier.riezqidr.my.id",
    demo: "https://emotion-classifier.riezqidr.my.id/",
    github: "https://github.com/Rzq12/Emotion-Classifier",
  },
  {
    id: 3,
    slug: "vehicle-counting",
    image: Work10,
    title: "Vehicle Detection, Tracking & Counting",
    category: "Computer Vision",
    tagline:
      "Automated vehicle detection, tracking, and counting using fine-tuned RT-DETR and ByteTrack on UA-DETRAC dataset.",
    overview: {
      what: "A computer vision system for automated vehicle detection, multi-object tracking, and counting from traffic video using RT-DETR (fine-tuned on UA-DETRAC) and a custom ByteTrack implementation.",
      problem:
        "Manual traffic monitoring is labor-intensive and doesn't scale. Automated vehicle detection and counting enables data-driven traffic management, intersection analysis, and urban planning.",
      why: "Built to master the full object detection + tracking pipeline — from model fine-tuning on Kaggle GPU to Streamlit deployment on Hugging Face Spaces — with real-time dashboard and export capabilities.",
    },
    features: [
      {
        name: "RT-DETR Object Detection",
        desc: "Fine-tuned RT-DETR (Ultralytics) on UA-DETRAC vehicle dataset with Kaggle GPU training pipeline for high-accuracy vehicle detection.",
      },
      {
        name: "ByteTrack Multi-Object Tracking",
        desc: "Custom ByteTrack implementation assigns unique IDs to each vehicle across frames, maintaining identity through occlusions and frame transitions.",
      },
      {
        name: "Dual Counting Methods",
        desc: "Virtual Line Counting (vehicles crossing a user-defined line) and Polygon Region Counting (vehicles entering a drawn area) with directional awareness.",
      },
      {
        name: "Real-Time Dashboard + Export",
        desc: "Streamlit dashboard with live FPS, progress bar, vehicle count statistics, and downloadable annotated video + CSV results.",
      },
    ],
    tech: ["Python", "RT-DETR", "Ultralytics", "ByteTrack", "PyTorch", "OpenCV", "Streamlit", "UA-DETRAC"],
    architecture: [
      "Upload Video",
      "Frame Extraction",
      "RT-DETR Detection",
      "ByteTrack Tracking",
      "Virtual Line / Polygon Counting",
      "Live Dashboard (FPS + Stats)",
      "Export (Annotated Video + CSV)",
    ],
    results: {
      "Model": "RT-DETR fine-tuned",
      "Dataset": "UA-DETRAC",
      "Training": "Kaggle GPU (P100/T4)",
      "Deployment": "Hugging Face Spaces",
    },
    engineering: [
      {
        title: "Model Selection",
        desc: "Chose RT-DETR over YOLO for its transformer-based architecture, which provides better performance on dense vehicle scenes with heavy occlusion — critical for traffic footage where vehicles frequently overlap.",
      },
      {
        title: "ByteTrack Implementation",
        desc: "Implemented ByteTrack from scratch rather than using off-the-shelf trackers — low-confidence detections are kept as secondary associations, improving tracking continuity when vehicles are partially occluded.",
      },
      {
        title: "Kaggle Training Pipeline",
        desc: "Fine-tuned on Kaggle GPU notebooks to leverage free GPU hours, with automated checkpoint saving and model download workflow — avoiding local GPU costs while maintaining reproducibility.",
      },
    ],
    deployment: "Hugging Face Spaces",
    demo: "https://riezqidr-vehicle-counting.hf.space/",
    github: "https://github.com/Rzq12/Vehicle-Counting",
  },
  {
    id: 4,
    slug: "ai-recipe-meal-plan",
    image: Work8,
    title: "AI Recipe & Meal Plan",
    category: "AI / LLM",
    tagline:
      "AI-powered recipe generator and weekly meal planner based on dietary preferences and available ingredients.",
    overview: {
      what: "An intelligent application that generates personalized recipes and creates weekly meal plans based on user dietary preferences, available ingredients, and nutritional goals.",
      problem:
        "Meal planning is time-consuming. People struggle to create varied, nutritious meal plans that fit their dietary restrictions and ingredient availability.",
      why: "Built as a team capstone project (DREAM TEAM 2026) to apply LLM capabilities to a practical consumer problem while practicing full-stack development.",
    },
    features: [
      {
        name: "Recipe Generation",
        desc: "LLM generates creative, personalized recipes based on user-specified ingredients, cuisine preferences, and dietary restrictions.",
      },
      {
        name: "Weekly Meal Planning",
        desc: "Automatically creates balanced 7-day meal plans with breakfast, lunch, and dinner recommendations.",
      },
      {
        name: "Nutritional Analysis",
        desc: "Provides estimated nutritional information for each recipe including calories, protein, carbs, and fat.",
      },
      {
        name: "Ingredient-Based Search",
        desc: "Users input available ingredients and receive recipe suggestions that minimize food waste.",
      },
    ],
    tech: ["Python", "Streamlit", "OpenAI API", "Prompt Engineering", "API Integration"],
    architecture: [
      "User Input (Preferences + Ingredients)",
      "Prompt Construction",
      "LLM Recipe Generation",
      "Nutritional Analysis",
      "Meal Plan Assembly",
      "Streamlit UI Display",
    ],
    results: null,
    outcomes:
      "Delivered a functional AI-powered meal planning application. Gained experience in prompt engineering, LLM API integration, and building user-facing AI applications with Streamlit.",
    engineering: [
      {
        title: "Prompt Engineering",
        desc: "Designed structured prompts with system instructions, few-shot examples, and output format constraints to ensure consistent, high-quality recipe generation.",
      },
      {
        title: "Output Parsing",
        desc: "Built robust parsing for LLM-generated structured recipe data, handling variations in formatting and edge cases gracefully.",
      },
    ],
    deployment: "Streamlit Cloud",
    demo: null,
    github: "https://github.com/DREAM-TEAM-2026/AI-ENGINEER",
  },
  {
    id: 5,
    slug: "twitter-sentiment-classification",
    image: Work4,
    title: "Twitter Sentiment Classification",
    category: "NLP",
    tagline:
      "NLP sentiment analysis on Twitter data using TF-IDF, word embeddings, and multiple classifier comparison.",
    overview: {
      what: "An NLP project that classifies tweet sentiment into positive, negative, or neutral using text preprocessing and multiple machine learning classifiers.",
      problem:
        "Organizations need automated ways to gauge public sentiment at scale. Manual sentiment analysis doesn't scale to thousands of social media posts.",
      why: "Built to practice the full NLP pipeline — from raw text preprocessing to model evaluation — and understand how different classifiers perform on short-form social media text.",
    },
    features: [
      {
        name: "Text Preprocessing Pipeline",
        desc: "Cleans tweets by removing URLs, mentions, hashtags, special characters, and applying lowercase normalization.",
      },
      {
        name: "TF-IDF Vectorization",
        desc: "Converts preprocessed text into numerical features using Term Frequency-Inverse Document Frequency.",
      },
      {
        name: "Multi-Classifier Comparison",
        desc: "Evaluates Logistic Regression, Naive Bayes, SVM, and Random Forest to identify the best performer.",
      },
      {
        name: "Model Evaluation Suite",
        desc: "Comprehensive evaluation with accuracy, precision, recall, F1-score, and confusion matrices.",
      },
    ],
    tech: ["Python", "Scikit-learn", "NLTK", "Pandas", "NumPy", "Matplotlib"],
    architecture: [
      "Raw Tweets",
      "Text Cleaning & Normalization",
      "Tokenization + Stopword Removal",
      "TF-IDF Feature Extraction",
      "Train/Test Split",
      "Classifier Training (LR, NB, SVM, RF)",
      "Evaluation & Comparison",
    ],
    results: {
      "Best Model": "Logistic Regression",
      "Accuracy": "~78%",
      "Classes": "3 (positive, negative, neutral)",
    },
    engineering: [
      {
        title: "Preprocessing Decisions",
        desc: "Kept emojis during cleaning after observing they carry significant sentiment signal in short tweets. Removed URLs and mentions which add noise without sentiment value.",
      },
      {
        title: "Why TF-IDF over Embeddings",
        desc: "For short text classification with limited training data, TF-IDF often performs comparably to word embeddings while being faster and more interpretable.",
      },
    ],
    deployment: null,
    demo: null,
    github:
      "https://github.com/Rzq12/Machine-Learning-Project/tree/main/NLP-Projects/Twitter%20Sentiment%20Classification",
  },
  {
    id: 6,
    slug: "gender-detection",
    image: Work1,
    title: "Gender Detection",
    category: "Computer Vision",
    tagline:
      "CNN-based gender classification from facial images with data augmentation and model optimization.",
    overview: {
      what: "A computer vision model that classifies gender from facial images using convolutional neural networks built with TensorFlow and OpenCV.",
      problem:
        "Automated demographic analysis and personalized user experiences rely on accurate facial attribute classification.",
      why: "Built as an introductory computer vision project to learn CNN architecture design, image preprocessing, and model evaluation on real-world image data.",
    },
    features: [
      {
        name: "Face Detection + Classification",
        desc: "Two-stage pipeline: face detection isolates the region of interest, then CNN classifies gender.",
      },
      {
        name: "Data Augmentation",
        desc: "Applied rotation, flipping, brightness variation, and zoom to increase training set diversity.",
      },
      {
        name: "Training Visualization",
        desc: "Plots training/validation accuracy and loss curves to monitor convergence and detect overfitting.",
      },
    ],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Matplotlib"],
    architecture: [
      "Input Image",
      "Face Detection (OpenCV)",
      "Face ROI Crop",
      "Preprocessing (Resize + Normalize)",
      "CNN Classification",
      "Gender Prediction",
    ],
    results: null,
    outcomes:
      "Built a functional gender classification pipeline. Gained foundational experience in CNN design, data augmentation strategies, and model evaluation workflows.",
    engineering: [
      {
        title: "Data Augmentation Strategy",
        desc: "Used aggressive augmentation (rotation ±20°, horizontal flip, zoom range 0.2) to prevent overfitting on the relatively small training dataset.",
      },
      {
        title: "Architecture Progression",
        desc: "Started with 3 conv layers, then iteratively added layers and dropout until validation accuracy plateaued — avoiding unnecessary complexity.",
      },
    ],
    deployment: null,
    demo: null,
    github:
      "https://github.com/Rzq12/Machine-Learning-Project/tree/main/Computer-Vision/Gender%20Detection",
  },
  {
    id: 7,
    slug: "obesity-classification",
    image: Work2,
    title: "Obesity Classification",
    category: "Machine Learning",
    tagline:
      "Multi-class obesity level prediction from lifestyle and dietary data using ensemble methods.",
    overview: {
      what: "A structured data ML project that predicts obesity levels based on eating habits, physical activity, and lifestyle factors.",
      problem:
        "Obesity is a growing public health concern. Early classification based on lifestyle data can help identify at-risk individuals for preventive intervention.",
      why: "Built to practice the structured data ML pipeline — feature engineering, handling imbalanced classes, and comparing multiple classification algorithms.",
    },
    features: [
      {
        name: "Feature Engineering",
        desc: "Encoded categorical variables (dietary habits, transportation mode) and normalized numerical features for optimal model performance.",
      },
      {
        name: "Multi-Class Classification",
        desc: "Predicts 7 obesity levels from Insufficient Weight to Obesity Type III using ensemble methods.",
      },
      {
        name: "Model Comparison",
        desc: "Evaluated Random Forest, XGBoost, Gradient Boosting, and Logistic Regression with cross-validation.",
      },
      {
        name: "Feature Importance Analysis",
        desc: "Identified which lifestyle factors most strongly predict obesity levels.",
      },
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
    architecture: [
      "Raw Lifestyle Data",
      "Categorical Encoding",
      "Feature Scaling",
      "Train/Test Split",
      "Multi-Classifier Training",
      "Cross-Validation",
      "Feature Importance",
    ],
    results: {
      "Best Model": "XGBoost",
      "Accuracy": "~95%",
      "Classes": "7 obesity levels",
    },
    engineering: [
      {
        title: "Handling Ordinal Features",
        desc: "Recognized that features like 'frequency of vegetable consumption' are ordinal, not nominal, and used appropriate encoding to preserve order information.",
      },
      {
        title: "Class Imbalance Strategy",
        desc: "Used SMOTE for minority class oversampling after observing that extreme obesity categories were underrepresented in the dataset.",
      },
    ],
    deployment: null,
    demo: null,
    github:
      "https://github.com/Rzq12/Machine-Learning-Project/tree/main/Structured-Data-ML/Obesity%20Classification",
  },
  {
    id: 8,
    slug: "rock-paper-scissors-classification",
    image: Work3,
    title: "Rock Paper Scissors Classification",
    category: "Computer Vision",
    tagline:
      "Hand gesture recognition using CNNs with real-time webcam prediction capability.",
    overview: {
      what: "An image classification project that recognizes hand gestures for rock, paper, and scissors using a custom-trained convolutional neural network.",
      problem:
        "Hand gesture recognition is a fundamental computer vision task with applications in sign language interpretation, gaming, and human-computer interfaces.",
      why: "Built as a self-contained ML project to practice the complete pipeline from data preparation through to real-time inference.",
    },
    features: [
      {
        name: "Custom CNN Architecture",
        desc: "Designed and trained a CNN specifically for hand shape classification with 3 output classes.",
      },
      {
        name: "Real-Time Webcam Mode",
        desc: "Live prediction using webcam feed with on-screen classification results.",
      },
      {
        name: "Data Preprocessing",
        desc: "Image resizing, normalization, and augmentation pipeline for training data preparation.",
      },
    ],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    architecture: [
      "Webcam Capture",
      "ROI Extraction",
      "Preprocessing",
      "CNN Inference",
      "Gesture Classification",
      "Display Result",
    ],
    results: {
      "Accuracy": "~90% on validation set",
      "Classes": "3 (rock, paper, scissors)",
    },
    engineering: [
      {
        title: "Background Handling",
        desc: "Used simple background subtraction to isolate the hand region before classification, significantly improving accuracy over raw image input.",
      },
    ],
    deployment: null,
    demo: null,
    github:
      "https://github.com/Rzq12/Machine-Learning-Project/tree/main/Computer-Vision/Rock%20Paper%20Scissors%20Classification",
  },
  {
    id: 9,
    slug: "machine-learning-dashboard",
    image: Work5,
    title: "Machine Learning Dashboard",
    category: "Machine Learning",
    tagline:
      "Interactive web dashboard for dataset exploration, model training, and performance visualization.",
    overview: {
      what: "An interactive Streamlit web application that allows users to upload datasets, train ML models, and visualize results through an intuitive dashboard.",
      problem:
        "Data exploration and model experimentation often require switching between multiple tools. A unified dashboard streamlines the workflow.",
      why: "Built to learn how to create interactive data science tools and make ML model experimentation more accessible through a visual interface.",
    },
    features: [
      {
        name: "Dataset Upload & Preview",
        desc: "Upload CSV files, view data summaries, and explore distributions with auto-generated charts.",
      },
      {
        name: "Automated EDA",
        desc: "Generates descriptive statistics, correlation matrices, and distribution plots for uploaded datasets.",
      },
      {
        name: "Model Training Interface",
        desc: "Select target variable, choose classifier, tune hyperparameters, and train models with progress tracking.",
      },
      {
        name: "Performance Visualization",
        desc: "Confusion matrices, ROC curves, and feature importance plots displayed in an interactive format.",
      },
    ],
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Plotly", "Matplotlib"],
    architecture: [
      "Dataset Upload",
      "Auto EDA + Visualization",
      "Feature Selection",
      "Model Configuration",
      "Training + Cross-Validation",
      "Results Dashboard",
    ],
    results: null,
    outcomes:
      "Built a fully functional ML experimentation dashboard. Demonstrated ability to create interactive data applications and integrate ML workflows into user-friendly interfaces.",
    engineering: [
      {
        title: "Session State Management",
        desc: "Used Streamlit's session state to persist uploaded data and trained models across page interactions, avoiding expensive recomputation.",
      },
    ],
    deployment: null,
    demo: null,
    github:
      "https://github.com/Rzq12/Machine-Learning-Project/tree/main/ML-Apps/Machine-Learning-Dashboard",
  },
  {
    id: 10,
    slug: "stadpro-analyst",
    image: Work6,
    title: "StaDPro Analyst",
    category: "Data Science / Data Analysis",
    tagline:
      "Statistical data processing toolkit for automating common tests and generating research-ready reports.",
    overview: {
      what: "A statistical analysis tool designed to automate common statistical tests and generate comprehensive research reports for academic use.",
      problem:
        "Students and researchers spend significant time running repetitive statistical tests and formatting results. Automation saves time and reduces errors.",
      why: "Built as a college project to apply statistical knowledge programmatically and create a practical tool for the academic community.",
    },
    features: [
      {
        name: "Automated Statistical Tests",
        desc: "Runs normality tests, t-tests, ANOVA, chi-square, and correlation analysis with minimal configuration.",
      },
      {
        name: "Report Generation",
        desc: "Produces formatted reports with test results, p-values, and interpretations ready for academic papers.",
      },
      {
        name: "Data Visualization",
        desc: "Auto-generates appropriate plots (histograms, box plots, QQ plots) based on data characteristics.",
      },
    ],
    tech: ["Python", "SciPy", "Pandas", "Matplotlib", "Seaborn"],
    architecture: [
      "Data Input",
      "Normality Testing",
      "Test Selection Logic",
      "Statistical Computation",
      "Visualization",
      "Report Assembly",
    ],
    results: null,
    outcomes:
      "Created a working statistical analysis automation tool. Applied coursework knowledge to build practical software that streamlines research workflows.",
    engineering: [
      {
        title: "Test Selection Logic",
        desc: "Implemented a decision tree that automatically selects the appropriate statistical test based on data type, distribution, and number of groups — reducing user error.",
      },
    ],
    deployment: null,
    demo: null,
    github: "https://github.com/Rzq12/College-Project/tree/main/StadPro-Analyst",
  },
  {
    id: 11,
    slug: "hotel-management-database",
    image: Work7,
    title: "Hotel Management Database",
    category: "Data Science / Data Analysis",
    tagline:
      "Complete relational database system for hotel operations with complex queries and stored procedures.",
    overview: {
      what: "A relational database system for hotel management covering guest bookings, room management, staff scheduling, and billing.",
      problem:
        "Hotel operations involve complex interrelated data. A well-designed database ensures data integrity, efficient querying, and scalable operations.",
      why: "Built to demonstrate SQL expertise including database design, normalization, complex query writing, and stored procedure implementation.",
    },
    features: [
      {
        name: "Normalized Schema Design",
        desc: "Designed tables in 3NF covering guests, rooms, bookings, staff, services, and billing with proper foreign key relationships.",
      },
      {
        name: "Complex Queries",
        desc: "Implemented joins across 5+ tables, subqueries, window functions, and aggregations for business reporting.",
      },
      {
        name: "Stored Procedures",
        desc: "Created procedures for automated check-in/check-out, room availability checks, and monthly revenue reports.",
      },
      {
        name: "Data Integrity",
        desc: "Constraints, triggers, and transaction management ensure data consistency across all operations.",
      },
    ],
    tech: ["PostgreSQL", "SQL", "Database Design", "ERD"],
    architecture: [
      "Requirements Analysis",
      "ERD Design",
      "Table Creation + Normalization",
      "Constraint Setup",
      "Stored Procedures",
      "Query Optimization",
      "Testing",
    ],
    results: null,
    outcomes:
      "Designed and implemented a production-quality hotel database schema. Demonstrated strong SQL skills, normalization understanding, and database design principles.",
    engineering: [
      {
        title: "Normalization Decisions",
        desc: "Chose 3NF over BCNF for the booking table after determining that the performance cost of an additional join wasn't justified by the minimal redundancy reduction.",
      },
      {
        title: "Indexing Strategy",
        desc: "Created composite indexes on frequently queried column combinations (room_type + date_range, guest_id + booking_status) to optimize common query patterns.",
      },
    ],
    deployment: null,
    demo: null,
    github:
      "https://github.com/Rzq12/College-Project/tree/main/Hotel-Management-Database-SQL",
  },
  {
    id: 12,
    slug: "indonesia-economic-pipeline",
    image: Work12,
    title: "Indonesia Economic Data Pipeline",
    category: "Data Science / Data Analysis",
    tagline:
      "End-to-end ETL pipeline extracting Indonesian economic data from the World Bank API into a PostgreSQL star-schema warehouse, served via a Streamlit dashboard.",
    overview: {
      what: "A full data engineering pipeline that extracts Indonesian economic indicators (GDP, inflation, unemployment, population) from the free World Bank API, cleans and validates them, loads them into a PostgreSQL star-schema warehouse, and visualizes them in a Streamlit dashboard — all orchestrated with Prefect and deployed on Supabase + GitHub Actions + Streamlit Cloud.",
      problem:
        "Indonesian economic data is scattered across years and formats. Manual collection and cleaning doesn't scale — a reproducible ETL pipeline automates extraction, validation, warehousing, and visualization so trends are always fresh and explorable.",
      why: "Built to master the complete data engineering stack — API extraction, data cleaning with validation, star-schema modeling, orchestration, and dashboarding — while producing a genuinely useful economic monitoring tool.",
    },
    features: [
      {
        name: "World Bank API Extraction",
        desc: "Pulls GDP growth, inflation, unemployment, and population data from 2000–2024 via the free World Bank API (no API key), with Pydantic-validated raw models.",
      },
      {
        name: "Star-Schema Data Warehouse",
        desc: "PostgreSQL schema with dim_year, dim_country, dim_indicator dimension tables and a fact_economic fact table for analytics-ready querying.",
      },
      {
        name: "Prefect Orchestration",
        desc: "Task-based ETL flows with retries (3x backoff) for flaky API extraction, decoupled extract/transform/load tasks.",
      },
      {
        name: "Idempotent Daily Pipeline",
        desc: "UNIQUE(year, country, indicator) constraint + ON CONFLICT DO NOTHING upserts ensure daily re-runs never duplicate data.",
      },
      {
        name: "Streamlit Dashboard",
        desc: "KPI cards, year-range filters, indicator selectors, and Plotly line/bar charts for GDP, inflation, unemployment, and population trends.",
      },
    ],
    tech: ["Python", "Pandas", "Prefect", "PostgreSQL", "SQLAlchemy", "Pydantic", "Streamlit", "Plotly", "Docker", "Supabase", "GitHub Actions"],
    architecture: [
      "World Bank API (free, no auth)",
      "Extract (requests + Pydantic models)",
      "Transform (Pandas cleaning + range validation)",
      "Load (SQLAlchemy bulk upsert)",
      "Star Schema (PostgreSQL)",
      "Prefect Orchestration (retries + batching)",
      "Streamlit Dashboard (Plotly)",
    ],
    results: {
      "Indicators": "4 (GDP, inflation, unemployment, population)",
      "Coverage": "2000–2024 (25 years)",
      "Warehouse": "Star schema (PostgreSQL)",
      "Schedule": "Daily (GitHub Actions cron)",
    },
    engineering: [
      {
        title: "Connection Pooler Workaround",
        desc: "Supabase's direct database host is IPv6-only, unreachable from GitHub Actions and Streamlit Cloud runners. Routed through Supavisor's IPv4 connection pooler (aws-0-ap-northeast-2.pooler.supabase.com).",
      },
      {
        title: "Idempotent Upserts",
        desc: "Added a UNIQUE(year_id, country_id, indicator_id) constraint with ON CONFLICT DO NOTHING so the daily cron can re-run safely without duplicating fact rows.",
      },
      {
        title: "Lazy Engine + SSL",
        desc: "Database engine initializes lazily and supports a single DATABASE_URL (managed Postgres) with sslmode=require, or per-variable DB_* config for local Docker — one code path for both.",
      },
    ],
    deployment: "Supabase + GitHub Actions + Streamlit Cloud",
    demo: "https://indonesia-economic-pipeline.streamlit.app/",
    github: "https://github.com/Rzq12/indonesia-economic-pipeline",
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "AI / LLM" },
  { name: "NLP" },
  { name: "Computer Vision" },
  { name: "Machine Learning" },
  { name: "Data Science / Data Analysis" },
];
