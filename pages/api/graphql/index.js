// import { formatGQL } from "@helpers";

import { gqlClient } from "@graphQL";

export default async (req, res) => {
  // const data = await gqlClient.request(req.body);

  console.log(req.body);
  // console.log(data);
  // const formatedData = await formatGQL(trending);

  res.status(200).json({ data: "data" });
  // res.status(200).json({ trending: formatedData });
};
