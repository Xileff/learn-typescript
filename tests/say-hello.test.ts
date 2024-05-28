import { sayHello } from '../src/say-hello';

describe('say hello', (): void => {
  it('should say hello with name', (): void => {
    expect(sayHello('Felix')).toBe('Hello Felix');
  });
});
