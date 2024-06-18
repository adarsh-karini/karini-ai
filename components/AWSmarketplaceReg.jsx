import { useState, useEffect } from "react";
import Head from "next/head";
import Logo from "@/svgs/logo/Logo";
import axios from "axios";

const AWSmarketplaceReg = () => {
	let baseUrl = "https://lyw77vwwdd.execute-api.us-east-1.amazonaws.com/Prod/";

	const [show, setShow] = useState(""); // submitting, failed, success

	const [formData, setFormData] = useState({
		companyName: "",
		contactPerson: "",
		contactPhone: "",
		contactEmail: "",
	});
	const [alert, setAlert] = useState(null);
	const [regToken, setRegToken] = useState("");

	console.log("formData:", formData);

	useEffect(() => {
		const AWS_MARKETPLACE_TOKEN = "sample-amzn-marketplace-token";
		const urlParams = new URLSearchParams(window.location.search);
		const token = urlParams.get(AWS_MARKETPLACE_TOKEN);
		setRegToken(token);
	}, []);

	const handleChange = (e) => {
		let { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		console.log("hello from handleSubmit");
		e.preventDefault();

		if (!regToken) {
			showAlert(
				"danger",
				"Registration Token Missing. Please go to AWS Marketplace and follow the instructions to set up your account!"
			);
			return;
		}

		// const data = { ...formData, regToken };

		// try {
		// 	const response = await fetch("/api/subscribe", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify(data),
		// 	});

		// 	const result = await response.json();
		// 	showAlert("primary", result.message);
		// } catch (error) {
		// 	showAlert("danger", "An error occurred. Please try again.");
		// }

		//--------------------------------
		if (
			formData.companyName === "" ||
			formData.contactEmail === "" ||
			formData.contactPerson === "" ||
			formData.contactPhone === ""
		) {
			return;
		}
		setShow("submitting");

		try {
			let aws_endpoint = `${baseUrl}/subscriber`;

			let aws_response = await axios.post(aws_endpoint, formData);

			console.log("AWS subscribe api Response Data:", aws_response);

			const apiEndpoint =
				"https://4tqk6pfqye.execute-api.us-east-1.amazonaws.com/v1/aws_marketplace_reg";

			const res = await axios.post(apiEndpoint, formData);

			console.log("aws lambda Response Data:", res);

			setShow("success");
		} catch (error) {
			setShow("failed");
			console.error("Error during POST request:", error);
		}

		setFormData({
			companyName: "",
			contactPerson: "",
			contactPhone: "",
			contactEmail: "",
		});

		setTimeout(() => {
			setShow("");
		}, 3500);
	};

	const showAlert = (cssClass, message) => {
		setAlert({ cssClass, message });
		setTimeout(() => setAlert(null), 5000); // Remove alert after 5 seconds
	};

	return (
		<section className="relative bg-white py-20 overflow-hidden">
			<div className="max-w-screen-sm mx-auto">
				<div className="">
					<div className="z-10 relative space-y-4">
						<div className="flex justify-center items-center">
							<Logo width={200} />
						</div>
						<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
							<div className="flex flex-col space-y-1">
								<label
									htmlFor="companyName"
									className="text-secondary-700 text-sm"
								>
									Company name
								</label>
								<input
									type="text"
									name="companyName"
									className="bg-secondary-50 border border-secondary-300 rounded-md focus:outline-primary-600 text-black text-sm p-3 shadow"
									placeholder="Company name"
									value={formData.companyName}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="flex flex-col space-y-1">
								<label
									htmlFor="contactPerson"
									className="text-secondary-700 text-sm"
								>
									Contact person
								</label>
								<input
									type="text"
									name="contactPerson"
									className="bg-secondary-50 border border-secondary-300 rounded-md focus:outline-primary-600 text-black text-sm p-3 shadow"
									placeholder="Contact person"
									value={formData.contactPerson}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="flex flex-col space-y-1">
								<label
									htmlFor="contactPhone"
									className="text-secondary-700 text-sm"
								>
									Contact phone
								</label>
								<input
									type="tel"
									name="contactPhone"
									id=""
									className="bg-secondary-50 border border-secondary-300 rounded-md focus:outline-primary-600 text-black text-sm p-3 shadow"
									placeholder="Contact phone"
									value={formData.contactPhone}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="flex flex-col space-y-1">
								<label
									htmlFor="contactEmail"
									className="text-secondary-700 text-sm"
								>
									Contact email
								</label>
								<input
									type="email"
									name="contactEmail"
									className="bg-secondary-50 border border-secondary-300 rounded-md focus:outline-primary-600 text-black text-sm p-3 shadow"
									placeholder="Contact email"
									value={formData.contactEmail}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<button
									type="submit"
									className="w-full p-3 text-white text-base font-medium bg-primary-600 rounded-md"
								>
									Register
								</button>
							</div>
						</form>
						{show === "submitting" && (
							<div>
								<p className="text-secondary-300 text-sm text-center">
									Registering...
								</p>
							</div>
						)}
						{show === "success" && (
							<div>
								<p className="text-sm text-center text-green-400">
									Thank you for registration on AWS Marketplace!
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
		</section>
	);
};

export default AWSmarketplaceReg;
