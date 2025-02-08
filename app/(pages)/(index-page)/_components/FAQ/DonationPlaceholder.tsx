import Image from 'next/image';

export default function DonationPlaceholder() {
  return (
    <div>
      <Image
        src="/images/faq/donation_placeholder.svg"
        alt="waterfall gradient"
        width={1000}
        height={10}
      />
    </div>
  );
}
