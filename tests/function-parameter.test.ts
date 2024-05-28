describe('Function as a parameter', () => {
  it('should work properly', () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello('felix savero', toUpper)).toBe('Hello FELIX SAVERO');
    expect(
      sayHello('felix savero', function (name: string): string {
        return name.toUpperCase();
      }),
    ).toBe('Hello FELIX SAVERO');
    expect(
      sayHello('felix savero', (name: string): string => name.toUpperCase()),
    ).toBe('Hello FELIX SAVERO');
  });
});
