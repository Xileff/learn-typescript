import { Category, Product } from '../src/type-alias';

describe('Type Alias', () => {
  it('should be able to instantiate type alias', () => {
    const category: Category = {
      id: 'category-001',
      name: 'Handphone',
    };

    const product1: Product = {
      id: 'product-001',
      name: 'Samsung S24 Ultra',
      price: 25000000,
      category,
    };

    const product2: Product = {
      id: 'product-002',
      name: 'AC Panasonic',
      price: 4000000,
      category: {
        id: 'category-002',
        name: 'Home Appliances',
      },
    };

    console.info(category);
    console.info(product1);
    console.info(product2);
  });
});
