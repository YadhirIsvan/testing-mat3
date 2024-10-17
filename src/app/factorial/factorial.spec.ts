import { factorial } from './factorial';

describe('Factorial Function', () => {

  it('should return 1 when the input is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 when the input is 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 2 when the input is 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('should return 6 when the input is 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return 24 when the input is 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it('should return 120 when the input is 5', () => {
    expect(factorial(5)).toBe(120);
  });

});

