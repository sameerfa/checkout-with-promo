import { Product } from '../../model/product';

describe('Product', () => {
    describe('Product: 001, Price: 1.95', () => {
        test('should create a product with name 1 and price 1.95', () => {
            const product = new Product(1, 1.95);
            expect(product.id).toBe(1);
            expect(product.price).toBe(1.95);
        });
        test('create a product and update its price', () => {
            const product = new Product(1, 1.95);
            expect(product.id).toBe(1);
            expect(product.price).toBe(1.95);
            product.price = 2.95;
            expect(product.price).toBe(2.95);
        });
        test('create a product and update its quantity', () => {
            const product = new Product(1, 1.95);
            expect(product.id).toBe(1);
            expect(product.price).toBe(1.95);
            product.quantity = 2;
            expect(product.quantity).toBe(2);
        });
    })
})