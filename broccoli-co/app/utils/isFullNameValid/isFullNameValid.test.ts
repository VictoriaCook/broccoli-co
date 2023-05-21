import { isFullNameValid } from "./isFullNameValid";

describe("isFullNameValid", () => {
    it('should return true for a valid full name', () => {
        const fullName = 'John Doe';
        const isValid = isFullNameValid(fullName);
        expect(isValid).toBe(true);
      });
    
      it('should return false for an empty full name', () => {
        const fullName = '';
        const isValid = isFullNameValid(fullName);
        expect(isValid).toBe(false);
      });
    
      it('should return false for a full name with only two characters', () => {
        const fullName = 'Jo';
        const isValid = isFullNameValid(fullName);
        expect(isValid).toBe(false);
      });
    });