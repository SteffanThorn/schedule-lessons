'use client';
import Image from 'next/image';

export default function Column({ title, imageSrc, imageAlt, paragraph, buttonText, onButtonClick }) {
  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-sm">
      <figure className="px-4 pt-4 h-48 relative">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-cover rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-base mt-2">{paragraph}</p>
        {buttonText && (
          <div className="card-actions mt-4">
            <button 
              onClick={onButtonClick}
              className="btn btn-primary"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

