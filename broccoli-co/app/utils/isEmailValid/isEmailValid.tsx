export const isEmailValid = (email: string): boolean => {
  const emailRegex: RegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return emailRegex.test(email);
};
