import { Seller, StarSeller } from '../src/seller';

describe('Interface', () => {
  it('should support interface', () => {
    const seller: Seller = {
      id: 1,
      name: 'Felix',
      address: 'Jakarta',
      npwp: '12345',
    };

    console.info(seller);

    const starSeller: StarSeller = {
      id: 2,
      name: 'Vincent',
      address: 'Depok',
      npwp: '54321',
      expiryDate: '01-01-2025',
    };

    console.info(starSeller);
  });
});
