import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#163D32",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://caferiverio.com"),
  title: {
    default: "Café Riverio | Luxury Riverside Cafe in Rajahmundry",
    template: "%s | Café Riverio",
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "Café Riverio by La Hospin" }],
  creator: "Café Riverio",
  publisher: "La Hospin Hospitality",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "Café Riverio | Luxury Riverside Cafe & Lounge in Rajahmundry",
    description: siteConfig.seo.description,
    url: siteConfig.seo.canonicalUrl,
    siteName: "Café Riverio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/twilight-godavari-bridge-lounge.png",
        width: 1200,
        height: 630,
        alt: "Panoramic view of the Godavari Arch Bridge from Café Riverio lounge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Riverio | Riverside Cafe & Lounge, Rajahmundry",
    description: siteConfig.seo.description,
    images: ["/images/twilight-godavari-bridge-lounge.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.cafeName,
    alternateName: "Riverio Cafe by La Hospin",
    description: siteConfig.seo.description,
    image: "https://caferiverio.com/images/twilight-godavari-bridge-lounge.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.0044", // Approximate Pushkar Ghat, Rajahmundry
      longitude: "81.7778",
    },
    telephone: siteConfig.contact.primaryPhone,
    servesCuisine: ["Coffee", "Continental", "Italian", "Cafe"],
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    url: siteConfig.seo.canonicalUrl,
    sameAs: [siteConfig.social.instagram],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased selection:bg-[#c3a165]/30 selection:text-[#163d32] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
