import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "../components/PostHogProvider";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '990224526443802');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=990224526443802&ev=PageView&noscript=1"
          />
        </noscript>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('mensal')?.addEventListener('click', function() {
                fbq('track', 'InitiateCheckout', {
                  content_name: 'Plano Mensal',
                  value: 29.90,
                  currency: 'BRL'
                });
              });

              document.getElementById('anual')?.addEventListener('click', function() {
                fbq('track', 'InitiateCheckout', {
                  content_name: 'Plano Anual',
                  value: 59.00,
                  currency: 'BRL'
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
