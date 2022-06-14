# Checkout with Promotional Rules

A checkout system that can scan items in any order and apply certain promotional
campaigns to give discounts. The system is flexible regarding the promotional rules.
- The promotion class is responsible for the promotion logic and can be extended
   to support other types of promotions.
- The checkout class is independent of the promotion class and provides the total price of the cart and the
    total price after the promotions are applied.
- Aimed to make the checkout system as simple as possible (clean, readable, and decoupled).

```
## Usage
npm i
npm run test
npm run test:coverage
```
```
## Work Flow
1. new product()
2. new checkout() checkout.scan(product)
3. new promotion() promotion.apply(checkout.cart)
4. checkout.getTotalPrice()
```
```
## Test Cases
Test 1 - 001, 002, 003 // 29.65
Test 2 - 002, 001, 002 // 9.93
Test 3 - 002, 001, 002, 003 // 31.44
``` 