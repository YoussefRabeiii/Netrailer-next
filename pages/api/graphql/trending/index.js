import { gqlClient, trending } from "../../../../graphQL";

const fetchData = async () => {
  try {
    const data = await gqlClient.request(trending(1));

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default (req, res) => {
  const fetchFuck = async () => {
    const { trending: fuck } = await fetchData();
    // const { trending: fuck } = await gqlClient.request(trending(1));
    // console.log(fuck.edges);

    return fuck;
  };

  const fuckinData = fetchFuck();
  // console.log(fuckinData);

  res.status(200).json({
    tryNum: 2,
    fuckinData,
  });
};
