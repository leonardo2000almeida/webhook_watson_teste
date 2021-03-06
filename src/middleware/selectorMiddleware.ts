import { Request, Response } from "express";
import { notFound } from "../utils/response";
import { webhookTypes } from "../utils/webhookTypes";

export const selector = (req: Request, res: Response) => {
  const type: string = req?.body?.tipo;

  const response =
    webhookTypes[type] === undefined ? notFound : webhookTypes[type];

  return res.json(response(req, res));
};
