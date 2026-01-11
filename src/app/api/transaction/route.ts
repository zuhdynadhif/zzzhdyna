import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Simple validation
    const { amount, description } = body;
    
    if (!amount || !description) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Amount and description are required' 
        },
        { status: 400 }
      );
    }

    // Simulate processing
    const transaction = {
      id: Math.random().toString(36).substring(2, 15),
      amount: amount,
      description: description,
      status: 'success',
      timestamp: new Date().toISOString()
    };

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Transaction processed successfully',
        data: transaction
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Invalid request body',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}
