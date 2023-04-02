export const slicy = (desc) => {
  let results = "";
  if (desc.length > 50) {
    results = desc.slice(0, 60) + ".........";
  } else {
    results = desc;
  }
  return results;
};
