const getUnique = (items, key) => {
  return [...new Set(items.map((item) => item[key]))];
};

export default getUnique;
