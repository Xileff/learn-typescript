import { Customer, CustomerType } from '../src/enum';

describe('Enum', () => {
  it('should support enum', () => {
    const customer0: Customer = {
      id: 1,
      name: 'Felix',
      type: CustomerType.GOLD,
    };
    console.info(customer0);
  });
});
