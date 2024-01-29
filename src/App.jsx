import { useEffect } from 'react'
import PaystackPop from '@paystack/inline-js'
import './App.css'


function App() {
  const paystack = new PaystackPop()
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  
  useEffect(() => {
    paystack.paymentRequest({
      key: PUBLIC_KEY,
      email: `${Math.random().toString(36).substring(2)}@email.com`,
      amount: 10000,
      currency: 'NGN',
      container: 'paystack-apple-pay',
      style: { 
        theme: 'dark',
        applePay: { 
          margin: '10px',
          padding: '10px',
          width: '100%',
          borderRadius: '8px',
          type: 'pay',
          locale: 'en'
        } 
      }, // custom styles for button elements
      onSuccess(response) {
        // do stuff
        console.log("response: ", response)
      },
      onError() {
        // do stuff
      },
      onCancel() {
        // do stuff
      },
      onElementsMount(elements) { // { applePay: true } or null
        if (elements) {
          console.log(`Successfully mounted elements: ${JSON.stringify(elements)}`);
        } else {
          console.log('Could not load elements');
        }
      }
    });
  })

  return (
    <>
      <h1>Paystack + Apple Pay</h1>
      <div id="paystack-apple-pay" className="card">
      </div>
    </>
  )
}

export default App
