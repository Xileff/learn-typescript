describe('Function overloading', () => {
  it('should support func overloading', () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any) {
      if (typeof value === 'string') return value;
      if (typeof value === 'number') return value + 1;
    }
    expect(callMe(100)).toBe(101);
    expect(callMe('Felix')).toBe('Felix');
  });
});
