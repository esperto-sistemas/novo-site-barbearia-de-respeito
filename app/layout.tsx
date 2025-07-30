import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "../components/PostHogProvider";

export const metadata: Metadata = {
  title: "APP Barbearia de Respeito",
  description: "Sistema de agendamento de barbearia",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
