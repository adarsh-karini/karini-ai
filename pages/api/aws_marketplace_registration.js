export default function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		console.log(`Received data: ${JSON.stringify(data, null, 2)}`);

		let redirectUrl = `https://www.karini.ai/aws_marketplace_registration.html?x-amzn-marketplace-token=${data.registrationToken}`;

		res.redirect(redirectUrl);
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
