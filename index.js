import express, { application } from "express";
import apiRoutes from "./routes/api.js";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
