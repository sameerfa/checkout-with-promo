import { Product } from './product';

interface ICheckout {
    products: Product[];
    totalPrice: number;
    scan(product: Product): void;
    getTotalPrice(): number;
    getCart(): Product[];
    clearCart(): void;
}

export class Checkout implements ICheckout {
    products: Product[] = [];
    totalPrice: number = 0;

    scan(product: Product) {
        const existingProduct = this.products.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            this.products.push(product);
        }
    }

    getTotalPrice() {
        this.totalPrice = 0;
        this.products.forEach(product => {
            this.totalPrice += product.price * product.quantity;
        });
        return parseFloat(this.totalPrice.toFixed(2));
    }

    getCart() {
        return this.products;
    }

    clearCart() {
        this.products = [];
    }
}