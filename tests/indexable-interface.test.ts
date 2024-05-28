describe('Indexable Interface', () => {
  it('should support indexable interface', () => {
    interface StringArray {
      [key: string]: string;
    }

    const names: StringArray = {
      FIRST_NAME: 'Felix',
      MIDDLE_NAME: 'Savero',
      LAST_NAME: 'Maximilian',
    };

    console.info(names['FIRST_NAME']);
    console.info(names['MIDDLE_NAME']);
    console.info(names['LAST_NAME']);
  });
});
