const isPalindrome = (str) => {
  const regex = /[.,@%!$:;/?()<?\s]/g;

  const result = str.replace(regex, "").toLowerCase();

  const strArr = result.split("");
  const reversedStrArr = strArr.reverse();
  const reversedStr = reversedStrArr.join("").toLowerCase();

  if (result === reversedStr) return true;
  else return false;
};
console.log(isPalindrome("s level s:/,."));
