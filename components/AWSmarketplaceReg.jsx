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

	console.log("regToken:", regToken);

	console.log("formData:", formData);

	const getUrlParameter = (name) => {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
		const results = regex.exec(window.location.search);
		return results === null
			? ""
			: decodeURIComponent(results[1].replace(/\+/g, " "));
	};

	useEffect(() => {
		const AWS_MARKETPLACE_TOKEN = getUrlParameter("x-amzn-marketplace-token");
		setRegToken(AWS_MARKETPLACE_TOKEN);
	}, []);

	useEffect(() => {
		if (!regToken) {
			setAlert(
				"Registration Token Missing. Please go to AWS Marketplace and follow the instructions to set up your account!"
			);
			return;
		}
		setAlert(null);
	}, [regToken]);

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

		console.log("regToken bb", regToken);

		if (!regToken) {
			setAlert(
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
			const regToken = getUrlParameter("x-amzn-marketplace-token");

			if (!regToken) {
				showAlert(
					"Registration Token Missing. Please go to AWS Marketplace and follow the instructions to set up your account!"
				);
				return;
			}

			let aws_endpoint = `/subscriber`;

			let aws_response = await axios.post(aws_endpoint, formData, {
				headers: { "Content-Type": "application/json" },
			});

			console.log("AWS subscribe api Response Data:", aws_response);

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

	return (
		<section className="relative bg-white py-20 overflow-hidden">
			<div className="max-w-screen-sm mx-auto">
				<div className="space-y-10">
					{alert && (
						<div className=" p-3 border rounded bg-red-50">
							<p className="text-sm text-red-500 text-center">{alert}</p>
						</div>
					)}
					<div className="z-10 relative space-y-4">
						<div className="flex justify-center items-center">
							<Logo width={200} />
						</div>
						<div className=" p-3">
							<p className="text-base text-black text-center">
								Please enter your company details below to register for the AWS
								Marketplace. Thank you! 🚀
							</p>
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
