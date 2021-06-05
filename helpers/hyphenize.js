const hyphenize = (spacedName) =>
  spacedName
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s/g, "-");
const deHyphenize = (hyphenizedName) =>
  hyphenizedName
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/-/g, " ");

export { hyphenize, deHyphenize };
