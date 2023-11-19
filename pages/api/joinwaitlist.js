import axios from "axios";

export default async function handler(req, res) {
	// Enable CORS for all routes
	// res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Origin", "*");
	// res.setHeader(
	// 	"Access-Control-Allow-Methods",
	// 	"GET,OPTIONS,PATCH,DELETE,POST,PUT"
	// );
	// res.setHeader(
	// 	"Access-Control-Allow-Headers",
	// 	"X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
	// );

	if (req.method === "OPTIONS") {
		// Preflight request, respond successfully
		return res.status(200).end();
	}

	if (req.method === "POST") {
		try {
			const formData = req.body;
			console.log("ewe", formData);
			const externalLambdaUrl =
				"https://4rcbc2gwuvj4ychuekoapgtseu0bdtpp.lambda-url.us-east-1.on.aws/";

			const response = await axios.post(externalLambdaUrl, formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = response.data;

			return res.status(200).json(data);
		} catch (error) {
			console.error("Error during external lamda request:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}

	return res.status(404).json({ error: "Not Found" });
}
