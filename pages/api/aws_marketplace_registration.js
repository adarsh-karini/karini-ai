export default function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		let token = data["x-amzn-marketplace-token"];

		let redirectUrl = `https://www.karini.ai/aws_marketplace_registration.html?x-amzn-marketplace-token=${token}`;

		res.redirect(redirectUrl);
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
