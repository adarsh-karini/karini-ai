import Link from "next/link";
import React from "react";

import { blogsData } from "@/content/blogs/blogsData";
import Image from "next/image";

const Blogs = () => {
	return (
		<section className="bg-white px-4 sm:px-10 py-20">
			<div className="max-w-screen-lg mx-auto space-y-10">
				<h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
					Blogs & Updates
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{blogsData.map((blog, index) => (
						<article
							key={index}
							className="h-60 overflow-hidden border border-secondary-200 bg-white shadow-md hover:scale-105 transition sm:first:col-span-2 md:first:col-span-3 sm:first:flex"
						>
							<Image
								alt="blog-img"
								src="/assets/images/blogs/blog1-img2.jpg"
								width={500}
								height={400}
								className="object-contain"
							/>

							<div className="p-4 sm:p-6 flex flex-col justify-between">
								<div>
									<Link href={blog.path}>
										<h3 className="text-base font-semibold text-secondary-900 hover:text-primary-600">
											{blog.title}
										</h3>
									</Link>

									<p className="mt-2 line-clamp-3 text-sm/relaxed text-secondary-700">
										{blog.description}
									</p>
								</div>

								<div className="flex justify-between items-end">
									<Link
										href={blog.path}
										className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600"
									>
										Read More
										<span
											aria-hidden="true"
											className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
										>
											&rarr;
										</span>
									</Link>
									<p className="text-secondary-500 text-xs">
										{blog.dateandDuration}
									</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blogs;
