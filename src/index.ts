import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();
const app = express();
const PORT = 5757;

app.use(express.json());
app.use(
	cors({
		origin: ["*", "http://localhost:3001"],
	}),
);

app.get("/", (req, res) => {
	res.json({ message: "Webhook handler is up and running! 🚀" });
});

app.post("/submit-task-callback", async (req, res) => {
	try {
		await Prisma.submission.update({
			where: {
				id: req.body.submissionId,
			},
			data: {
				status: req.body.status,
			},
		});

		return res.json({ message: "Webhook received" });
	} catch (error) {
		return res.status(500).json({ message: "Error updating submission status" });
	}
});

app.listen(PORT, () => {
	console.log("Webhook handler is running on port", PORT);
});
