import { areEmailsEqual } from './areEmailsEqual';

describe('areEmailsEqual', () => {
    it('should return true when emails are equal', () => {
      const result = areEmailsEqual('email@example.com', 'email@example.com');
      expect(result).toBe(true);
    });
  
    it('should return false when emails are different', () => {
      const result = areEmailsEqual('email1@example.com', 'email2@example.com');
      expect(result).toBe(false);
    });
  });
  