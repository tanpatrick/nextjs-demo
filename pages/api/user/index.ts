import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/lib/prisma";

export default withApiAuthRequired(async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const result = await prisma.user.findMany({
      orderBy: {
        id: "asc",
      },
    });
    res.json(result);
  } else {
    const result = await prisma.user.create({
      data: {
        ...req.body,
      },
    });

    res.json(result);
  }
});
