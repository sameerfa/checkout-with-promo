import { Checkout } from '../../model/checkout';
import { Product } from '../../model/product';

describe("Checkout", () => {
    describe("Checkout a list of products and get the total price", () => {
        test("should create a checkout", () => {
            const checkout = new Checkout();
            expect(checkout).toBeDefined();
        });
        test("should add a product to the checkout", () => {
            const checkout = new Checkout();
            const product = new Product(1, 1.95);
            checkout.scan(product);
            expect(checkout.products.length).toBe(1);
        });
        test("should get the total price of the products", () => {
            const checkout = new Checkout();
            const product = new Product(1, 1.95);
            checkout.scan(product);
            expect(checkout.getTotalPrice()).toBe(1.95);
        });
        test("should get the cart of the products", () => {
            const checkout = new Checkout();
            const product = new Product(1, 1.95);
            const product2 = new Product(2, 5.99);
            const product3 = new Product(3, 25.00);
            const product4 = new Product(1, 1.95);
            checkout.scan(product);
            checkout.scan(product2);
            checkout.scan(product3);
            checkout.scan(product4);
            expect(checkout.getCart().length).toBe(3);
            expect(checkout.getTotalPrice()).toBe(34.89);
        });
    });
})