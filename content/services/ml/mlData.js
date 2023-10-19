import IconFifteen from "@/svgs/services/IconFifteen";
import IconFive from "@/svgs/services/IconFive";
import IconFourteen from "@/svgs/services/IconFourteen";
import IconSeventeen from "@/svgs/services/IconSeventeen";
import IconSix from "@/svgs/services/IconSix";
import IconSixteen from "@/svgs/services/IconSixteen";
import IconThirteen from "@/svgs/services/IconThirteen";
import IconTwenty from "@/svgs/services/IconTwenty";
import IconTwentyOne from "@/svgs/services/IconTwentyOne";
import IconTwentyTwo from "@/svgs/services/IconTwentyTwo";

const color = "#7c3aed";

export const OurServicesData = [
  {
    title: "ML Foundations",
    services: [
      {
        title: "MLOps Training",
        path: "/services/ml/mlops_training",
      },
      {
        title: "Data Science Training",
        path: "/services/ml/data_science_training",
      },
      {
        title: "Workshops & Game Days",
        path: "/services/ml/workshops_and_game_days",
      },
    ],
  },
  {
    title: "Prototyping",
    services: [
      {
        title: "Computer Vision",
        path: "/services/ml/computer_vision",
      },
      {
        title: "Natural Language Processing",
        path: "/services/ml/natural_language_processing",
      },
      {
        title: "Generative AI",
        path: "/services/ml/generative_ai",
      },
    ],
  },
  {
    title: "Solutions",
    services: [
      {
        title: "ML Platform Migrations",
        path: "/services/ml/ml_platform_migrations",
      },
      {
        title: "Intelligent Document Processing",
        path: "/services/ml/intelligent_document_processing",
      },
      {
        title: "Demand Forecasting",
        path: "/services/ml/demand_forecasting",
      },
    ],
  },
];

export const whyChooseUsData = [
  {
    title: "Tap full-spectrum generative AI skills",
    icon: "BsRobot",
    description:
      "Leverage a proprietary machine learning engine that multiplies the value of labelled data, allowing for better AI. Build a chatbot in minutes using Large Language Model.",
  },
  {
    title: "Access cross-disciplinary expertise",
    icon: "FaCircleNodes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti laudantium tempore magni quasi delectus ducimus ab dolores eius sint mollitia! Build a chatbot in minutes using Large Language Model.",
  },
  {
    title: "Put generative AI accelerators to work",
    icon: "BsCloudFog2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eius. Delectus nam fuga ratione impedit. Perferendis vitae qui sapiente nihil. Build a chatbot in minutes using Large Language Model.",
  },
  {
    title: "Access ATOM.AI",
    icon: "TbBoxModel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae, explicabo debitis perferendis aut voluptatem fugit sed blanditiis labore! Eius. Build a chatbot in minutes using Large Language Model.",
  },
];

export const mlChallenges = [
  {
    title: "Data Quality and Availability",
    overview:
      "Ensuring high-quality data that is both available and reliable is a significant challenge. Many ML projects fail due to poor data quality.",
  },
  {
    title: "Data Privacy and Compliance",
    overview:
      "Enterprises often deal with sensitive data. Complying with data privacy regulations (e.g., GDPR) while still utilizing data for ML can be complex.",
  },
  {
    title: "Model Governance",
    overview:
      "Managing and governing ML models throughout their lifecycle, including versioning, tracking changes, and ensuring compliance, is challenging.",
  },
  {
    title: "Infrastructure Scalability",
    overview:
      "As models become more complex, they require more computational resources. Scalability and cost management can be issues, especially when moving from development to production.",
  },
  {
    title: "Model Interpretability and Explainability",
    overview:
      " Understanding why a model makes certain predictions is crucial, especially in regulated industries. Ensuring models are interpretable is a challenge.",
  },
  {
    title: "Talent and Skill Gap",
    overview:
      "There's often a shortage of talent with expertise in both ML and DevOps. Bridging this gap through training and hiring can be challenging.",
  },
  {
    title: "Integration with Existing Systems",
    overview:
      "Integrating ML into existing software and systems can be complex, requiring significant changes to workflows and processes.",
  },
  {
    title: "Model Deployment and Serving",
    overview:
      "Deploying ML models in production at scale and ensuring low-latency serving is challenging.",
  },
  {
    title: "Continuous Monitoring and Feedback Loop",
    overview:
      "Building a feedback loop to continuously monitor model performance and retrain models is essential but complex.",
  },
  {
    title: "Tooling and Technology Stack",
    overview:
      "Selecting the right tools and technologies for MLOps can be challenging, especially given the rapidly evolving landscape.",
  },
  {
    title: "Change Management",
    overview:
      "Cultural and organizational resistance to change can be a significant hurdle. MLOps often requires a shift in mindset and workflows.",
  },
  {
    title: "Cost Management",
    overview:
      "ML operations can become expensive, and managing costs while ensuring performance can be tricky.",
  },
  {
    title: "Security",
    overview:
      "Ensuring the security of models, data, and the infrastructure they run on is crucial but challenging.",
  },
  {
    title: "Documentation and Collaboration",
    overview:
      "Effective documentation and collaboration among cross-functional teams (data scientists, engineers, DevOps) are vital but sometimes overlooked.",
  },
  {
    title: "Regulatory Challenges",
    overview:
      "Effective documentation and collaboration among cross-functional teams (data scientists, engineers, DevOps) are vital but sometimes overlooked.Industries such as healthcare and finance have stringent regulations that impact how models are developed and deployed.",
  },
];

export const mlSubServicesData = [
  {
    name: "MLOps Foundations",
    services: [
      {
        title: "MLOps Training",
        icon: <IconSix width={40} height={40} color={color} />,
        keyPoints: [
          "In-depth courses covering MLOps principles, tools, and best practices.",
          "Hands-on labs for version control using Git, model tracking with tools like MLflow, and CI/CD pipeline setups.",
          "Training modules on automating model deployment and monitoring in production.",
          "Learning to address common MLOps challenges and ensuring model reliability.",
        ],
      },
      {
        title: "Data Science Training",
        icon: <IconThirteen width={40} height={40} color={color} />,
        keyPoints: [
          "Customized training programs for data scientists, data engineers, and analysts.",
          "Workshops on data preprocessing, feature selection, and advanced analytics techniques.",
          "Hands-on experience with popular data science libraries like pandas, scikit-learn, and TensorFlow.",
          "Training in building end-to-end machine learning pipelines from data collection to model deployment.",
        ],
      },
      {
        title: "Workshops and Game Days",
        icon: <IconFourteen width={40} height={40} color={color} />,
        keyPoints: [
          "Interactive workshops focusing on real-world MLOps scenarios.",
          "Game days simulating MLOps incidents and testing incident response plans.",
          "Machine Learning Hackathons for talent acquisition.",
          "Building cool demo to win for conferences and exhibitions.",
        ],
      },
    ],
  },
  {
    name: "Rapid Prototyping",
    services: [
      {
        title: "Computer Vision",
        icon: <IconFifteen width={40} height={40} color={color} />,
        keyPoints: [
          "Rapid development of computer vision models using frameworks like TensorFlow and PyTorch.",
          "Prototyping for image classification, object detection, image segmentation, and image generation.",
          "Integration with hardware like cameras and sensors for real-time applications.",
          "Model optimization for edge devices and deployment strategies.",
        ],
      },
      {
        title: "Natural Language Processing",
        icon: <IconSixteen width={40} height={40} color={color} />,
        keyPoints: [
          "Accelerated NLP model development for tasks like sentiment analysis, chatbots, and named entity recognition.",
          "Customization of pre-trained language models for domain-specific applications.",
          "Building chatbot prototypes with natural language understanding (NLU) capabilities.",
          "Creating text summarization models for content generation.",
        ],
      },
      {
        title: "Forecasting",
        icon: <IconTwenty width={40} height={40} color={color} />,
        keyPoints: [
          "Rapid implementation of time series forecasting models using libraries like Prophet and ARIMA.",
          "Forecasting demand, sales, financial trends, and more.",
          "Evaluation of model accuracy with metrics like RMSE and MAE.",
          "Hyperparameter tuning and model selection for optimal results.",
        ],
      },
      {
        title: "Recommendation engines",
        icon: <IconTwentyOne width={40} height={40} color={color} />,
        keyPoints: [
          "Quick development of recommendation systems based on collaborative filtering and content-based filtering.",
          "Prototyping personalized product recommendation engines for e-commerce.",
          "Implementing hybrid recommendation algorithms that combine multiple approaches.",
          "Evaluation of recommendation quality using precision, recall, and F1-score metrics.",
        ],
      },
    ],
  },
  {
    name: "Platform Solutions",
    services: [
      {
        title: "ML Platform Migrations",
        icon: <IconTwentyTwo width={40} height={40} color={color} />,
        keyPoints: [
          "Assessment and planning for migrating existing ML platforms to modern, scalable solutions.",
          "Data and model migration strategies to minimize downtime and data loss",
          "Implementation of cloud-based ML platforms like AWS SageMaker or Databricks.",
          "Integration of essential components, such as version control, model tracking, and automated deployment.",
        ],
      },
      {
        title: "Intelligent Document Understanding",
        icon: <IconFive width={40} height={40} color={color} />,
        keyPoints: [
          "Development of AI-driven document understanding solutions for text extraction and classification.",
          "Automated structured data extraction from unstructured documents like invoices, forms, and contracts.",
          "Customized natural language processing (NLP) models for document summarization and sentiment analysis.",
          "Deployment of document understanding systems to enhance data retrieval and decision-making.",
        ],
      },
      {
        title: "Model Migrations",
        icon: <IconSeventeen width={40} height={40} color={color} />,
        keyPoints: [
          "Assessment and strategy development for migrating machine learning models to new environments.",
          "Transition from legacy on-premises models to cloud-based platforms for scalability and efficiency.",
          "Optimization of models for deployment on edge devices and IoT platforms.",
          "Ensuring model performance and reliability during and after migration.",
        ],
      },
    ],
  },
];

export const OurMlExpertiseData = [1, 2, 3, 4, 5, 6, 7, 8];

export const mlCustomerStoriesData = [
  {
    title: "Geo-comm",
    points: [
      {
        title: "Challenge",
        description:
          "The customer gathers large amounts of digital maps as PDFs, images or Lidar scans and has to use human effort to convert them to digital maps to recommend exit strategies.",
      },
      {
        title: "Solution",
        description:
          "We used Amazon SageMaker to develop a multi-step pipeline to label the data and finetuned Yolo, Custom CNN, and Segment Anything model for object detection and segmentation to solve for edge detection, door detection and room detection problems. The output was converted into GeoJson format to be loaded into ArcGIS Pro for further analysis.",
      },
      {
        title: "Benefits",
        description:
          "The SageMaker MLOps inference pipeline generated digital maps and sped up the map creation process by 70%, resulting in savings.",
      },
    ],
    picture: "....................",
  },
  {
    title: "Largest Insurance in EMEA",
    points: [
      {
        title: "Challenge",
        description:
          "Processes over 10M+ claims annually and receives many image scans via email and fax in various formats and image quality. They needed a labeling platform to fix OCR errors and improve AI algorithms.",
      },
      {
        title: "Solution",
        description:
          "Karini AI developed an OCR labeling workflow powered by Amazon Textract APIs to detect OCR text, key values, and tables. The labeling workflow integration with SageMaker training and serving provided the human-in-the-loop workflow to improve the model quality continuously.",
      },
      {
        title: "Benefits",
        description:
          "The platform was enabled across 100s of users and estimated to improve the document understanding process by 20%.",
      },
    ],
    picture: "....................",
  },
  {
    title: "Truvian Sciences",
    points: [
      {
        title: "Challenge",
        description:
          "Truvian Sciences needed an artificial intelligence system to classify blood diseases using hematology images accurately, The system needed continuous learning technique to find out failure scenarios(False Negatives, False Positives). Getting a labeled dataset verified by medical professionals was expensive and needed massive efficiencies.",
      },
      {
        title: "Solution",
        description:
          "Karini AI developed an AI platform using AWS Services to provide easy-to-use bulk classification workflow but built-in dynamic consensus, dataset management to track and understand failure scenarios, and MLOps pipeline using Amazon SageMaker.",
      },
      {
        title: "Benefits",
        description:
          "Continuous learning improved model quality to 85%+ accuracy. Efficient bulk classification workflow was able to save 40% on labeling costs by medical professionals.",
      },
    ],
    picture: "....................",
  },
];
