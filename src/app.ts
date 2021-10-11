import express from "express";
import { router } from "./routes/webhook";

const app = express();
app.use(router);

export {app};
