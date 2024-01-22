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

export const announcementsDetailsData = [
	{
		type: "announcement",
		id: "karini-ai-launches-streaming-for-copilot",
		title: "Karini AI Launches Streaming for Copilot",
		postedOn: "January 18, 2024",
		timeToRead: "2 min read",
		SEO_data: {
			"@context": "https://schema.org",
			"@type": "NewsArticle",
			mainEntityOfPage: {
				"@type": "WebPage",
				"@id":
					"https://www.karini.ai/announcements/karini-ai-launches-streaming-for-copilot",
			},
			headline: "Karini AI Launches Streaming for Copilot",
			image:
				"https://www.karini.ai/announcements/karini-ai-launches-streaming-for-copilot",
			author: {
				"@type": "",
				name: "",
			},
			publisher: {
				"@type": "Organization",
				name: "",
				logo: {
					"@type": "ImageObject",
					url: "",
				},
			},
			datePublished: "2024-01-18",
		},
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
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
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
						fontWeight: fontWeight.normal,
						fontStyle: fontStyle.normal,
						value:
							"We are excited to share that Karini AI’s CoPilot now supports the streaming experience for almost all SOTA model providers, citations (references), and optional follow-up questions. The feature is vital as it delivers a uniform user experience when enterprises switch between model providers for A/B testing and model upgrades. Available now and out of the box without any additional setup. See it in action below and contact us for more information.",
					},
				],
			},

			{
				group: true,
				data: [
					{
						type: type.gif,
						path: "/gif/karini_copilot_streaming_demo.gif",
						caption: "",
						width: 600,
						height: 700,
					},
				],
			},
		],
	},
];
