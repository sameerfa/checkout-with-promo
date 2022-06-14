import { Product } from "./product";

interface IPromotion {
    apply(product: Product[]): void;
}

export class ProductPromotion implements IPromotion {
    private product: Product;
    protected threshold: number;
    protected discountPrice: number;

    constructor(product: Product, threshold: number, discountPrice: number) {
        this.product = product;
        this.threshold = threshold;
        this.discountPrice = discountPrice;
    }

    apply(product: Product[]): void {
        const existingProduct = product.find(p => p.id === this.product.id);
        if (existingProduct && existingProduct.quantity >= this.threshold) {
            existingProduct.price = this.discountPrice;
        }
    }
}

export class OverallPromotion implements IPromotion {
    protected threshold: number;
    protected discountPrice: number;

    constructor(threshold: number, discountPrice: number) {
        this.threshold = threshold;
        this.discountPrice = discountPrice;
    }

    apply(product: Product[]): void {
        const totalPrice = product.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
        if (totalPrice > this.threshold) {
            const discountAmount = (totalPrice * this.discountPrice / 100).toFixed(2);
            const discount = new Product(0, -discountAmount);
            product.push(discount);
        }
    }
}