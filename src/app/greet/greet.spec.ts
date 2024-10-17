import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    expect(greet('rosh')).toContain('rosh');  // Cambiar 'nosh' a 'rosh'
  });
});
