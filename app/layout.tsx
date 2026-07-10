import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "RentalMS",
  description: "Rental billing, tenant payments, and property tracking.",
  applicationName: "RentalMS",
  appleWebApp: {
    capable: true,
    title: "RentalMS",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/apple-icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563EB" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="theme-bootstrap"
          strategy="beforeInteractive"
        >
          {`
try {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
} catch (_) {}
`}
        </Script>
        {children}
      </body>
    </html>
  );
}
