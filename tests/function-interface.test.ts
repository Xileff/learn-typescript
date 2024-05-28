import { AddFunction } from '../src/function-interface';

describe('Function interface', () => {
  it('should support function interface', () => {
    const add: AddFunction = (value1: number, value2: number): number =>
      value1 + value2;
    expect(add(2, 3)).toStrictEqual(5);
  });
});
