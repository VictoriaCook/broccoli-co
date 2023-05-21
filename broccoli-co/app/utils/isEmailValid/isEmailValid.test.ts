import { isEmailValid } from './isEmailValid';

describe('isEmailValid', () => {
    it('should return true for a valid email', () => {
      const validEmails = [
        'test@example.com',
        'user123@domain.co',
        'john.doe@subdomain.example.org',
        '1@test.com'
      ];
  
      validEmails.forEach(email => {
        expect(isEmailValid(email)).toBe(true);
      });
    });
  
    it('should return false for an invalid email', () => {
      const invalidEmails = [
        'invalid',
        'joe123',
        'user@example',
        '@dom.com',
        'test@.com',
        'user@domain.'
      ];
  
      invalidEmails.forEach(email => {
        expect(isEmailValid(email)).toBe(false);
      });
    });
  });