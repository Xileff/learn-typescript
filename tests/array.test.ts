describe('Array', () => {
  it('should create array, readonly array, and tuple', () => {
    const names: string[] = ['Felix', 'Vincent', 'Renard'];
    const readOnlyNames: ReadonlyArray<string> = ['Felix', 'Vincent', 'Renard'];
    const tuple: [string, number, boolean] = ['Felix', 22, true];

    console.info(names);
    console.info(readOnlyNames);
    console.info(tuple);
  });
});
