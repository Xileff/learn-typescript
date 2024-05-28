import { InterfaceDomain, TypeDomain } from '../src/intersection-types';

describe('Intersection Types & Interfaces', () => {
  it('should support intersection type and interface', () => {
    const typeDomain: TypeDomain = {
      id: 'type-domain-001',
      name: 'Type Domain consists of HasId and HasName interfaces',
    };

    const interfaceDomain: InterfaceDomain = {
      id: 'interface-domain-001',
      name: 'Interface Domain extends HasId and HasName interfaces',
    };

    console.info(typeDomain);
    console.info(interfaceDomain);

    expect(typeDomain).toHaveProperty('id');
    expect(typeDomain).toHaveProperty('name');
    expect(interfaceDomain).toHaveProperty('id');
    expect(interfaceDomain).toHaveProperty('name');
  });
});
