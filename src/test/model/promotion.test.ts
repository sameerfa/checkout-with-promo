import { Checkout } from '../../model/checkout';
import { Product } from '../../model/product';
import { ProductPromotion, OverallPromotion } from '../../model/promotion';

describe("Promotion", () => {
    
    test("Test 1: 001, 002, 003", () => {
        const currySauce = new Product(1, 1.95);
        const pizza = new Product(2, 5.99);
        const mensTShirt = new Product(3, 25.00);
    
        const productPromotion = new ProductPromotion(pizza, 2, 3.99);
        const overallPromotion = new OverallPromotion(30, 10);

        const checkout = new Checkout();
        checkout.scan(currySauce);
        checkout.scan(pizza);
        checkout.scan(mensTShirt);
        
        const cart = checkout.getCart();
        productPromotion.apply(cart);
        overallPromotion.apply(cart);
        
        expect(checkout.getTotalPrice()).toBe(29.65);
    });
    test("Test 2: 002, 001, 002", () => {
        const currySauce = new Product(1, 1.95);
        const pizza = new Product(2, 5.99);

        const productPromotion = new ProductPromotion(pizza, 2, 3.99);
        const overallPromotion = new OverallPromotion(30, 10);

        const checkout = new Checkout();
        checkout.scan(pizza);
        checkout.scan(currySauce);
        checkout.scan(pizza);

        const cart = checkout.getCart();
        productPromotion.apply(cart);
        overallPromotion.apply(cart);
        
        expect(checkout.getTotalPrice()).toBe(9.93);
     });
    test("Test 3: 002, 001, 002, 003", () => {
        const currySauce = new Product(1, 1.95);
        const pizza = new Product(2, 5.99);
        const mensTShirt = new Product(3, 25.00);

        const productPromotion = new ProductPromotion(pizza, 2, 3.99);
        const overallPromotion = new OverallPromotion(30, 10);

        const checkout = new Checkout();
        checkout.scan(pizza);
        checkout.scan(currySauce);
        checkout.scan(pizza);
        checkout.scan(mensTShirt);

        const cart = checkout.getCart();
        productPromotion.apply(cart);
        overallPromotion.apply(cart);

        expect(checkout.getTotalPrice()).toBe(31.44);
    });
});