import  morgan  from 'morgan';
import express from "express";
import { router } from "./routes/webhook";

const app = express();
app.use(morgan("tiny"))
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));
app.use(router);

export {app};
