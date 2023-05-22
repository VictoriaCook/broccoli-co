export const isFullNameValid = (fullName: string): boolean => {
  return fullName.trim().split(" ").join("").length >= 3;
};

// Trim any spaces from either end of the input, then split the string into an array of substrings where there are any spaces, and then join the array elements into a string. Then, check if the length of the string is greater than 3. If it is, return true. If it is not, return false.
