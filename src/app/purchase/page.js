'use client';
import Image from 'next/image';
import { useState } from 'react';
import Script from 'next/script';

export default function Purchase() {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
      });
      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: order.amount,
        currency: order.currency,
        name: 'Saudamini',
        description: 'Purchase Saudamini eBook',
        order_id: order.id,
        handler: function (response) {
          // Handle successful payment
          console.log(response);
          // Here you would typically:
          // 1. Verify the payment on your server
          // 2. Send the eBook download link
          // 3. Show success message
        },
        prefill: {
          name: '',
          email: '',
        },
        theme: {
          color: '#800000',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Book Preview */}
            <div>
              <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-xl bg-gray-100">
                <Image
                  src="/images/book-cover.jpg"
                  alt="Saudamini Book Cover"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Purchase Details */}
            <div>
              <h1 className="text-4xl font-serif mb-4 gradient-text">Saudamini</h1>
              <p className="text-xl mb-2">By Mamata Sarkar</p>
              <div className="text-3xl font-bold mb-6">₹299 <span className="text-lg text-gray-600">/ $5</span></div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> DRM-protected eBook in PDF format
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> ePub version for e-readers
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Instant download after purchase
                  </li>
                </ul>
              </div>

              <button
                onClick={handlePurchase}
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-maroon-700 
                  hover:from-amber-700 hover:to-maroon-800 text-white rounded-lg 
                  transition-all duration-300 shadow-lg disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Buy Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 