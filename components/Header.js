'use client';

import { Flower2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t, mounted } = useLanguage();

  const navItems = [
    { key: 'practice', href: '#practice' },
    { key: 'about', href: '#about' },
    { key: 'classes', href: '#classes' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header className="relative z-10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 rounded-xl bg-glow-cyan/10 group-hover:bg-glow-cyan/20 
                        transition-colors duration-300 box-glow">
            <Flower2 className="w-6 h-6 text-glow-cyan" />
          </div>
          <span className="font-display text-2xl text-foreground group-hover:text-glow-subtle 
                         transition-all duration-300">
            {mounted ? t('luminousYoga') : 'Luminous Yoga'}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-glow-cyan 
                       transition-colors duration-300 tracking-wide"
            >
              {mounted ? t(item.key) : item.key}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher showLabel={true} />
          
          <button className="px-5 py-2.5 rounded-full bg-glow-cyan/10 border border-glow-cyan/30 
                           text-glow-cyan text-sm hover:bg-glow-cyan/20 hover:box-glow
                           transition-all duration-300">
            {mounted ? t('beginJourney') : 'Begin Journey'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

