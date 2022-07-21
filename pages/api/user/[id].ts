import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/lib/prisma";

export default withApiAuthRequired(async function handle(req: NextApiRequest, res: NextApiResponse) {
  const where = {
    id: Number(req.query.id),
  };

  if (req.method === "GET") {
    const result = await prisma.user.findUnique({
      where,
    });
    res.json(result);
  } else {
    const result = await prisma.user.update({
      where,
      data: {
        ...req.body,
      },
    });

    res.json(result);
  }
});
