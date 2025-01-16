import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email using a service like SendGrid
    // 3. Store the contact request in a database
    
    // For now, we'll just return a success response
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
} 