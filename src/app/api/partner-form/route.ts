// src/app/api/partner-form/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import PartnerForm from '@/models/PartnerForm';

// POST: Save partner submission
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    await PartnerForm.create(body);
    return NextResponse.json({ success: true, message: 'Partner request submitted' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to submit' }, { status: 500 });
  }
}

// GET: Fetch all partner requests for Admin
export async function GET() {
  try {
    await connectDB();
    const submissions = await PartnerForm.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, submissions });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to fetch' }, { status: 500 });
  }
}

// DELETE: Delete a partner request by ID
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    await PartnerForm.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete' }, { status: 500 });
  }
}
