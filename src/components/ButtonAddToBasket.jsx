import React, { useState } from 'react';

function ButtonAddToCart() {
    const [cart, setCart] = useState()

    const addToCart = (product) => {
        let newCart = [...cart];
        let itemCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };

    return (
        <>
           <button onClick={() => addToCart(product)}>
              Add to cart
            </button> 
        </>
    )
}

export default ButtonAddToCart
