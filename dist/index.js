"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5757;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["*", "http://localhost:3001"],
}));
app.get("/", (req, res) => {
    res.json({ message: "Webhook handler is up and running! 🚀" });
});
app.post("/submit-task-callback", (req, res) => {
    console.log("Webhook received");
    console.log(req.body);
    res.json({ message: "Webhook received" });
});
app.listen(PORT, () => {
    console.log("Webhook handler is running on port", PORT);
});
