import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Google Seach Clone",
    description: "An google search clone made with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={`${inter.className} relative min-h-screen`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
