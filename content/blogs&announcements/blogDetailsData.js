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
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": "https://www.karini.ai/blogs/industrialize-generative-ai",
				},
				headline: "Industrializing Generative AI",
				description:
					"Announcing Generative AI Platform - designed to accelerate experimentation, expedite market delivery, and bridge the generative AI adoption gap, enabling businesses to harness the full potential of this groundbreaking technology.",
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
							"<li><strong>Infrastructure</strong> - Most companies have a primary cloud infrastructure and typically utilize Gen AI building blocks offered by the cloud.</li><li><strong>Capabilities</strong> - These are set of foundational building block services offered by cloud native (e.g. Opensearch, Azure OpenAI) or 3rd party SAAS products(e.g. Milvus Vector search)</li><li><strong>Reusable services</strong> - Central Gen AI teams typically have to build a RAG (Retrieval Augmented Generation), Fine Tuning or Model Hub Services that can be readily consumed with enterprise guard-rails</li><li><strong>Use cases</strong> - Using the reusable services, use cases can be deployed and integrated with a variety of applications such as Customer support bot, summarizing customer reviews and more.</li>",
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
];
