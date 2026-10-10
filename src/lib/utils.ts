export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function isCafeCurrentlyOpen(): {
  isOpen: boolean;
  statusText: string;
  closingSoon: boolean;
} {
  // Opening: 11:00 AM, Closing: 11:00 PM (23:00) IST
  const now = new Date();
  // Compute IST hours
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const istMinutesTotal = (utcHours * 60 + utcMinutes + 330) % 1440;
  const currentHour = Math.floor(istMinutesTotal / 60);

  const openHour = 11;
  const closeHour = 23;

  const isOpen = currentHour >= openHour && currentHour < closeHour;
  const closingSoon = isOpen && currentHour >= closeHour - 1;

  if (isOpen) {
    if (closingSoon) {
      return {
        isOpen: true,
        statusText: "Open Now · Closes at 11:00 PM",
        closingSoon: true,
      };
    }
    return {
      isOpen: true,
      statusText: "Open Now · 11:00 AM – 11:00 PM",
      closingSoon: false,
    };
  }

  return {
    isOpen: false,
    statusText: "Closed Now · Opens at 11:00 AM",
    closingSoon: false,
  };
}
