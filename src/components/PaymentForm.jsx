import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      setIsLoading(true);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://otif-server-dot-otif-mx.uc.r.appspot.com/payment",
          {
            amount: 1200,
            id,
            metadata: {
              name: "Omi",
              email: "omi@gmail.com",
            },
          }
        );

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <div className="FormContainer">
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              <button>Pay Now</button>
            )}
          </form>
        </div>
      ) : (
        <div>
          <h2>Your payment was submitted successfully !!!</h2>
        </div>
      )}
    </>
  );
}
