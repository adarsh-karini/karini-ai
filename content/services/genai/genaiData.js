import IconEight from "@/svgs/services/IconEight";
import IconEighteen from "@/svgs/services/IconEighteen";
import IconEleven from "@/svgs/services/IconEleven";
import IconFour from "@/svgs/services/IconFour";
import IconNine from "@/svgs/services/IconNine";
import IconNineteen from "@/svgs/services/IconNineteen";
import IconSeven from "@/svgs/services/IconSeven";
import IconTen from "@/svgs/services/IconTen";
import IconTwelve from "@/svgs/services/IconTwelve";

const color = "#7c3aed";

export const OurServicesData = [
	{
		title: "GEN AI Foundations",
		services: [
			{
				title: "Training & Enablement",
				path: "/services/genai/training_and_enablement",
			},
			{
				title: "Workshops",
				path: "/services/genai/workshops",
			},
			{
				title: "Advisory",
				path: "/services/genai/advisory",
			},
		],
	},
	{
		title: "Rapid Prototypes",
		services: [
			{
				title: "Retrieval Augumented Generation Prototyping",
				path: "/services/genai/retrieval_augumented_generation_prototyping",
			},
			{
				title: "Prompt Engineering & Tuning",
				path: "/services/genai/prompt_engineering_and_tuning",
			},
			{
				title: "Chatbot Integrations",
				path: "/services/genai/chatbot_integrations",
			},
		],
	},
	{
		title: "Solutioning",
		services: [
			{
				title: "Model Finetuning with RLHF Evaluation",
				path: "/services/genai/model_finetuning_with_RLHF_evaluation",
			},
			{
				title: "Model Pre-Training",
				path: "/services/genai/model_pre_training",
			},
			{
				title: "LLMOps",
				path: "/services/genai/llmops",
			},
		],
	},
];

export const whyChooseUsData = [
	{
		icon: "BsRobot",
		title: "Tap full-spectrum generative AI skills",
		description:
			"Leverage a proprietary machine learning engine that multiplies the value of labelled data, allowing for better AI. Build a chatbot in minutes using Large Language Model.",
	},
	{
		icon: "FaCircleNodes",
		title: "Access cross-disciplinary expertise",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti laudantium tempore magni quasi delectus ducimus ab dolores eius sint mollitia! Build a chatbot in minutes using Large Language Model.",
	},
	{
		icon: "BsCloudFog2",
		title: "Put generative AI accelerators to work",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eius. Delectus nam fuga ratione impedit. Perferendis vitae qui sapiente nihil. Build a chatbot in minutes using Large Language Model.",
	},
	{
		icon: "TbBoxModel",
		title: "Access ATOM.AI",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae, explicabo debitis perferendis aut voluptatem fugit sed blanditiis labore! Eius. Build a chatbot in minutes using Large Language Model.",
	},
];

export const genaiChallenges = [
	{
		title: "Identification of Use cases",
		overview:
			"How to get started is a big challenge for enterprises as Generative AI offers numerous capabilities, but understanding Return on Investment and exploring needle-moving use cases is a big challenge.",
	},
	{
		title: "Use case Prioritization",
		overview:
			"Prioritizing uses cases that improve life of your employees and customers is important and appears easy for POC but may not be feasible in the production.",
	},
	{
		title: "POC to production",
		overview:
			"How to transition a Proof of concept to a production-grade application that adheres to enterprise standard of security, scalability and cost controls.",
	},
	{
		title: "Navigating the maze of SaaS services",
		overview:
			"There are many SaaS APIs and Open-source options available for building blocks of Generative AI, and it is essential to use the right tool for your use case.",
	},
	{
		title: "IP protection and Security",
		overview:
			"Recent data leak of a large enterprise,  highlights the importance of balancing enthusiasm of Generative AI with your IP protection and ensuring Security standards are adhered to.",
	},
	{
		title: "Legal Implications",
		overview:
			"Generative AI applications use crowd-sourced internet-scale text and image datasets. How to ensure that using APIs or certain models does not get you into legal situations. The design needs to ensure that whatever APIs and models are used should meet the local regulations.",
	},
	{
		title: "Responsible AI",
		overview:
			"Generative AI has a problem of hallucination and bias that can harm brand trust or lose business.",
	},
	{
		title: "Skills",
		overview:
			"Many Enterprises start their Generative AI journey without having adequate domain and technical skills, impacting the on-time delivery and budgets of Generative AI Projects.",
	},
];

export const genaiSubServicesData = [
	{
		name: "Generative AI Foundations",
		services: [
			{
				title: "Training and Enablement",
				icon: <IconSeven width={40} height={40} color={color} />,
				keyPoints: [
					"Introduction to Generative AI",
					"Introduction to Amazon Bedrock",
					"Prompt Engineering Basics",
					"Introduction to Vector databases",
				],
			},
			{
				title: "Workshops",
				icon: <IconEighteen width={40} height={40} color={color} />,
				keyPoints: [
					"Building a Retrieval Augmented Generation (RAG) application",
					"Document Management Understanding with Generative AI",
					"Foundational Model finetuning",
					"Generative AI Evaluation",
				],
			},
			{
				title: "Advisory",
				icon: <IconEight width={40} height={40} color={color} />,
				keyPoints: [
					"Business and technology discovery",
					"Business process evaluation",
					"Business value assessment",
					"Use case brainstorming",
					"Competitive assessment",
				],
			},
		],
	},
	{
		name: "Rapid Prototyping",
		services: [
			{
				title: "Retrieval Augmented GenerationI(RAG)",
				icon: <IconNine width={40} height={40} color={color} />,
				keyPoints: [
					"Propose RAG architecture",
					"Perform data preparation",
					"Set up vector indexing pipeline",
					"Propose and set up a LLM pipeline",
				],
			},
			{
				title: "Prompt Engineering and Prompt Tuning",
				icon: <IconTen width={40} height={40} color={color} />,
				keyPoints: [
					"Qualified prompt engineers  to create training datasets",
					"Provide content creators to review prompt responses",
					"Rank, Classify prompt responses",
					"Provide human in the loop services",
				],
			},
			{
				title: "Chatbot Integration",
				icon: <IconNineteen width={40} height={40} color={color} />,
				keyPoints: [
					"Assess your business processes",
					"Propose Gen AI capabilities to improve applications",
					"Build secure chatbot interface",
					"Set up Human review workflows",
				],
			},
		],
	},
	{
		name: "Advanced Services",
		services: [
			{
				title: "Model finetuning with RLHF",
				icon: <IconEleven width={40} height={40} color={color} />,
				keyPoints: [
					"Create a curated dataset",
					"Data preprocessing",
					"Finetune a SOTA OSS model or SAAS api",
					"Benchmark multiple models against human evaluation score",
					"Set up training pipeline automation",
				],
			},
			{
				title: "Model Pretraining",
				icon: <IconTwelve width={40} height={40} color={color} />,
				keyPoints: [
					"Understand use case, dataset, budget",
					"Recommend model, platform and cost",
					"Prepare data and develop a LLM recipe",
					"Perform LLM training and model evaluation against benchmarks",
				],
			},
			{
				title: "LLMOps",
				icon: <IconFour width={40} height={40} color={color} />,
				keyPoints: [
					"Exploratory data analysis (EDA)",
					"Data prep and prompt engineering",
					"Model fine-tuning",
					"Model review and governance",
					"Model inference and serving",
					"Model monitoring with human feedback",
				],
			},
		],
	},
];

export const ourGenaiExpertiseData = [1, 2, 3, 4, 5, 6, 7, 8];

export const genaiCustomerStoriesData = [
	{
		title: "Largest Insurance in EMEA",
		points: [
			{
				title: "Challenge",
				description:
					"Processes over 10M+ claims per year and have 1000s of customer support staff which adds to bottom line of the customer.",
			},
			{
				title: "Solution",
				description:
					"Built a customized OCR system powered by Amazon Textract and integrated the pipeline using Karini's Generative AI recipes to build a conversational AI to help customer support to better equip to handle customers.",
			},
			{
				title: "Benefits",
				description:
					"Reduced time per call by 2 mins on average, saving projected millions of Euros per year.",
			},
		],
		picture: "....................",
	},
	{
		title: "Promising Fintech Loan Processor",
		points: [
			{
				title: "Challenge",
				description:
					"Fintech company has massive customer support staff who have to pour through large amounts of data to understand customer-360 to be able to offer defaulters better strategy to keep up with payments.",
			},
			{
				title: "Solution",
				description:
					"Karini built a document understanding solution using Generative AI using LLAMAv2 coupled with classical ML to provide customer service agents with better-tailored strategy for a customer, on-the-spot risk assessed offers and promotions.",
			},
			{
				title: "Benefits",
				description:
					"Customer NPS score jumped by 6% after deployment and also Generative AI generated offers acceptance improved by 15%.",
			},
		],
		picture: "....................",
	},
	{
		title: "Hot Ad-Tech exchange",
		points: [
			{
				title: "Challenge",
				description:
					"Ad exchange runs occasional deal campaigns and Ad publishers have to spend enormous amount of time pouring through data to understand CTRs, next best actions, high propensity targets.",
			},
			{
				title: "Solution",
				description:
					"Karini built a custom Agentic Generative AI pipeline using Azure OpenAI’s GPT-4 model to build Text to SQL solution to provide self-service conversational AI.",
			},
			{
				title: "Benefits",
				description:
					"The conversational AI reduced the need for valuable analysts time from 6 weeks to 1 day to compile an exhaustive report and also gather new insights.",
			},
		],
		picture: "....................",
	},
];
