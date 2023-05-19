export const isEmailValid = (email: string): boolean => {
    const emailRegex: RegExp = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
