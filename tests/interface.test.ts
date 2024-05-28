import { Seller } from '../src/seller';

describe('Interface', () => {
  it('should support interface', () => {
    const seller: Seller = {
      id: 1,
      name: 'Felix',
      address: 'Jakarta',
      npwp: '12345',
    };

    console.info(seller);
  });
});
