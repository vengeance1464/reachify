// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  const {method}=req
  if(method!=="POST"){
        res.status(405).end(`Method ${method} Not Allowed`)
 }
  const body=req.body
  res.status(200).json({ name: "John Doe" });
}
