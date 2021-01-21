const getInputValues = (obj, value) => {
  for (const key in obj) {
    if (key === value) {
      return obj[key];
    }
  }
};

export { getInputValues };
