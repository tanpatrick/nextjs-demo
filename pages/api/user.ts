import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const result = await prisma.user.findMany();
    res.json(result);
  } else {
    const result = await prisma.user.create({
      data: {
        ...req.body,
      },
    });

    res.json(result);
  }
}
