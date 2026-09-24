const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "mini-node-backend en ligne pour de bon " });
});

app.post("/echo", (req, res) => {
  res.json({ youSent: req.body });
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => console.log(`Listening on ${PORT}`));
