import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { loadStripe } from '@stripe/stripe-js';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
}

export function PaymentForm({ amount, onSuccess }: PaymentFormProps) {
  const handleStripePayment = async () => {
    const stripe = await loadStripe('your_publishable_key');
    // Initialize payment with Stripe
    // This is a placeholder - you'll need to implement the actual Stripe payment flow
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Payment Options</h2>
      
      <div className="space-y-6">
        <div>
          <button
            onClick={handleStripePayment}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Pay with Card
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>

        <div>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount.toString(),
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order!.capture().then(() => {
                onSuccess();
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}