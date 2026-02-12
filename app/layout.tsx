import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "M Tahir - Full-Stack Developer & AI Specialist",
    description: "Professional portfolio of M Tahir - Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js, NestJS, and AI automation",
    keywords: "Full-Stack Developer, React, Next.js, TypeScript, Node.js, NestJS, MERN Stack, AI Automation",
    authors: [{ name: "Muhammad Tahir" }],
    icons: {
        icon: "/assests/favicon (2).png",
        apple: "/assests/favicon (2).png",
    },
    openGraph: {
        title: "M Tahir - Full-Stack Developer & AI Specialist",
        description: "Professional portfolio showcasing modern web development and AI automation projects",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
            <body className={`${inter.className} overflow-x-hidden w-full`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="overflow-x-hidden w-full max-w-full">
                        {children}
                    </div>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
