export const blogDetailsData = [
	{
		id: "industrialize-generative-ai",
		title: "Industrialize Generative AI",
		sections: [
			{
				title: "Hype of Generative AI",
				paragraph1:
					"Generative AI is not just a fleeting trend; it’s a transformative force that's been captivating global interest. Comparable in significance to the dawn of the internet, its influence extends across various domains, altering the way we search, communicate, and leverage data. From enhancing business processes to serving as an academic guide or a tool for crafting articulate emails, its applications are vast. Developers have even begun to favor it over traditional resources for coding assistance. The term Retrieval Augmented Generation (RAG), introduced by Meta in 2020(1), is now familiar in the corporate world. However, the deployment of such technologies at an enterprise level often encounters hurdles like task-specificity, accuracy, and the need for robust controls.",
			},
		],
	},
	{
		id: "highnote-emerges-stealth-54-million-funding",
		title: "Highnote Emerges from Stealth with $54 Million in Funding",
		sections: [
			{
				title: "",
				paragraph1:
					"In today’s world binge watching has become a way of life not just for Gen-Z but also for many baby boomers. Viewers are watching more content than ever. In particular, Over-The-Top (OTT) and Video-On-Demand (VOD) platforms provide a rich selection of content choices anytime, anywhere and on any screen. With proliferating content volumes, media companies are facing challenges in preparing and managing their content. This is crucial to provide a high-quality viewing experience and better monetizing content. Some of the use cases involved are,",
				points1: [
					"Finding opening of credits, Intro start, Intro end, recap start, recap end and other video segments.",
					"Choosing the right spots to insert advertisements to ensure logical pause for users.",
					"Creating automated personalized trailers by getting interesting themes from videos.",
					"Identify audio and video synchronization issues.",
				],
				paragraph2:
					"While these approaches were traditionally handled by large team of trained human workforces, many AI based approaches have evolved such as Amazon Rekognition’s video segmentation API. AI models are getting better at addressing above mentioned use cases but they are typically pre-trained on a different types of content and may not be accurate for your content library. So, what if we use AI enabled human in the loop approach to reduce cost and improve accuracy of video segmentation tasks. \n In our approach, the AI based APIs can provide weaker labels to detect video segments and send for review to trained human reviewers for creating picture perfect segments. The approach tremendously improves your media content understanding and helps generate ground truth to fine-tune AI models. Below is workflow of end-2-end solution,",
				points2: [
					"Raw media content is uploaded to Amazon S3 cloud storage. The content may need to be preprocessed or transcoded to make it suitable for streaming platform(e.g convert to .mp4, upsample or downsample)",
					"AWS Elemental MediaConvert transcodes file-based content into live stream assets quickly and reliably. Convert content libraries of any size for broadcast and streaming. Media files are transcoded to .mp4 format",
					"Amazon Rekognition Video provides an API that identifies useful segments of video, such as black frames and end credits.",
					"Tensoract Studio provides a video review workflow that can ingest labels from Amazon Rekognition. Optionally, you can skip step#3 if you want to create your own labels for training custom ML model or applying directly to your content.",
					"The content may have privacy and digital rights management requirements and protection. The Tensoract Video Segmentation workflow also supports Digital Rights Management provider integration to ensure only authorized analyst can look at the content. Moreover, the content analysts operate out of SOC2 TYPE2 compliant facilities where no downloads or screen capture are allowed.",
					"Your Media analyst team can provide throughput and quality guarantees and continue to deliver daily throughput depending on your business needs. The segmented content labels are then saved to Amazon S3 as JSON manifest format and can be directly ingested into your Media streaming platform.",
				],
				image: ".............................................",
			},
			{
				title: "Conclusion",
				overview:
					"Artificial intelligence(AI) has become ubiquitous in Media and Entertainment to improve content understanding to increase user engagement and also drive ad revenue. The AI enabled Human in the loop approach outlined is best of breed solution to reduce the human cost and provide highest quality. The approach can be also extended to other use cases such as content moderation, ad placement and personalized trailer generation.",
			},
		],
	},
	{
		id: "custom-reports-business",
		title: "Custom Reports Can Go A Long Way For Your Business",
		sections: [
			{
				title: "",
				paragraph1:
					"In today’s world binge watching has become a way of life not just for Gen-Z but also for many baby boomers. Viewers are watching more content than ever. In particular, Over-The-Top (OTT) and Video-On-Demand (VOD) platforms provide a rich selection of content choices anytime, anywhere and on any screen. With proliferating content volumes, media companies are facing challenges in preparing and managing their content. This is crucial to provide a high-quality viewing experience and better monetizing content. Some of the use cases involved are,",
				points1: [
					"Finding opening of credits, Intro start, Intro end, recap start, recap end and other video segments.",
					"Choosing the right spots to insert advertisements to ensure logical pause for users.",
					"Creating automated personalized trailers by getting interesting themes from videos.",
					"Identify audio and video synchronization issues.",
				],
				paragraph2:
					"While these approaches were traditionally handled by large team of trained human workforces, many AI based approaches have evolved such as Amazon Rekognition’s video segmentation API. AI models are getting better at addressing above mentioned use cases but they are typically pre-trained on a different types of content and may not be accurate for your content library. So, what if we use AI enabled human in the loop approach to reduce cost and improve accuracy of video segmentation tasks. \n In our approach, the AI based APIs can provide weaker labels to detect video segments and send for review to trained human reviewers for creating picture perfect segments. The approach tremendously improves your media content understanding and helps generate ground truth to fine-tune AI models. Below is workflow of end-2-end solution,",
				points2: [
					"Raw media content is uploaded to Amazon S3 cloud storage. The content may need to be preprocessed or transcoded to make it suitable for streaming platform(e.g convert to .mp4, upsample or downsample)",
					"AWS Elemental MediaConvert transcodes file-based content into live stream assets quickly and reliably. Convert content libraries of any size for broadcast and streaming. Media files are transcoded to .mp4 format",
					"Amazon Rekognition Video provides an API that identifies useful segments of video, such as black frames and end credits.",
					"Tensoract Studio provides a video review workflow that can ingest labels from Amazon Rekognition. Optionally, you can skip step#3 if you want to create your own labels for training custom ML model or applying directly to your content.",
					"The content may have privacy and digital rights management requirements and protection. The Tensoract Video Segmentation workflow also supports Digital Rights Management provider integration to ensure only authorized analyst can look at the content. Moreover, the content analysts operate out of SOC2 TYPE2 compliant facilities where no downloads or screen capture are allowed.",
					"Your Media analyst team can provide throughput and quality guarantees and continue to deliver daily throughput depending on your business needs. The segmented content labels are then saved to Amazon S3 as JSON manifest format and can be directly ingested into your Media streaming platform.",
				],
				image: ".............................................",
			},
			{
				title: "Conclusion",
				overview:
					"Artificial intelligence(AI) has become ubiquitous in Media and Entertainment to improve content understanding to increase user engagement and also drive ad revenue. The AI enabled Human in the loop approach outlined is best of breed solution to reduce the human cost and provide highest quality. The approach can be also extended to other use cases such as content moderation, ad placement and personalized trailer generation.",
			},
		],
	},
	{
		id: "highnote-emerges-stealth-54-million-funding",
		title: "Highnote Emerges from Stealth with $54 Million in Funding",
		sections: [
			{
				title: "",
				paragraph1:
					"In today’s world binge watching has become a way of life not just for Gen-Z but also for many baby boomers. Viewers are watching more content than ever. In particular, Over-The-Top (OTT) and Video-On-Demand (VOD) platforms provide a rich selection of content choices anytime, anywhere and on any screen. With proliferating content volumes, media companies are facing challenges in preparing and managing their content. This is crucial to provide a high-quality viewing experience and better monetizing content. Some of the use cases involved are,",
				points1: [
					"Finding opening of credits, Intro start, Intro end, recap start, recap end and other video segments.",
					"Choosing the right spots to insert advertisements to ensure logical pause for users.",
					"Creating automated personalized trailers by getting interesting themes from videos.",
					"Identify audio and video synchronization issues.",
				],
				paragraph2:
					"While these approaches were traditionally handled by large team of trained human workforces, many AI based approaches have evolved such as Amazon Rekognition’s video segmentation API. AI models are getting better at addressing above mentioned use cases but they are typically pre-trained on a different types of content and may not be accurate for your content library. So, what if we use AI enabled human in the loop approach to reduce cost and improve accuracy of video segmentation tasks. \n In our approach, the AI based APIs can provide weaker labels to detect video segments and send for review to trained human reviewers for creating picture perfect segments. The approach tremendously improves your media content understanding and helps generate ground truth to fine-tune AI models. Below is workflow of end-2-end solution,",
				points2: [
					"Raw media content is uploaded to Amazon S3 cloud storage. The content may need to be preprocessed or transcoded to make it suitable for streaming platform(e.g convert to .mp4, upsample or downsample)",
					"AWS Elemental MediaConvert transcodes file-based content into live stream assets quickly and reliably. Convert content libraries of any size for broadcast and streaming. Media files are transcoded to .mp4 format",
					"Amazon Rekognition Video provides an API that identifies useful segments of video, such as black frames and end credits.",
					"Tensoract Studio provides a video review workflow that can ingest labels from Amazon Rekognition. Optionally, you can skip step#3 if you want to create your own labels for training custom ML model or applying directly to your content.",
					"The content may have privacy and digital rights management requirements and protection. The Tensoract Video Segmentation workflow also supports Digital Rights Management provider integration to ensure only authorized analyst can look at the content. Moreover, the content analysts operate out of SOC2 TYPE2 compliant facilities where no downloads or screen capture are allowed.",
					"Your Media analyst team can provide throughput and quality guarantees and continue to deliver daily throughput depending on your business needs. The segmented content labels are then saved to Amazon S3 as JSON manifest format and can be directly ingested into your Media streaming platform.",
				],
				image: ".............................................",
			},
			{
				title: "Conclusion",
				overview:
					"Artificial intelligence(AI) has become ubiquitous in Media and Entertainment to improve content understanding to increase user engagement and also drive ad revenue. The AI enabled Human in the loop approach outlined is best of breed solution to reduce the human cost and provide highest quality. The approach can be also extended to other use cases such as content moderation, ad placement and personalized trailer generation.",
			},
		],
	},
];
