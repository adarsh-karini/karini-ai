let type = {
	heading: "heading",
	paragraph: "paragraph",
	list: "list",
	image: "image",
};

let fontSize = {
	small: "small",
	medium: "medium",
	large: "large",
};

export const announcementsDetailsData = [
	{
		type: "announcement",
		id: "karini-ai-launches-streaming-for-copilot",
		title: "Karini AI Launches Streaming for Copilot",
		postedOn: "January 18, 2024",
		timeToRead: "2 min read",
		SEO_data: {
			title: "Karini AI Launches Streaming for Copilot",
			content:
				"Karini AI is proud to announce a new feature to help businesses enhance user experiences by replacing the everlasting ellipsis with streaming responses. Following the latest trends in open-source generative artificial intelligence, this leap forward for purpose built enterprise-focused artificial intelligence using natural language questions and answers is evolving CoPilot to the next level.",
			canonicalLink:
				"https://www.karini.ai/blogs/karini-ai-launches-streaming-for-copilot",
			schemaMarkup: {
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id":
						"https://www.karini.ai/blogs/karini-ai-launches-streaming-for-copilot",
				},
				headline: "Karini AI Launches Streaming for Copilot",
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
						type: type.paragraph,
						fontSize: fontSize.medium,
						value:
							"Karini AI is proud to announce a new feature to help businesses enhance user experiences by replacing the everlasting ellipsis	with streaming responses. Following the latest trends in open-source generative AI, this leap forward for purpose built enterprise-focused AI using natural language questions and answers is evolving copilot to the next level.",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						value:
							"Today, ChatGPT has set the tone and standard for the copilot user experience as it gives us a conversational impression due to the streaming tokens appearing on the screen. Creating the streaming experience with large models like GPT4 is more straightforward but, at the same time, challenging in enterprise environments where you may need a wide array of state-of-the-art (SOTA) model providers ranging from open source to SaaS. Each LLM is nuanced in its capabilities to stream tokens and the	quality of response. So, it’s tough to build a uniform user	experience across the ecosystem of model providers, diminishing	and degrading users’ engagement.",
					},
				],
			},
			{
				group: true,
				data: [
					{
						type: type.paragraph,
						fontSize: fontSize.medium,
						value:
							"We are excited to share that Karini AI’s CoPilot now supports the streaming experience for almost all SOTA model providers, citations (references), and optional follow-up questions. The feature is vital as it delivers a uniform user experience when enterprises switch between model providers for A/B testing and model upgrades. Available now and out of the box without any additional setup. See it in action below and contact us for more information.",
					},
				],
			},

			{
				group: true,
				data: [
					{
						type: "gif",
						path: "/gif/karini_copilot_streaming_demo.gif",
						// caption: "blog image",
						width: 600,
						height: 700,
					},
				],
			},
		],
	},
];
