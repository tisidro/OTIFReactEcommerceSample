import React from "react";
import PaymentForm from "../components/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PUBLIC_KEY =
  "pk_test_51K9eQhD2aYNNCPk1M5PTaRfox9olW6piJweUn9nXwEfbw8DEoe6gjW1JZYNT9NEJXh2SvZ5Sm8B1JrxgpgqiQesb00t48BBEur";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
