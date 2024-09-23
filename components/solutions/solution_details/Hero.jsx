import React from "react";

const Hero = ({ title, overview }) => {
	return (
		<header className="bg-white">
			<div className="mx-auto max-w-screen-2xl">
				<section>
					<div className="relative flex flex-col items-center justify-center px-4 lg:px-0 py-10 lg:py-20">
						<div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-20 bg-primary-100 blur-2xl"></div>
						<div className="absolute p-20 md:p-32 rounded-full right-0 bottom-0 bg-primary-100 blur-2xl"></div>

						<div className="max-w-screen-lg z-10 flex justify-between space-x-4">
							<div className="flex-1 md:px-0">
								<div className=" space-y-1">
									<h1 className="text-left text-xl font-semibold text-black md:text-3xl">
										{title}
									</h1>
									<p className="text-left text-gray-600 text-sm">{overview}</p>
								</div>
							</div>
							<div className="flex-1 bg-primary-400 py-20"></div>
						</div>
					</div>
				</section>
			</div>
		</header>
	);
};

export default Hero;
