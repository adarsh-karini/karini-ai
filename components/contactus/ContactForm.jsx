import axios from "axios";
import React, { useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const ContactForm = () => {
	const [show, setShow] = useState(""); // submitting, failed, success
	const [contactData, setContactData] = useState({
		fullName: "",
		email: "",
		department: "",
		phone: "",
		industry: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setContactData({ ...contactData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			contactData.fullName === "" ||
			contactData.email === "" ||
			contactData.industry === ""
		) {
			return;
		}
		setShow("submitting");

		try {
			const apiEndpoint =
				"https://4tqk6pfqye.execute-api.us-east-1.amazonaws.com/v1/contactus";

			const res = await axios.post(apiEndpoint, contactData);

			console.log("Response Data:", res);
			setShow("success");
		} catch (error) {
			setShow("failed");
			console.error("Error during POST request:", error);
		}

		setContactData({
			fullName: "",
			email: "",
			department: "",
			industry: "",
			message: "",
		});

		setTimeout(() => {
			setShow("");
		}, 3500);
	};

	return (
		<section className="relative bg-dark px-4 lg:px-10 xl:px-0 py-20 overflow-hidden">
			<div className="max-w-screen-xl mx-auto space-y-16">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<div className="col-span-1 space-y-2">
						<h2 className="text-white text-center lg:text-left font-semibold text-2xl md:text-2xl xl:text-6xl">
							<span className="text-primary-600">Say</span> Hello
						</h2>
						<p className="text-secondary-100 text-l text-center lg:text-left">
						Unlock the full potential of Generative AI and elevate your game with our cutting-edge Platform. 
						</p>
						<p className="text-secondary-100 text-l text-center lg:text-left">
						Don't miss the opportunity to transform your business with the power of Generative AI. Reach out to us now to say Hello, geek out or to learn about our platform. 
						</p>
						
					</div>
					<div className="col-span-2">
						<div className="z-10 relative space-y-4">
							<div className="-z-10 absolute top-20 left-32 p-52 rounded-full bg-primary-600 blur-3xl opacity-20"></div>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<input
										type="text"
										name="fullName"
										className="bg-dark border border-secondary-700 rounded-md focus:outline-primary-600 text-white font-medium text-sm p-4"
										placeholder="Full name"
										value={contactData.fullName}
										onChange={handleChange}
										required
									/>
									<input
										type="email"
										name="email"
										className="bg-dark border border-secondary-700 rounded-md focus:outline-primary-600 text-white font-medium text-sm p-4"
										placeholder="email"
										value={contactData.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<input
										type="text"
										name="department"
										className="bg-dark border border-secondary-700 rounded-md focus:outline-primary-600 text-white font-medium text-sm p-4"
										placeholder="Department"
										value={contactData.department}
										onChange={handleChange}
									/>
									<input
										type="tel"
										name="phone"
										id=""
										className="bg-dark border border-secondary-700 rounded-md focus:outline-primary-600 text-white font-medium text-sm p-4"
										placeholder="Phone"
										value={contactData.phone}
										onChange={handleChange}
									/>
								</div>
								<div>
									<input
										type="text"
										name="industry"
										className="w-full bg-dark border border-secondary-700 rounded-md focus:outline-primary-600 text-white font-medium text-sm p-4"
										placeholder="Industry"
										value={contactData.industry}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<textarea
										name="message"
										id=""
										rows="10"
										className="w-full bg-dark border border-secondary-700 rounded-md focus:outline-primary-600 text-white font-medium text-sm p-4"
										placeholder="Message"
										value={contactData.message}
										onChange={handleChange}
									></textarea>
								</div>
								<div>
									<button
										type="submit"
										className="w-full py-4 px-4 text-white text-base font-medium bg-primary-600 rounded-md"
									>
										Send
									</button>
								</div>
							</form>
							{show === "submitting" && (
								<div>
									<p className="text-secondary-300 text-sm text-center">
										Submitting...
									</p>
								</div>
							)}
							{show === "success" && (
								<div>
									<p className="text-sm text-center text-green-400">
										Thank you for reaching out! Your message has been
										successfully submitted!
									</p>
								</div>
							)}
							{show === "failed" && (
								<div>
									<p className="text-sm text-center text-red-400">
										Please try again.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
