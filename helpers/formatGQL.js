export const formatGQL = async (data) =>
  await data.edges.map((edge) => {
    return {
      ...edge.node,
    };
  });
