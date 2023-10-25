import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    weight: "700",
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata = {
    title: "Dummy JSON",
    description: "Dummy JSON",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
