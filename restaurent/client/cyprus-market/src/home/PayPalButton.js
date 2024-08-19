// src/components/PayPalButton.js
import React, { useEffect } from 'react';

const PayPalButton = ({ amount }) => {
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (message, ...args) => {
      if (message.includes('Script error')) {
        // Suppress specific "Script error" messages
        return;
      }
      originalConsoleError(message, ...args); // Allow other messages
    };

    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AWnlCCkogZzfBfkzFBXhVnGnseOdJOUsBRwx2kWz3Kkap4Ee_XEGSR641w39vxQhmiaQIyWLVyvEDJak"; // Replace with your PayPal client ID
    script.async = true;
    script.onload = () => {
      try {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toFixed(2) // Dynamic total amount
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }
        }).render('#paypal-button-container');
      } catch (error) {
        console.error('Error configuring PayPal Buttons:', error);
      }
    };

    script.onerror = (err) => {
      console.error("PayPal script load error:", err);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      console.error = originalConsoleError; // Restore original console.error
    };
  }, [amount]);

  return <div id="paypal-button-container" />;
};

export default PayPalButton;
