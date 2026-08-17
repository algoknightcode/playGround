// src/app/api/contact-form/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ContactForm from '@/models/ContactForm';

// POST: Save new submission from the form
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    await ContactForm.create(body);
    return NextResponse.json({ success: true, message: 'Submitted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to submit' }, { status: 500 });
  }
}

// GET: Fetch all submissions for Admin
export async function GET() {
  try {
    await connectDB();
    const submissions = await ContactForm.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, submissions });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to fetch' }, { status: 500 });
  }
}

// DELETE: Delete a submission by ID
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, message: 'ID required' }, { status: 400 });
    }

    await ContactForm.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete' }, { status: 500 });
  }
}
