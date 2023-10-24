function getSum(a, b) {
  const result = a + b;
  return result;
}
function getSmallestNumber(a, b) {
  const result = Math.min(a, b);
  return result;
}
function castBoolean(value) {
  const result = Boolean(value);
  return result;
}
function capitalize(str, num) {
  if (num < 0 || num >= str.length()) {
    return str;
  }
  return str.substring(0, num) + Character.toUpperCase(str.charAt(num)) + str.substring(num + 1);
}
function countCapitalLetters() {}

export {
  getSum, getSmallestNumber, castBoolean, capitalize, countCapitalLetters,
};
