import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Sidebar from '../components/Sidebar';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Nick MacKenzie | Full Stack Developer",
        template: "%s | Nick MacKenzie",
    },
    description:
        "Full Stack Developer | JavaScript | React | Express | MongoDB | SQL | Git/Github. 10 years of professional experience in both team and independent settings",
    openGraph: {
        title: "Nick MacKenzie | Full Stack Developer",
        description:
            "Full Stack Developer | JavaScript | React | Express | MongoDB | SQL | Git/Github. 10 years of professional experience in both team and independent settings",
        url: "https://nickmackenzie.dev",
        siteName: "Nick MacJenzie | Full Stack Developer",
        images: [
            {
                url: "https://leerob.io/og.jpg",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en-CA",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        shortcut: "/favicon.ico",
    },
    // verification: {
    //   google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    //   yandex: '14d2e73487fa6c71',
    // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <Sidebar />
                <main>
                    {children}
                    <Analytics />
                </main>
            </body>
        </html>
    );
}
