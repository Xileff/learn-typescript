describe('Object Type', () => {
  it('should be only used for simple cases and no reoccurence', () => {
    const person: { name: string; age: number; hobbies?: string[] } = {
      name: 'Felix',
      age: 20,
    };

    expect(person).toHaveProperty('name');
    expect(person.name).toEqual('Felix');
    expect(person).toHaveProperty('age');
    expect(person.age).toEqual(20);
  });
});
