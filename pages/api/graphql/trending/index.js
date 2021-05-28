import { formatGQL } from "@helpers";

import { gqlClient, trendingQuery } from "@graphQL";

export default async (req, res) => {
  const { trending } = await gqlClient.request(trendingQuery());

  const formatedData = await formatGQL(trending);

  res.status(200).json({ trending: formatedData });
};
