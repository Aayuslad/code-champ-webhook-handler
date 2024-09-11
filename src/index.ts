import express from "express";
const app = express();

app.get("/", (req, res) => {
	res.json({ message: "Webhook handler is up and running! 🚀" });
});

app.post("/webhook", (req, res) => {
	console.log(req.body);
	res.json({ message: "Webhook received" });
});

app.listen(5757, () => {
	console.log("Webhook handler is running on port 3000");
});