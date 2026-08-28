import Image from "next/image";

export default function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/icon-192x192.png"
      alt="Soft Step"
      width={size}
      height={size}
      className="rounded-lg"
      priority
    />
  );
}
