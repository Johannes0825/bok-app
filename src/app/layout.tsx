import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MyBooksProvider from "@/context/MyBooksContext";
import NavBar from "@/Components/NavBar";
import { ThemeProvider } from "@/context/ThemeContext";
// import { ThemeProvider } from "@/context/ThemeContext";
// import ClientLayout from "@/Components/ClientLayout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Gutendex - Book Library",
    description: "Browse and search books from Project Gutenberg",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {/* <ThemeProvider> */}
                {/* <ClientLayout></ClientLayout> */}
                {/* </ThemeProvider> */}
                <ThemeProvider>
                    <MyBooksProvider>
                        <NavBar />
                        {children}
                    </MyBooksProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
