describe('Any', () => {
  it('should support any data type', () => {
    const person: any = {
      id: 1,
      name: 'Felix Savero',
      age: 22,
    };

    person.age = 20;
    person.address = 'Indonesia';

    console.info(person);
  });
});
