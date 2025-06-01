import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const openApiJson = fs.readFileSync("openapi.json", "utf8");
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(JSON.parse(openApiJson));
}
