import { gqlClient, trending } from "../../../../graphQL";

const fetchData = async () => {
  try {
    const data = await gqlClient.request(trending(1));

    // const result = await data.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default (req, res) => {
  const fetchFuck = async () => {
    const { trending: fuck } = await fetchData();

    console.log(fuck.edges);

    return fuck;
  };

  fetchFuck();

  // console.log(edges?.trending?.trending);

  res.status(200).json({ queryName: "Trending", query: trending });
};
