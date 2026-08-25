import Image from "next/image";

export function Logo({ dark }: { dark?: boolean }) {
  return (
    <Image
      src="/images/mama-nest-logo.JPG"
      alt="Mama Nest"
      width={160}
      height={50}
      priority
      className="h-auto w-[140px] object-contain"
    />
  );
}