import type { Metadata } from "next";
import { DM_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
    subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
    weight: ["400", "500", "600", "700"],
    variable: "--font-eb-garamond",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Devarturo - Origin",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${dmSans.variable} ${ebGaramond.variable} antialiased`}
        >
            <body className="font-display flex flex-col min-h-dvh">{children}</body>
        </html >
    );
}
