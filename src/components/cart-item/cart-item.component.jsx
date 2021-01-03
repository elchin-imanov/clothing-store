import React from 'react';

import {
  ItemName,
  ItemPrice,
  CartItemImage,
  CartItemContainer,
  ItemDetailsContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <ItemName>
              {name}
            </ItemName>
            <ItemPrice className='price'>
                {quantity} x ${price}
            </ItemPrice>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
