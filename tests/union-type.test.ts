describe('Union Type', () => {
  it('should support more than one datatype', () => {
    let data: string | number | Array<string> = 'aaa';

    data = 1;
    console.info(data);

    data = ['Felix', 'Vincent', 'Renard'];
    console.info(data);
  });

  it('should support typeof operator', () => {
    const process = (value: number | string | Array<string>) => {
      switch (typeof value) {
        case 'number':
          return value + 2;
        case 'string':
          return `Hello ${value}`;
        case 'object':
          return value.map((value: string) => `Hello ${value}`);
      }
    };

    expect(process(2)).toStrictEqual(4);
    expect(process('Felix')).toStrictEqual('Hello Felix');
    expect(process(['Felix', 'Vincent', 'Renard'])).toStrictEqual([
      'Hello Felix',
      'Hello Vincent',
      'Hello Renard',
    ]);
  });
});
