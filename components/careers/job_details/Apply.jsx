import React, { useState } from "react";
import { axios } from "axios";

const Apply = ({ jobTitle }) => {
	const [jobData, setJobData] = useState({
		jobTitle: jobTitle,
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		currentDesignation: "",
		orgnization: "",
		aboutYourself: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setJobData({ ...jobData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await axios.post("/api/apply", jobData);
			console.log("Response Data:", data);
		} catch (error) {
			console.error("Error during POST request:", error);
		}
	};

	return (
		<section id="apply" className="bg-dark to-100% px-4 md:px-10 lg:px-0 py-20">
			<div className="max-w-screen-lg mx-auto space-y-8">
				<h1 className="text-white font-bold text-2xl sm:text-3xl text-center">
					Apply here
				</h1>
				<div className="max-w-screen-md mx-auto">
					<form
						onSubmit={handleSubmit}
						className="bg-dark p-10 border border-secondary-800 shadow-2xl shadow-primary-600/20 space-y-6 rounded-md"
					>
						<div className="text-secondary-300 text-sm font-medium space-y-4">
							<div className="flex flex-col space-y-1">
								<label>Applying for</label>
								<input
									required
									type="text"
									name="applyingfor"
									id=""
									value={jobTitle}
									disabled
									className="text-primary-600 border border-secondary-800 bg-dark italic font-normal p-4 focus:outline-secondary-500 focus:outline-none focus:border-black cursor-not-allowed rounded-md"
								/>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="flex flex-col space-y-1">
									<label>First name</label>
									<input
										required
										type="text"
										name="firstName"
										id=""
										className="border border-secondary-800 bg-dark font-normal p-4 focus:outline-secondary-500 focus:outline-none focus:border-black rounded-md"
										onChange={handleChange}
										value={jobData.firstName}
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label>Last name</label>
									<input
										required
										type="text"
										name="lastName"
										id=""
										className="border border-secondary-800 bg-dark font-normal p-4 focus:outline-secondary-500 focus:outline-none focus:border-black rounded-md"
										onChange={handleChange}
										value={jobData.lastName}
									/>
								</div>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="flex flex-col space-y-1">
									<label>Email address</label>
									<input
										required
										type="email"
										name="email"
										id=""
										className="border border-secondary-800 bg-dark font-normal p-4 focus:outline-secondary-500 focus:outline-none focus:border-black rounded-md"
										onChange={handleChange}
										value={jobData.email}
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label>Phone</label>
									<input
										required
										type="tel"
										name="phone"
										id=""
										className="border border-secondary-800 bg-dark font-normal p-4 focus:outline-secondary-500 focus:outline-none focus:border-black rounded-md"
										onChange={handleChange}
										value={jobData.phone}
									/>
								</div>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="flex flex-col space-y-1">
									<label>Current designation</label>
									<input
										required
										type="text"
										name="currentDesignation"
										id=""
										className="border border-secondary-800 bg-dark font-normal p-4 focus:outline-secondary-500 focus:outline-none focus:border-black rounded-md"
										onChange={handleChange}
										value={jobData.currentDesignation}
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label>Organization</label>
									<input
										required
										type="text"
										name="orgnization"
										id=""
										className="border border-secondary-800 bg-dark font-normal p-4 focus:outline-secondary-500 focus:outline-none focus:border-black rounded-md"
										onChange={handleChange}
										value={jobData.orgnization}
									/>
								</div>
							</div>

							<div className="flex flex-col space-y-1">
								<label>Tell us about yourself</label>
								<textarea
									name="aboutYourself"
									id=""
									className="border border-secondary-800 bg-dark font-normal p-4 focus:outline-secondary-500 focus:outline-none focus:border-black rounded-md"
									rows="5"
									onChange={handleChange}
									value={jobData.aboutYourself}
								></textarea>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="flex space-x-4 items-center bg-primary-600 px-8 py-2 text-white text-sm font-medium rounded-md"
							>
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Apply;
