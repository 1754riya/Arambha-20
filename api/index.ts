import { createServer } from "../server";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const app = createServer();

export default (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};
