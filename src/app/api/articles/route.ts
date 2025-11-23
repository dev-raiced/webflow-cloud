import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const response = await fetch('https://api.webflow.com/v2/collections/<your-collection-id>/items/live', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.WEBFLOW_API_TOKEN}`,
      },
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
};
