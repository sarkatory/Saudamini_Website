import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const payment = await razorpay.orders.create({
      amount: 29900, // amount in smallest currency unit (paise)
      currency: 'INR',
      receipt: 'order_' + Date.now(),
    });

    return NextResponse.json(payment);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create payment' },
      { status: 500 }
    );
  }
} 