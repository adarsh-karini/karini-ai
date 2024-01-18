import Link from "next/link";
import React from "react";

import { announcementsData, blogsData } from "@/content/blogs/blogsData";
import Image from "next/image";

const Blogs = () => {
	return (
		<section className="bg-white px-4 sm:px-10 py-20">
			<div className="max-w-screen-lg mx-auto space-y-10">
				<h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
					Blogs & Announcements
				</h1>
				{/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  */}
				<div className="space-y-6">
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
						{announcementsData.map((announcement, index) => (
							<Link key={index} href={announcement.path}>
								<article className="bg-white rounded-md border shadow p-4">
									<div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
										<div className="flex justify-center">
											<Image
												alt="announcement-img"
												src={announcement.image}
												width={400}
												height={400}
												className="object-contain"
											/>
										</div>
										<div className="flex flex-col justify-between">
											<div>
												<h3 className="text-base font-semibold text-secondary-900 hover:text-primary-600">
													{announcement.title}
												</h3>

												<p className="mt-2 line-clamp-3 text-sm/relaxed text-secondary-700">
													{announcement.description}
												</p>
											</div>

											<div className="flex justify-between items-end">
												<div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
													Read More
													<span
														aria-hidden="true"
														className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
													>
														&rarr;
													</span>
												</div>
												<p className="text-secondary-500 text-xs">
													{announcement.dateandDuration}
												</p>
											</div>
										</div>
									</div>
								</article>
							</Link>
						))}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
						{blogsData.map((blog, index) => (
							<Link key={index} href={blog.path}>
								<article className="bg-white rounded-md border shadow p-4">
									<div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
										<div className="flex justify-center">
											<Image
												alt="blog-img"
												src={blog.image}
												width={500}
												height={400}
												className="object-contain"
											/>
										</div>
										<div className="flex flex-col justify-between">
											<div>
												<h3 className="text-base font-semibold text-secondary-900 hover:text-primary-600">
													{blog.title}
												</h3>

												<p className="mt-2 line-clamp-3 text-sm/relaxed text-secondary-700">
													{blog.description}
												</p>
											</div>

											<div className="flex justify-between items-end">
												<div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
													Read More
													<span
														aria-hidden="true"
														className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
													>
														&rarr;
													</span>
												</div>
												<p className="text-secondary-500 text-xs">
													{blog.dateandDuration}
												</p>
											</div>
										</div>
									</div>
								</article>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs;
