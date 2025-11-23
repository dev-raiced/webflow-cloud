import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { user, password } = body;

  try {
    const response = await fetch(`https://${process.env.API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ user, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
};
