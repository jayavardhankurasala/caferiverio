export interface SiteConfig {
  cafeName: string;
  tagline: string;
  subBrand: string;
  hotelLocation: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  contact: {
    primaryPhone: string;
    formattedPhone: string;
    displayPhone: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    email: string;
    isPhoneVerified: boolean;
  };
  social: {
    instagram: string;
    instagramHandle: string;
    googleMapsUrl: string;
    swiggyUrl?: string;
    zomatoUrl?: string;
    menuSourceUrl: string;
  };
  timings: {
    standardHours: string;
    alternativePublicListing: string;
    displayNote: string;
    openHour: number; // 24-hr format (e.g. 11 for 11:00 AM)
    closeHour: number; // 24-hr format (e.g. 23 for 11:00 PM)
    daysOpen: string;
    isVerifiedByOwner: boolean;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
    ogImage: string;
  };
  developmentChecklist: {
    item: string;
    status: "verified" | "needs_owner_confirmation";
    notes: string;
  }[];
}

export const siteConfig: SiteConfig = {
  cafeName: "Café Riverio",
  subBrand: "Exotic Ripples · by La Hospin",
  tagline: "Find Your Moment by the Godavari",
  hotelLocation: "La Hospin Hotel, Pushkar Ghat Circle",
  address: {
    line1: "LaHospin Hotel, Pushkar Ghat Circle",
    landmark: "Beside Godavari River Promenade, Near Godavari Arch Bridge",
    area: "Goka Varam, Rajamahendravaram",
    city: "Rajahmundry",
    state: "Andhra Pradesh",
    pincode: "533104",
    fullFormatted:
      "LaHospin Hotel, Pushkar Ghat Circle, Goka Varam, Rajamahendravaram, Rajahmundry, Andhra Pradesh 533104, India",
  },
  contact: {
    primaryPhone: "+917075469931",
    formattedPhone: "+91 70754 69931",
    displayPhone: "+91 70754 69931",
    whatsappNumber: "917075469931",
    whatsappFormatted: "+91 70754 69931",
    email: "info@lahospin.com", // Owner confirmation flag
    isPhoneVerified: true, // From public business listings
  },
  social: {
    instagram: "https://www.instagram.com/caferiverio/?hl=en",
    instagramHandle: "@caferiverio",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cafe+Riverio+La+Hospin+Hotel+Pushkar+Ghat+Rajahmundry",
    swiggyUrl: "https://www.swiggy.com/restaurants/cafe-riverio-rajahmundry", // Provisional
    zomatoUrl: "https://www.zomato.com/rajahmundry/cafe-riverio", // Provisional
    menuSourceUrl: "https://lahospin.dreamlook.in/",
  },
  timings: {
    standardHours: "11:00 AM – 11:00 PM",
    alternativePublicListing: "8:00 AM – 11:00 PM",
    displayNote: "Open daily · Timings subject to official owner confirmation",
    openHour: 11,
    closeHour: 23,
    daysOpen: "Monday – Sunday (All 7 Days)",
    isVerifiedByOwner: false, // Flagged for owner confirmation
  },
  seo: {
    title: "Café Riverio | Luxury Riverside Cafe & Lounge in Rajahmundry",
    description:
      "Experience breathtaking panoramic views of the Godavari Arch Bridge, artisan espresso brews, woodfire pizzas, and vibrant handcrafted coolers at Café Riverio by La Hospin, Pushkar Ghat, Rajahmundry.",
    keywords: [
      "Riverio Cafe",
      "Cafe Riverio Rajahmundry",
      "La Hospin Cafe",
      "Pushkar Ghat Cafe",
      "Godavari Bridge view cafe",
      "Best cafe in Rajahmundry",
      "Rajahmundry coffee shop",
      "Riverside dining Rajahmundry",
      "Cafe Riverio menu",
    ],
    canonicalUrl: "https://caferiverio.com",
    ogImage: "/images/twilight-godavari-bridge-lounge.png",
  },
  developmentChecklist: [
    {
      item: "Exact Opening & Closing Hours",
      status: "needs_owner_confirmation",
      notes: "Public listings suggest 11 AM - 11 PM vs 8 AM - 11 PM. Configured in site.ts.",
    },
    {
      item: "Contact Phone Number (+91 70754 69931)",
      status: "verified",
      notes: "Sourced from public business profile and verified on listing.",
    },
    {
      item: "Official Menu & Pricing",
      status: "verified",
      notes: "Extracted directly from lahospin.dreamlook.in with exact INR prices and dish names.",
    },
    {
      item: "Cafe Interior & Food Photography",
      status: "verified",
      notes: "Genuine authentic photos provided directly by client showcasing the Godavari bridge view and dishes.",
    },
    {
      item: "Online Ordering Channels (Swiggy / Zomato)",
      status: "needs_owner_confirmation",
      notes: "Direct verified URLs to be linked upon cafe manager authorization.",
    },
  ],
};
