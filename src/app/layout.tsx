import { ClerkProvider } from "@clerk/nextjs";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "../styles/globals.css";

export const metadata = {
  title: "Imaginify",
  description: "AI-Powered image generator",
};

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: "#624cf5"}
    }}>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-IBMPlex antialiased",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
