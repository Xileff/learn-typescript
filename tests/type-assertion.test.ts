import { Seller } from '../src/seller';

describe('Type Assertion', () => {
  it('should support type assertions', () => {
    const seller: any = {
      id: '001',
      name: 'Felix',
      address: 'Jakarta',
      // npwp: '12345',
      // getName() {
      //   return this.name;
      // },
    };

    const converted: Seller = seller as Seller;
    console.info(converted);
  });
});
