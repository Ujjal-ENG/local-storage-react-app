// use local storage to manage cart data

export const addToDB = (id) => {
    let shoppingCart;

    // get the shopping Cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }

    // add to the quantity
    let qunatity = shoppingCart[id];
    if (qunatity) {
        qunatity++;
        shoppingCart[id] = qunatity;
    } else {
        shoppingCart[id] = 1;
    }

    // set the qunatity based on the specific id
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};
