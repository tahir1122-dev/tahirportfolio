import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Send email
        await sendEmail({ name, email, subject, message });

        return NextResponse.json(
            {
                success: true,
                message: 'Email sent successfully! I\'ll get back to you soon.'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            {
                error: 'Failed to send email. Please try again later.',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
