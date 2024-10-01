import React from "react";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const SolutionId = ({ post }) => {
	return (
		<>
			<div className="bg-stone-100 border-b">
				<div className="max-w-screen-xl mx-auto p-4 space-y-6">
					<Link href="/solutions#solutions">
						<button className="flex text-primary-600">
							<HiOutlineArrowNarrowLeft className="mr-2 h-4 w-4" />{" "}
							<span className="text-xs">Back</span>
						</button>
					</Link>
					<div className="w-full lg:flex lg:space-x-6 space-y-3 lg:space-y-0 py-5 lg:py-10">
						<div className="w-full lg:w-2/5 flex flex-col justify-between">
							<h1 className="text-black text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold tracking-tighter pb-2 leading-normal">
								{post.data.hero_title}
							</h1>
						</div>
						<div className="w-full lg:flex-1 ">
							<Image
								src={post.data.hero_image}
								alt={post.data.hero_image_alt_name}
								width={800}
								height={500}
								className="rounded-md w-[600px] lg:w-full"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-screen-xl mx-auto">
				<div className="relative px-4 flex flex-col lg:flex-row lg:space-x-6 ">
					<article className="flex-1 prose max-w-max mx-auto py-2">
						<Markdown>{post.content}</Markdown>
					</article>
					<div className="z-10 w-full lg:w-[340px] py-4">
						<div className="bg-gradient-to-r from-primary-50 to-white border border-primary-100 rounded-2xl shadow p-4 space-y-4">
							<div className="space-y-2">
								<p className="text-black font-medium text-3xl tracking-tighter leading-tight">
									Do you want to hear more from us ?
								</p>
								<p className="text-sm text-secondary-600">
									Discover how Karini AI can accelerate the creation of your
									Generative AI applications, ensuring both speed and security.
								</p>
							</div>
							<div>
								<Link
									href={"/contactus#contactus"}
									className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
								>
									<button className="w-full bg-primary-600 text-white font-medium px-3 py-2 border border-primary-600 rounded-full shadow-xl">
										Contact Us
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default SolutionId;
