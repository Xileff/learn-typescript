import { Seller, StarSeller } from '../src/seller';

describe('Interface', () => {
  it('should support interface', () => {
    const seller: Seller = {
      id: 1,
      name: 'Felix',
      address: 'Jakarta',
      npwp: '12345',
      getName() {
        return this.name;
      },
    };

    console.info(seller);

    const starSeller: StarSeller = {
      id: 2,
      name: 'Vincent',
      address: 'Depok',
      npwp: '54321',
      expiryDate: '01-01-2025',
      getName() {
        return this.name;
      },
      getExpiryDate() {
        return this.expiryDate;
      },
      setExpiryDate(date: string): void {
        this.expiryDate = date;
      },
    };

    console.info(starSeller);
  });
});
