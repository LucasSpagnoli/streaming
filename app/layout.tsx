import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Favorite Streaming App",
    description: "Your favorite streaming app, now on all devices.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${manrope.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <Header/>
        <main className={"grow"}>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
