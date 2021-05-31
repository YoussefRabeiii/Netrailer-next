const hyphenize = (spacedName) => spacedName.toLowerCase().replace(/\s/g, "-");
const deHyphenize = (hyphenizedName) =>
  hyphenizedName.toLowerCase().replace(/-/g, " ");

export { hyphenize, deHyphenize };
