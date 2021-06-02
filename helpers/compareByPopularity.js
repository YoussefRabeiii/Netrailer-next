export const compareByPopularity = (a, b) => {
  const popularityA = a.popularity;
  const popularityB = b.popularity;

  let comparison = 0;
  if (popularityA > popularityB) {
    comparison = 1;
  } else if (popularityA < popularityB) {
    comparison = -1;
  }

  // The times -1 to be in descending order
  return comparison * -1;
};
