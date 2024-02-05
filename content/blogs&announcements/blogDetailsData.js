let type = {
	heading: "heading",
	paragraph: "paragraph",
	list: "list",
	image: "image",
	gif: "gif",
};

let fontSize = {
	small: "small",
	medium: "medium",
	large: "large",
};

let fontWeight = {
	normal: "normal",
	medium: "medium",
	bold: "bold",
};

let fontStyle = {
	normal: "not-italic",
	italic: "italic",
};

export const blogDetailsData = [
	{
		type: "blog",
		id: "industrialize-generative-ai",
		breadCrumbTitle: "Industrialize Generative AI",
		title: "Industrialize Generative AI",
		publishedOn: "January 2, 2024",
		author: "Deepali Rajale",
		timeToRead: "5 min read",
		SEO_data: {
			title: "Industrialize Generative AI",
			content:
				"Discover how to overcome the challenges of implementing Generative AI in enterprises and unlock its potential. Explore the Generative AI platform by Karini AI for rapid application development and enhanced business operations. Try it now!",
			canonicalLink: "https://www.karini.ai/blogs/industrialize-generative-ai",
			schemaMarkup: {
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				"mainEntityOfPage": {
					"@type": "WebPage",
					"@id": "https://www.karini.ai/blogs/industrialize-generative-ai"
				},
				"headline": "Industrialize Generative AI",
				"description": "Generative AI",
				"image": "https://www.karini.ai/_next/image?url=%2Fassets%2Fimages%2Fblogs%2FIndustrialize-Generative-AI.png&w=640&q=75",
				"author": {
					"@type": "Person",
					"name": "Deepali Rajale"
				},
				"publisher": {
					"@type": "Organization",
					"name": "Karini Ai",
					"logo": {
						"@type": "ImageObject",
						"url": "https://www.karini.ai/"
					}
				},
				"datePublished": "2024-01-02"
			},
		},
		sections: [
			{
				group: true,
				data: [
					{
						type: type.heading,
						fontSize: fontSize.large,
						fontWeight: fontWeight.medium,
						fontStyle: fontStyle.normal,
						value: "Hype of Generative AI",
					},
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"Generative AI is not just a fleeting trend; it's atransformative force that&apos;s been captivating global interest. Comparable in significance to the dawn of the internet, its influence extends across various domains, altering the way we search, communicate, and leverage data. From enhancing business processes to serving as an academic guide or a tool for crafting articulate emails, its applications are vast. Developers have even begun to favor it over traditional resources for coding assistance. The term Retrieval Augmented Generation (RAG), introduced by Meta in 2020 (<a class='underline text-blue-600' target='_blank' href='https://ai.meta.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/'>1</a>), is now familiar in the corporate world. However, the deployment of such technologies at an enterprise level often encounters hurdles like task-specificity, accuracy, and the need for robust controls.",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.heading,
						fontSize: fontSize.large,
						fontWeight: fontWeight.medium,
						fontStyle: fontStyle.normal,
						value:
							"Why enterprises struggle with Industrializing Generative AI",
					},
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"Despite the enthusiasm, enterprises are grappling with the practicalities of adopting Generative AI.",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							'According to survey by	<a href="https://cnvrg.io/wp-content/uploads/2023/11/ML-Insider-Survey_2023_WEB.pdf" target="_blank" class="text-blue-600 hover:underline"> MLInsider</a>,',
					},
					{
						type: type.list,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"<li>62% of AI professionals continue to say it is <strong>difficult to execute successful AI</strong> projects. The larger the company, the more difficult it is to execute a successful AI project.</li><li><strong>Lack of expertise</strong>, budget, and finding AI talent are the top challenges organizations are facing when it comes to executing ML programs.</li><li><strong>Only 25% of organizations have deployed Generative AI</strong> models to production in the past year.</li><li>Of those who have deployed Generative AI models in the past year, several benefits have been realized. About half said they have seen <strong>improved customer experiences (58%)</strong> and improved efficiency (53%).</li>",
					},
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"In summary, Generative AI offers massive opportunities to enterprise but due to skills, requirements for enterprise security and governance, they are still behind in the adoption curve.",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.heading,
						fontSize: fontSize.large,
						fontWeight: fontWeight.medium,
						fontStyle: fontStyle.normal,
						value: "Industrialization of Generative AI applications",
					},
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"The quest for enterprise-grade Generative AI applications is now easier, thanks to SaaS-based model APIs and packages like Langchain and Llama Index. Yet, scaling these initiatives across an enterprise remains challenging. Historical trends show that companies thrive when utilizing a centralized platform that promotes reusability and governance, a practice seen in the formation of AI and ML platform teams.",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.image,
						path: "/assets/images/blogs/blog1_img1.png",
						caption: "",
						width: 600,
						height: 600,
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"Enterprises should think about Gen AI platforms with the above four layered cake,",
					},
					{
						type: type.list,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"<ol style='list-style: inside; list-style-type: decimal;'><li><strong>Infrastructure</strong> - Most companies have a primary cloud infrastructure and typically utilize Gen AI building blocks offered by the cloud.</li><li><strong>Capabilities</strong> - These are set of foundational building block services offered by cloud native (e.g. Opensearch, Azure OpenAI) or 3rd party SAAS products(e.g. Milvus Vector search)</li><li><strong>Reusable services</strong> - Central Gen AI teams typically have to build a RAG (Retrieval Augmented Generation), Fine Tuning or Model Hub Services that can be readily consumed with enterprise guard-rails</li><li><strong>Use cases</strong> - Using the reusable services, use cases can be deployed and integrated with a variety of applications such as Customer support bot, summarizing customer reviews and more.</li></ol>",
					},
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"Many Data, ML and AI vendors are snapping these capabilities on top of their existing platform. ML Platforms that start with supervised labels and depend on model building & deployment aspect of MLOps, Generative AI platforms begin with a pre-trained Open source model(e.g. Llama2) or proprietary SAAS model(GPT4), focuses on capabilities to contextualize Large Language models and deploy capabilities to enable smarts in applications such as Copilots or Agents. Hence we propose a radically different approach to fulfill the promise of industrialized Gen AI that focuses on LLMOps development loop ( Connect to Model Hub -> Contextualize Model for Data -> Human Evaluation )",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.heading,
						fontSize: fontSize.large,
						fontWeight: fontWeight.medium,
						fontStyle: fontStyle.normal,
						value: "Introducing Generative AI Platform for all",
					},
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							'Karini AI presents "Generative AI platform", designed to revolutionize enterprise operations by integrating proprietary data with advanced language models, effectively creating a digital co-pilot for every user. Karini simplifies the process, offering intuitive Gen AI templates that allow rapid application development. The platform offers an array of data processing tools and adheres to LLMOps practices for deploying Models, Data, and Copilots. It also provides customization options and incorporates continuous feedback mechanisms to enhance the quality of RAG implementations.',
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.image,
						path: "/assets/images/blogs/blog1_img2.png",
						caption: "",
						width: 600,
						height: 600,
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.heading,
						fontSize: fontSize.large,
						fontWeight: fontWeight.medium,
						fontStyle: fontStyle.normal,
						value: "Conculsion",
					},
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"Karini AI accelerates experimentation, expedite market delivery, and bridge the generative AI adoption gap, enabling businesses to harness the full potential of this groundbreaking technology.",
					},
				],
			},
		],
		aboutAuthor: {
			title: "About the author",
			authorImage: "/assets/images/team_members/deepali-rajale.png",
			authorInfo:
				'<a	class="text-blue-600 hover:underline" target="_blank" href="https://www.linkedin.com/in/deepali-rajale-958a267/"> Deepali Rajale </a>is a founder of Karini AI with a mission to democratize generative AI across enterprises. She enjoys blogging about	Generative AI, coaching customers to optimize Generatie AI practice. She loves to spend time outdoors camping with her family and also a poet and has published a book.',
		},
	},
	{
		type: "blog",
		id: "navigating-genaiops-in-enterprises",
		breadCrumbTitle: "Navigating GenAIOps in Enterprises",
		title: "Navigating GenAIOps in Enterprises: Challenges and Best Practices - Version 1.0",
		subTitle: "Version 1.0",
		publishedOn: "January 31, 2024",
		author: "Deepali Rajale",
		timeToRead: "10 min read",
		version: "1.0",
		SEO_data: {
			title: "Navigating GenAIOps in Enterprises: Challenges and Best Practices",
			content:
				"Enterprises are adopting Generative AI to help solve many complex use cases with natural language instructions. Building a Gen AI application involves multiple components such as an LLM, data sources, vector store, prompt engineering, and RAG.",
			canonicalLink: "https://www.karini.ai/blogs/navigating-genaiops-in-enterprises",
			schemaMarkup: {
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": "https://www.karini.ai/blogs/navigating-genaiops-in-enterprises",
				},
				headline: "Navigating GenAIOps in Enterprises: Challenges and Best Practices",
				description:
					"Enterprises are adopting Generative AI to help solve many complex use cases with natural language instructions. Building a Gen AI application involves multiple components such as an LLM, data sources, vector store, prompt engineering, and RAG.",
				image:
					"https://www.karini.ai/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog1-img2.jpg&w=640&q=75",
				author: {
					"@type": "Organization",
					name: "karini",
					url: "https://www.karini.ai/",
				},
				publisher: {
					"@type": "Organization",
					name: "Deepali Rajale",
					logo: {
						"@type": "ImageObject",
						url: "",
					},
				},
				datePublished: "2023-12-25",
			},
		},
		tags: "Version 1.0",
		sections: [
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"Enterprises are adopting Generative AI to help solve many complex use cases with natural language instructions. Building a Gen AI application involves multiple components such as an LLM, data sources, vector store, prompt engineering, and RAG. GenAIOps defines operational best practices for the holistic management of DataOps (Data Operations), LLMOps (Large Language Model Life cycle management), and DevOps (Development and Operations) for building, testing, and deploying generative AI applications.",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.heading,
						fontSize: fontSize.large,
						fontWeight: fontWeight.medium,
						fontStyle: fontStyle.normal,
						value:
							"Challenges in GenAIOps automation",
					},
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"While pilot projects using Generative AI can start effortlessly, most enterprises need help progressing beyond this phase. According to Everest Research, a staggering 50%+ projects do not move beyond the pilots as they face hurdles due to the absence of established GenAIOps practices. Each step presents unique challenges, from connecting to enterprise data to navigating the complexities of embedding algorithms and managing query phases. These include:",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.image,
						path: "/assets/images/blogs/GenAIOps_challenges.png",
						caption: "",
						width: 1300,
						height: 1100,
					},
				]
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"<ol style='list-style: inside; list-style-type: decimal;'><li><strong>Access to Enterprise Data</strong>: This involves creating connectors to various storage solutions and databases, considering different ingestion formats like files, tabular data, or API responses. Unlike traditional ETL, extraction, cleaning, masking, and chunking techniques require special attention, especially when dealing with complex structures like tables in PDFs or removing unwanted HTML tags from web crawls.</li></ol>",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"<ol start='2' style='list-style: inside; list-style-type: decimal;'><li><strong>Embedding Algorithms</strong>: The constantly evolving nature of embedding algorithms <a href='https://huggingface.co/spaces/mteb/leaderboard' target='_blank' class='text-blue-600 hover:underline'> (Refer MTEB Leaderboard)</a> means it's crucial to experiment with the top models to select the most effective one for your needs. Failure to do so can adversely impact the search process.</li></ol>",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='3' style='list-style: inside; list-style-type: decimal;'><li><strong>Query Phase Management</strong>: This phase can be vulnerable to adversarial actors who may try to 'jailbreak' <a href='https://www.jailbreakchat.com/' target='_blank' class='text-blue-600 hover:underline'> (refer to jailbreakchat)</a> the prompts or overwhelm the system, impacting other users and potentially causing a cost spike.</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='4' style='list-style: inside; list-style-type: decimal;'><li><strong>Chunk Retrieval Process</strong>:  For the chunk retrieval process, the similarity search may not retrieve adequate information or be unable to retrieve matching chunks, leading to insufficient context for comprehensive and relevant answers. Advanced retrieval chains are required to augment prompts with personalized context. (e.g., What are claims exclusions for “my” insurance plan? )</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='5' style='list-style: inside; list-style-type: decimal;'><li><strong>Prompt Efficiency</strong>: Open source LLMs are catching up fast with proprietary LLMs in language understanding, as evident in the <a href='https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard' target='_blank' class='text-blue-600 hover:underline'> open LLMs leaderboard</a>. Hence, writing efficient prompts is very important to get a relevant and comprehensive answer. Bad prompts can either confuse the LLMs or lead to inadequate responses.</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='6' style='list-style: inside; list-style-type: decimal;'><li><strong>Understanding the Enterprise Domain</strong>: While Generative AI effectively addresses numerous inquisitive challenges within enterprises, Large Language Models (LLMs) often struggle to grasp the specific nuances of individual enterprise domains. LLMs are trained on publicly available datasets by crawling the world wide web, but enterprise data is behind firewalls; hence, LLMs may not understand a specific internal term used within a business, leading to an “I don't know” response or a response related to a similar term in Wikipedia dictionary leading to hallucination.</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='7' style='list-style: inside; list-style-type: decimal;'><li><strong>Content Safety</strong>: LLMs may spout toxic or unsafe content without proper guardrails, leading to brand reputation issues. The brand reputation concern is genuine, as reported by Chevrolet’s public AI chatbot<a href='https://www.msn.com/en-us/money/companies/a-chevrolet-dealer-offered-an-ai-chatbot-on-its-website-it-told-customers-to-buy-a-ford/ar-AA1lL6KE?ocid=entnewsntp&cvid=b258df25642b448c8467af9a3bf4c362&ei=18' target='_blank' class='text-blue-600 hover:underline'>(MSN)</a>, which produced results touting Ford's products. Imagine building these AI chatbots for children or other uninformed or vulnerable populations that may be led astray with misinformation.</li></ol>"
					},

				],
			},
			{
				group: true,
				data: [
					{
						type: type.image,
						path: "/assets/images/blogs/msn_chevy_chatbot_crop.png",
						caption: "",
						width: 200,
						height: 400,
					},
				]
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='8' style='list-style: inside; list-style-type: decimal;'><li><strong>User Experience</strong>: Most Gen AI systems do not focus on end-user experience. Chat GPT has set the standard for user experience, but OpenAI has control of the end-to-end pipeline, including the model. Lack of good experiences, such as streaming responses, A/B testing framework, lack of exhaustive user feedback mechanism, adequate seeding questions, or lack of follow-up questions, may diminish user engagement.</li></ol>"
					},

				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "Getting started with GenAIOps automation is another hurdle due to its technical complexity, specialized skills, and the evolving nature of the field. Organizations must prepare for a learning curve and potentially invest in training to tackle these challenges effectively. A typical enterprise may require 15+ specialized applications to encompass different departments and external applications. Let's dive deep into GenAIOps' best practices to tackle these challenges."
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.heading,
						fontSize: fontSize.large,
						fontWeight: fontWeight.medium,
						fontStyle: fontStyle.normal,
						value: "GenAIOps Best practices for enterprises",
					},
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"Effective GenAIOps operationalization requires skills such as AI engineers, safety and security experts, and domain experts. The diagram below provides best practices for a typical RAG workflow depicted in the challenges section. Let's dive into the best practices below,",
					},

				],
			},
			{
				group: true,
				data: [
					{
						type: type.image,
						path: "/assets/images/blogs/GenAIOps_best_practices.png",
						caption: "",
						width: 1300,
						height: 1100,
					},
				]
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol style='list-style: inside; list-style-type: decimal;'><li><strong>Data Management</strong>: Utilize standard storage, database, and SaaS application interfaces to minimize bulk distributed data replication and incremental ingestion. To make it LLM-ready, utilize distributed runtimes for extraction, cleaning, masking, and chunking data. Maintain a copy of source metadata to the vector store to ensure downstream querying systems can use it for pre-filtering for more relevant answers.</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='2' style='list-style: inside; list-style-type: decimal;'><li><strong>Model Selection</strong>: Depending on your dataset, use the most appropriate embedding model for your use case. Try at least the top 2 embedding model techniques <a href='https://huggingface.co/spaces/mteb/leaderboard' target='_blank' class='text-blue-600 hover:underline'>(Refer MTEB Leaderboard)</a> during the experimentation phase to understand search relevance based on human-generated standard questions and answer pairs. Utilize synthetic questions generated by LLMs if you don't have human-generated question-answer pairs.</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='3' style='list-style: inside; list-style-type: decimal;'><li><strong>Query Management</strong>: To prevent intentional or unintentional adverse behavior, use a suitable classification model to block questions and provide canned responses. Monitor adverse prompts for trends and take appropriate action to improve classification methods iteratively. To safeguard against spam attacks, enable user- and token-based throttling to limit attack vectors.</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='4' style='list-style: inside; list-style-type: decimal;'><li><strong>Retrieval Optimization</strong>: Use user metadata for pre-filtering to produce a narrower set for semantic search for optimal retrieval. Many vector databases, such as OpenSearch, MongoDB, and Pinecone, provide hybrid search capabilities. Depending on your source datasets, use additional retrieval chains to retrieve the entire or partial document to provide adequate context for your LLM query. For example, in an R&D chatbot, if the user asks to summarize a particular science paper, your retrieval chain must retrieve the entire science paper based on matching chunks.</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='5' style='list-style: inside; list-style-type: decimal;'><li><strong>Building Efficient System Prompts</strong>: Building system prompts is the most critical task to get the most optimal response. Due to the lack of a universal framework for prompts, ensure you follow the standards most appropriate based on LLM or your task (e.g., conversation, summarization, or classification). Maintain a library of best practice prompts for enterprise-specific use cases to benefit others.  Including and enabling domain experts to design system prompts is essential as they are intimately familiar with datasets and expected outputs. Provide a prompt playground so domain experts can intuitively write system prompts, including examples, “Do not” rules, and expected response format. Provide a playground to quickly compare against authorized models for your enterprise. Maintain versions of the prompts so you can promote the best version to production.</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='6' style='list-style: inside; list-style-type: decimal;'><li><strong>Model Experimentation</strong>: Many enterprises start with SaaS model providers such as Azure OpenAI or Amazon Bedrock. Open-source models such as Llama2, Mistral, and MPT and their variants are catching up fast. Try out your application against at least 2-3 leading SOTA models to understand response time, domain understanding, and quality of response. Typical enterprise applications may not need the bells and whistles of multi-headed SaaS models, so using open-source models may be as effective as you scale out and offer a better price per performance. For the rapid testing, build an evaluation script to utilize the”LLM as a judge” approach to compare the responses' relevance, comprehensiveness, and accuracy. If the general purpose model does not provide relevant and comprehensive responses, resort to domain-specific fine-tuning or instruction fine-tuning techniques and employ the fine-tuned model in your RAG.</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='7' style='list-style: inside; list-style-type: decimal;'><li><strong>Content Safety</strong>: To prevent harmful, toxic responses, augment system prompts to instruct LLMs to redact harmful content from the response. Employ additional controls using other classifiers to block harmful responses entirely to ensure trust and safety. Use a standard set of questions for automated testing to ensure RAGs are regression tested to account for any changes in LLM, system prompts, or changes in data.</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "<ol start='8' style='list-style: inside; list-style-type: decimal;'><li><strong>Enhancing User Experience</strong>: Ultimately, user experience is essential to increase engagement and attract new users. Add streaming if you are building a conversational system, provide appropriate feedback options so users can rate responses, and volunteer to provide correct responses to build the knowledge base. Provide custom instructions, seeding questions to start the conversation, and follow-up questions. Generative AI is rapidly evolving, so it is vital to continue to monitor user feedback and incorporate additional capabilities such as multi-modal (image and text)</li></ol>"
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value: "Experts in AI engineering, cloud computing, security, data engineering, and UX engineering built Karini’s Generative AI platform. The combined expertise and platform design provide built-in GenAIOps best practices. These best practices enable enterprises to execute rapid prototyping, production deployment, and continuous monitoring. The Generative AI application's observability capabilities, evaluation, and central performance monitoring allow continuous quality and enterprise governance improvement."
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.heading,
						fontSize: fontSize.large,
						fontWeight: fontWeight.medium,
						fontStyle: fontStyle.normal,
						value: "Conculsion",
					},
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"Staying at the forefront of scientific advancement and the evolving landscape of models, Karini AI eliminates technical debt. Our no-code approach to Generative AI application deployment ensures you don’t compromise on quality or speed in bringing products to market. Karini AI is adaptable and perfect for various applications, including virtual assistants, text generation, summarization, Q&A, semantic search, classification, and image creation.",
					},
				],
			},
		],
		aboutAuthor: {
			title: "About the author",
			authorImage: "/assets/images/team_members/deepali-rajale.png",
			authorInfo:
				'<a	class="text-blue-600 hover:underline" target="_blank" href="https://www.linkedin.com/in/deepali-rajale-958a267/"> Deepali Rajale </a>is a founder of Karini AI with a mission to democratize generative AI across enterprises. She enjoys blogging about Generative AI, coaching customers to optimize Generatie AI practice. She loves to spend time outdoors camping with her family and also a poet and has published a book.',
		},
	},
];