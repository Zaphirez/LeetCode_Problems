const expect = (val) => {
  const returnObj = {
    value: val,

    toBe(othervalue) {
      if (othervalue === this.value) {
        return true;
      } else {
        throw "Not Equal";
      }
    },

    notToBe(othervalue) {
      if (othervalue !== this.value) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
  return returnObj;
};

console.log(expect(2).toBe(1));