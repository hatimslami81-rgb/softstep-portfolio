/**
 * Soft Step public company & contact facts from official documents and user input.
 */
export type WhatsAppLine = {
  id: "indonesia" | "syria";
  display: string;
  e164: string;
};

export const site = {
  legalName: "PT Softstep Inovasi Sistem",
  whatsapp: [
    {
      id: "indonesia",
      display: "+62 877 2026 0011",
      e164: "6287720260011",
    },
    {
      id: "syria",
      display: "+963 936 317 358",
      e164: "963936317358",
    },
  ] satisfies WhatsAppLine[],
  /** Nomor Induk Berusaha (NIB) — Risk-Based Business License, Aug 2026 */
  nib: "1208260063027",
  addressShort: "Bogor, Jawa Barat, Indonesia",
  addressFull:
    "Jalan Raya Pajajaran Ruko No. 4 & 5, Bantarjati, Bogor Utara, Bogor, Jawa Barat 16153, Indonesia",
} as const;

export function whatsappUrl(e164: string) {
  return `https://wa.me/${e164}`;
}
