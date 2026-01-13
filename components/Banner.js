'use client';
import Image from 'next/image';

export default function Banner({ title, miniTitle, imageSrc, imageAlt = 'Banner image' }) {
  return (
    <div className="hero min-h-[50vh] bg-base-200 relative">
      <div className="hero-content flex-col lg:flex-row gap-8 w-full max-w-6xl">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6 text-lg">{miniTitle}</p>
        </div>
        <div className="flex-1 relative w-full h-64 lg:h-80">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

