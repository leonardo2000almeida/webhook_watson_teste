import { Router, json, urlencoded } from "express";
import morgan from "morgan";
import {selector} from "../middleware/selectorMiddleware";

const router = Router();
router.use(json({}));
router.use(urlencoded({ extended: true }));
router.use(morgan("tiny"));


router.post("/", selector);

export { router };
