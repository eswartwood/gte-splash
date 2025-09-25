export const metadata = {
  title: "Global Token Exchange",
  description: "Mint. Own. Monetize.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
