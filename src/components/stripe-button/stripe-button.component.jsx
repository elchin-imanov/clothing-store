import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StiripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I5GLOEjH3ug3LMY0XSnOHSiy04UgtzFF0pLg7K1kMUIVwEMm5wETZrNDSooEl9uQKd1yztwLTVMnCKUws1ltsU1008Egpg4YZ';

  const onToken = token => {
    console.log(token);
    alert(token);
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StiripeCheckoutButton;
