import { Product } from "./product";

interface PromotionInterface {
    apply(product: Product[]): void;
}

export class ProductPromotion implements PromotionInterface {
    private product: Product;
    private threshold: number;
    private discountedPrice: number;

    constructor(product: Product, threshold: number, discountedPrice: number) {
        this.product = product;
        this.threshold = threshold;
        this.discountedPrice = discountedPrice;
    }

    apply(product: Product[]): void {
        const existingProduct = product.find(p => p.id === this.product.id);
        if (existingProduct && existingProduct.quantity >= this.threshold) {
            existingProduct.price = this.discountedPrice;
        }
    }
}

export class OverallPromotion implements PromotionInterface {
    private threshold: number;
    private discountPercentage: number;

    constructor(threshold: number, discountPercentage: number) {
        this.threshold = threshold;
        this.discountPercentage = discountPercentage;
    }

    apply(product: Product[]): void {
        const totalPrice = product.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
        if (totalPrice > this.threshold) {
            const discountAmount = (totalPrice * this.discountPercentage / 100).toFixed(2);
            const discount = new Product(0, -discountAmount);
            product.push(discount);
        }
    }
}