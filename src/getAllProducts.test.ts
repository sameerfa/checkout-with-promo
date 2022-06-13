import getAllProducts from './getAllProducts';

test('get all products', () => {
    expect(getAllProducts()).toEqual([
        {
            name: 'Pizza',
            price: 10
        },
        {
            name: 'Burger',
            price: 20
        }
    ]);
});
