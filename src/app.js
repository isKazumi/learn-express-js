import express from "express";
import requestLogs from "./middelware/logs.js";
import userRoute from "./routes/user.js";

const app = express();
const jsonPermission = express.json();
const port = 5000;

app.use(requestLogs);
app.use(jsonPermission);

app.get("/", (req, res) => {
  res.send("Makan nasi");
});

app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
