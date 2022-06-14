export class Product {
    id: number;
    price: number;
    quantity: number = 1;

    constructor(id: number, price: number) {
        this.id = id;
        this.price = price;
    }
}