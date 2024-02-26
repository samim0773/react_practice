import "./App.css";
import Stepper from "./components/Stepper";

const CheckoutStep = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your content details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Provide your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered.</div>,
  },
];

function App() {
  return (
    <>
      <div>
        <h1>Stepper project</h1>
        <Stepper stepsConfig = {CheckoutStep} />
      </div>
    </>
  );
}

export default App;
