
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Translations object
const translations = {
  en: {
    // Header
    luminousYoga: 'Luminous Yoga',
    practice: 'Practice',
    about: 'About',
    classes: 'Classes',
    contact: 'Contact',
    beginJourney: 'Begin Journey',
    
    // Hero
    findYourInnerLight: 'Find Your Inner Light',
    heroSubtitle: 'Where ancient wisdom meets modern healing, discover the transformative power of mindful movement in the heart of New Zealand.',
    
    // Yoga Benefits Column
    healingThroughMovement: 'Healing Through Mindfulness & Movement',
    healingSubtitle: 'Your body holds infinite wisdom. Yoga is the gentle key that unlocks its natural ability to heal, restore, and flourish.',
    
    // Benefits
    backPainRelief: 'Relief for Body Pains',
    backPainDesc: 'Through mindful movement and gentle stretches, yoga addresses pain throughout the body—unlocking tight muscles, soothing joint discomfort, and promoting holistic healing.',
    
    pregnancySupport: 'Pregnancy Support',
    pregnancyDesc: 'Full-cycle maternity yoga creates a sacred space for expectant mothers, easing discomfort, preparing the body for birth, and nurturing the deep connection between mother and child.',
    
    kneePainRecovery: 'Mindfulness Through Meditation',
    kneePainDesc: 'Guided meditation practices calm the mind, reduce stress, and cultivate inner peace—helping you find stillness and clarity in our fast-paced world.',

    
    quote: 'The body achieves what the mind believes.',
    
    // Teacher Story Column
    fromShanghaiToAuckland: 'From Shanghai to Auckland',
    journeyOfPurpose: 'A Journey of Purpose',
    
    // Teacher profile
    meiLin: 'Mei Lin',
    yogaTeacherHealer: 'Yoga Teacher & Healer',
    meiLinStory1: 'Growing up in a small village outside Shanghai, Mei Lin discovered the ancient art of movement through her grandmother\'s tai chi practices at dawn. Those quiet mornings, watching the mist rise over the rice paddies, planted seeds that would bloom decades later.',
    meiLinStory2: 'After years in the corporate world left her disconnected from her body and spirit, a chance encounter with a traveling yoga master reignited that childhood wonder. She dedicated herself to deep study, training in India and Thailand.',
    meiLinStory3: 'Now calling New Zealand home, Mei Lin weaves Eastern wisdom with modern understanding, helping others find their path back to wholeness—one breath at a time.',
    
    // Teaching Philosophy
    teachingPhilosophy: 'Teaching Philosophy',
    philosophyQuote: '"Unite your mind, body and actions as a way of life, not just on the yoga mat."',
    
    // Stats
    yearsPractice: 'Years Practice',
    studentsGuided: 'Students Guided',
    momentsOfWonder: 'Moments of Wonder',
    
    // Footer
    copyright: '© 2026 Luminous Yoga · Auckland, New Zealand',
    footerMotto: 'Breathe deeply. Move gently. Live fully.',
  },
  
  zh: {
    // Header
    luminousYoga: '光明瑜伽',
    practice: '练习',
    about: '关于',
    classes: '课程',
    contact: '联系',
    beginJourney: '开始旅程',
    
    // Hero
    findYourInnerLight: '寻找你内心的光',
    heroSubtitle: '古老智慧与现代疗愈的交汇之地，在新西兰的中心发现正念运动的变革力量。',
    
    // Yoga Benefits Column
    healingThroughMovement: '正念 & 运动疗愈',
    healingSubtitle: '你的身体蕴藏着无限的智慧。瑜伽是打开其自然疗愈、恢复和繁荣能力的温和钥匙。',
    
    // Benefits
    backPainRelief: '缓解身体疼痛',
    backPainDesc: '通过正念运动和轻柔伸展，瑜伽缓解全身疼痛——放松紧绷的肌肉，缓解关节不适，促进整体疗愈。',
    
    pregnancySupport: '孕期支持',
    pregnancyDesc: '孕产全周期瑜伽为准妈妈创造了一个神圣的空间，缓解不适，为分娩做准备，并培养母子之间的深度联系。',
    
    kneePainRecovery: '正念冥想',
    kneePainDesc: '引导式冥想练习可以平静心灵、减轻压力、培养内在平和——帮助你在快节奏的世界中找到宁静与清明。',
    
    quote: '身体达成心灵所相信的。',
    
    // Teacher Story Column
    fromShanghaiToAuckland: '从上海到奥克兰',
    journeyOfPurpose: '有目的的旅程',
    
    // Teacher profile
    meiLin: '林梅',
    yogaTeacherHealer: '瑜伽老师 & 疗愈师',
    meiLinStory1: '在上海郊外的一个小村庄长大，林梅通过祖母清晨的太极练习发现了古老的运动艺术。那些安静的早晨，看着薄雾升起在稻田上，埋下了几十年后绽放的种子。',
    meiLinStory2: '在企业界工作多年后，她与自己的身体和精神失去了联系，偶然遇到一位旅行的瑜伽大师重新点燃了童年的奇迹。她致力于深入学习，在印度和泰国接受培训。',
    meiLinStory3: '现在新西兰是她的家，林梅将东方智慧与现代理解编织在一起，帮助他人找到回归完整性的道路——一次一个呼吸。',
    
    // Teaching Philosophy
    teachingPhilosophy: '教学理念',
    philosophyQuote: '"思想，身体，行动知行合一，不仅仅在瑜伽垫上"',
    
    // Stats
    yearsPractice: '练习年数',
    studentsGuided: '指导学生',
    momentsOfWonder: '奇妙时刻',
    
    // Footer
    copyright: '© 2026 光明瑜伽 · 新西兰奥克兰',
    footerMotto: '深沉呼吸。轻柔移动。充分生活。',
  },
};

// Language Context
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for saved preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    } else {
      // Check browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'zh') {
        setLanguage('zh');
      }
    }
    setMounted(true);
  }, []);

  const t = (key) => {
    if (!mounted) return translations.en[key] || key;
    return translations[language][key] || translations.en[key] || key;
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const setLanguageTo = (lang) => {
    if (lang === 'en' || lang === 'zh') {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguageTo, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default translations;

