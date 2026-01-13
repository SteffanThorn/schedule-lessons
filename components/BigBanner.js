'use client';
import Image from 'next/image';

export default function BigBanner({ imageSrc, imageAlt = 'Big banner', text, buttonText, onButtonClick }) {
  return (
    <div className="hero min-h-[80vh] relative">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content w-full">
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl mb-4">{text}</p>
            {buttonText && (
              <button 
                onClick={onButtonClick}
                className="btn btn-primary btn-lg"
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

