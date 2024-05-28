describe('Optional Parameter', () => {
  it('should support optional parameter', () => {
    const sayHello = (name?: string | null) => {
      if (name) {
        return `Hello, name : ${name}`;
      }
      return `Hello, no name sent`;
    };

    console.info(sayHello('Felix'));
    console.info(sayHello());
    console.info(sayHello(null));
  });
});
