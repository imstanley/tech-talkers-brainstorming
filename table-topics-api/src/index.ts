import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { sequelize } from "./config/database";
import { Topic } from "./models/topic";

const app = express();
const port = 5000;

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    return "Connection has been established successfully.";
  } catch (error) {
    return `Unable to connect to the database: ${error}`;
  }
};

app.get("/", (req, res) => {
  res.send("Hello Tech Talkers!");
});

app.get("/test-connection", async (req, res) => {
  const testResult = await testConnection();
  res.send(testResult);
});

app.get("/synchronize-schema", async (req, res) => {
  const syncResult = await Topic.sync({ force: true });
  console.log(syncResult);
  res.send(`Synchronization result: ${syncResult}`);
});

app.listen(port, () => {
  return console.log(`Listening at http://localhost:${port}`);
});
