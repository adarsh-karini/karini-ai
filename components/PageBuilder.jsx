import Image from "next/image";
import React from "react";

const PageBuilder = ({ data }) => {
	console.log("page data", data);
	return (
		<section className="bg-white px-4 sm:px-10 py-6">
			<div className="max-w-screen-lg mx-auto space-y-10">
				<div className="space-y-8">
					<div className="space-y-2 border-b border-b-secondary-300 pb-2">
						<h1 className="text-primary-600 text-xl md:text-3xl font-semibold text-left">
							{data?.title}
						</h1>
						<div className="flex justify-between">
							<div className="sm:flex sm:space-x-4">
								{data?.publishedOn && (
									<p className="text-secondary-700 text-sm">
										Published on:
										<span className="text-black font-medium">
											{" "}
											{data?.publishedOn}
										</span>
									</p>
								)}
								{data?.postedOn && (
									<p className="text-secondary-700 text-sm">
										Posted on:
										<span className="text-black font-medium">
											{" "}
											{data?.postedOn}
										</span>
									</p>
								)}
								{data?.author && (
									<p className="text-secondary-700 text-sm">
										Author:{" "}
										<span className="text-black font-medium">
											{data?.author}
										</span>
									</p>
								)}
							</div>
							<div className="flex justify-center items-end">
								<p className="bg-secondary-100 border rounded-full text-black text-xs font-medium italic py-1 px-2">
									{data?.timeToRead}
								</p>
							</div>
						</div>
					</div>
					{data?.sections.map(
						(value, index) =>
							value.group && (
								<div key={index} className="space-y-1">
									{value.data.map((val, index) => (
										<div key={index}>
											{val.type == "heading" && (
												<h2
													className={`${
														val.fontSize === "small"
															? "text-sm"
															: val.fontSize === "medium"
															? "text-base"
															: val.fontSize === "large"
															? "text-lg"
															: "text-sm"
													} text-black font-medium`}
												>
													{val.value}
												</h2>
											)}
											{val.type == "paragraph" && (
												<p
													className={`${
														val.fontSize === "small"
															? "text-sm"
															: val.fontSize === "medium"
															? "text-base"
															: val.fontSize === "large"
															? "text-lg"
															: "text-sm"
													} text-secondary-700`}
													dangerouslySetInnerHTML={{
														__html: val.value,
													}}
												></p>
											)}
											{val.type == "list" && (
												<ol
													className={`${
														val.fontSize === "small"
															? "text-sm"
															: val.fontSize === "medium"
															? "text-base"
															: val.fontSize === "large"
															? "text-lg"
															: "text-sm"
													} text-secondary-700`}
													style={{
														listStyle: "inside",
														listStyleType: "revert",
													}}
													dangerouslySetInnerHTML={{
														__html: val.value,
													}}
												></ol>
											)}
											{val.type == "image" && (
												<div className="space-y-1">
													<div className="flex justify-center">
														<Image
															src={val.path}
															height={val.width}
															width={val.height}
															alt={val.caption}
															className="rounded"
														/>
													</div>
													{val.caption && (
														<small className="block text-center text-secondary-600 text-sm italic font-medium">
															{val.caption}
														</small>
													)}
												</div>
											)}
											{val.type == "gif" && (
												<div className="space-y-1">
													<div className="flex justify-center">
														<img
															src={val.path}
															height={val.width}
															width={val.height}
															alt={val.caption}
															className="rounded border border-secondary-300"
														/>
													</div>
													{val.caption && (
														<small className="block text-center text-secondary-600 text-sm italic font-medium">
															{val.caption}
														</small>
													)}
												</div>
											)}
										</div>
									))}
								</div>
							)
					)}
					{data?.aboutAuthor && (
						<div className="bg-gradient-to-br from-primary-50 to-white space-y-2 border p-5 rounded">
							<p className="text-lg text-black font-medium">About the Author</p>
							<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row space-x-2">
								<div className="pr-2 sm:border-r border-secondary-300">
									<Image
										src={data?.aboutAuthor.authorImage}
										alt="blog author image"
										width={100}
										height={100}
										className="h-20 w-20 rounded-md shadow-xl object-contain"
										priority={true}
										quality={100}
									/>
								</div>
								<p
									className="flex-1 text-base text-secondary-800"
									dangerouslySetInnerHTML={{
										__html: data?.aboutAuthor.authorInfo,
									}}
								></p>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default PageBuilder;
