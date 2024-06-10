const longestPalindrome = (s) => {
  const arr = s.split("");
  const solve = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      solve.push(arr[i]);
    } else {
      if (solve.reverse().join("") !== solve.push(arr[i]).join("")) {
        solve.pop();
      } else {
        console.log(solve);
      }
    }
  }
  return solve.join("");
};

console.log(longestPalindrome("babad"));
