import Image from "next/image";
import React from "react";

const SectionOne = ({ blogData }) => {
	// console.log("iii", blogData);
	return (
		<section className="bg-white px-4 sm:px-10 py-10">
			<div className="max-w-screen-sm mx-auto space-y-10">
				<div className="space-y-8">
					<h1 className="text-black text-xl md:text-3xl font-semibold text-left">
						{/* {blogData?.title} */}
						Industrializing Generative AI with “Merlin” platform
					</h1>
					<div className="space-y-6">
						<div className="space-y-1">
							<h2 className="text-lg text-black font-medium">
								Hype of Generative AI
							</h2>
							<p className="text-base text-secondary-700">
								Generative AI is not just a fleeting trend; it&rsquo;s a
								transformative force that&apos;s been captivating global
								interest. Comparable in significance to the dawn of the
								internet, its influence extends across various domains, altering
								the way we search, communicate, and leverage data. From
								enhancing business processes to serving as an academic guide or
								a tool for crafting articulate emails, its applications are
								vast. Developers have even begun to favor it over traditional
								resources for coding assistance. The term Retrieval Augmented
								Generation (RAG), introduced by Meta in 2020(
								<a href="https://ai.meta.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/">
									1
								</a>
								), is now familiar in the corporate world. However, the
								deployment of such technologies at an enterprise level often
								encounters hurdles like task-specificity, accuracy, and the need
								for robust controls.
							</p>
						</div>
						<div className="space-y-1">
							<h2 className="text-lg text-black font-medium">
								Why enterprises struggle with Industrializing Generative AI
							</h2>
							<p className="text-base text-secondary-700">
								Despite the enthusiasm, enterprises are grappling with the
								practicalities of adopting Generative AI.
							</p>
						</div>
						<div className="space-y-2">
							<p className="text-lg text-black">
								According to survey by{" "}
								<a
									href="https://cnvrg.io/wp-content/uploads/2023/11/ML-Insider-Survey_2023_WEB.pdf"
									target="_blank"
									className="text-blue-500 hover:underline"
								>
									MLInsider
								</a>
								,
							</p>
							<ol
								start={1}
								className="text-base text-secondary-700 space-y-2"
								style={{ listStyle: "inside", listStyleType: "revert" }}
							>
								<li>
									62% of AI professionals continue to say it is{" "}
									<strong>difficult to execute successful AI</strong> projects.
									The larger the company, the more difficult it is to execute a
									successful AI project.
								</li>
								<li>
									<strong>Lack of expertise</strong>, budget and finding AI
									talent are the top challenges organizations are facing when it
									comes to executing ML programs
								</li>
								<li>
									<strong>
										Only 25% of organizations have deployed Generative AI
									</strong>{" "}
									models to production in the past year{" "}
								</li>
								<li>
									Of those who have deployed Generative AI models in the past
									year, several benefits have been realized. About half said,
									they have seen{" "}
									<strong>improved customer experiences(58%)</strong>, improved
									efficiency(53%)
								</li>
							</ol>
							<p className="text-base text-secondary-700">
								In summary, Generative AI offers massive opportunities to
								enterprise but due to skills, requirements for enterprise
								security and governance, they are still behind in the adoption
								curve.
							</p>
						</div>
						<div className="space-y-1">
							<h2 className="text-lg text-black font-medium">
								Industrialization of Generative AI applications
							</h2>
							<p className="text-base text-secondary-700">
								The quest for enterprise-grade Generative AI applications is now
								easier, thanks to SaaS-based model APIs and packages like
								Langchain and Llama Index. Yet, scaling these initiatives across
								an enterprise remains challenging. Historical trends show that
								companies thrive when utilizing a centralized platform that
								promotes reusability and governance, a practice seen in the
								formation of AI and ML platform teams.
							</p>
						</div>
						<div className="flex justify-center">
							<Image
								src={"/assets/images/blogs/blog1-img1.jpg"}
								height={200}
								width={500}
								alt="blog-img"
								className="rounded"
							/>
						</div>
						<div className="space-y-2">
							<p className="text-lg text-black">
								Enterprises should think about Gen AI platforms with the above
								four layered cake,
							</p>
							<ol
								start={1}
								className="text-base text-secondary-700 space-y-2"
								style={{ listStyle: "inside", listStyleType: "revert" }}
							>
								<li>
									<strong>Infrastructure</strong> - Most companies have a
									primary cloud infrastructure and typically utilize Gen AI
									building blocks offered by the cloud.
								</li>
								<li>
									<strong>Capabilities</strong> - These are set of foundational
									building block services offered by cloud native (e.g.
									Opensearch, Azure OpenAI) or 3rd party SAAS products(e.g.
									Milvus Vector search)
								</li>
								<li>
									<strong>Reusable services</strong> - Central Gen AI teams
									typically have to build a RAG (Retrieval Augmented
									Generation), Fine Tuning or Model Hub Services that can be
									readily consumed with enterprise guard-rails
								</li>
								<li>
									<strong>Use cases</strong> - Using the reusable services, use
									cases can be deployed and integrated with a variety of
									applications such as Customer support bot, summarizing
									customer reviews and more.
								</li>
							</ol>
							<p className="text-base text-secondary-700">
								Many Data, ML and AI vendors are snapping these capabilities on
								top of their existing platform. ML Platforms that start with
								supervised labels and depend on model building &amp; deployment
								aspect of MLOps, Generative AI platforms begin with a
								pre-trained Open source model(e.g. Llama2) or proprietary SAAS
								model(GPT4), focuses on capabilities to contextualize Large
								Language models and deploy capabilities to enable smarts in
								applications such as Copilots or Agents. Hence we propose a
								radically different approach to fulfill the promise of
								industrialized Gen AI that focuses on LLMOps development loop (
								Connect to Model Hub -&gt; Contextualize Model for Data -&gt;
								Human Evaluation )
							</p>
						</div>
						<div className="space-y-1">
							<h2 className="text-lg text-black font-medium">
								Introducing Merlin - Gen AI Platform for all
							</h2>
							<p className="text-base text-secondary-700">
								Karini AI presents &quot;Merlin,&quot; a platform designed to
								revolutionize enterprise operations by integrating proprietary
								data with advanced language models, effectively creating a
								digital co-pilot for every user. Merlin simplifies the process,
								offering intuitive Gen AI templates that allow rapid application
								development. The platform offers an array of data processing
								tools and adheres to LLMOps practices for deploying Models,
								Data, and Copilots. It also provides customization options and
								incorporates continuous feedback mechanisms to enhance the
								quality of RAG implementations.
							</p>
						</div>
						<div className="flex justify-center">
							<Image
								src={"/assets/images/blogs/blog1-img2.jpg"}
								height={200}
								width={500}
								alt="blog-img"
								className="rounded"
							/>
						</div>
						<div className="space-y-1">
							<h2 className="text-lg text-black font-medium">Conclusion</h2>
							<p className="text-base text-secondary-700">
								Merlin is designed to accelerate experimentation, expedite
								market delivery, and bridge the generative AI adoption gap,
								enabling businesses to harness the full potential of this
								groundbreaking technology. Try out the platform by quick{" "}
								<a href="https://app.karini.ai/signup">sign up</a>
							</p>
						</div>
						<div className="space-y-1 border p-5 rounded">
							<p className="text-lg text-black font-medium">About the Author</p>
							<p className="text-base text-secondary-700">
								<a href="https://www.linkedin.com/in/deepali-rajale-958a267/">
									Deepali Rajale
								</a>{" "}
								is a founder of Karini AI with a mission to democratize
								generative AI across enterprises. She enjoys blogging about
								Generative AI, coaching customers to optimize Generatie AI
								practice. She loves to spend time outdoors camping with her
								family and also a poet and has published a book.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionOne;
