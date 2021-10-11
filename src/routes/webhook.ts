import { Router, json, urlencoded } from "express";
import path from "path";
import {selector} from "../middleware/selectorMiddleware";

const router = Router();

router.get("/", (req,res) => res.sendFile(path.join(__dirname,"../view/main.html")))
router.post("/", selector);

export { router };
