'use client';
import Banner from '@/components/Banner';
import Column from '@/components/Column';

export default function Home() {
  const handleAction = (action) => {
    console.log(`${action} clicked`);
  };

  const columns = [
    {
      title: 'Yoga Classes',
      imageSrc: '/window.svg',
      imageAlt: 'Yoga',
      paragraph: 'Join our expert-led yoga sessions designed to strengthen your body and calm your mind.',
      buttonText: 'Book Now'
    },
    {
      title: 'Meditation',
      imageSrc: '/globe.svg',
      imageAlt: 'Meditation',
      paragraph: 'Discover inner peace with our guided meditation programs to reduce stress.',
      buttonText: 'Start Free'
    },
    {
      title: 'Wellness',
      imageSrc: '/vercel.svg',
      imageAlt: 'Wellness',
      paragraph: 'Learn holistic wellness techniques from industry professionals.',
      buttonText: 'Learn More'
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <Banner 
        title="Welcome to Wellness"
        miniTitle="Discover a path to better health and inner peace with our comprehensive wellness programs."
        imageSrc="/next.svg"
        imageAlt="Wellness banner"
      />
      
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {columns.map((col, index) => (
            <Column
              key={index}
              title={col.title}
              imageSrc={col.imageSrc}
              imageAlt={col.imageAlt}
              paragraph={col.paragraph}
              buttonText={col.buttonText}
              onButtonClick={() => handleAction(col.title)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

