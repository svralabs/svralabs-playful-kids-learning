import { useState } from 'react';

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('Explore');

  const categories = [
    {
      id: 'math',
      title: 'Numbers & Shapes!',
      description: 'Count stars, build with blocks, and solve fun puzzles to unlock your next badge.',
      tags: ['Level 2', 'Geometry'],
      icon: 'calculate',
      color: 'bg-primary-container',
      textColor: 'text-on-primary-container',
      span: { md: 'col-span-8 row-span-2' }
    },
    {
      id: 'science',
      title: 'Space Explorer',
      description: 'Journey to Mars and back.',
      icon: 'science',
      color: 'bg-secondary-container',
      textColor: 'text-on-secondary-container',
      span: { md: 'col-span-4 row-span-1' },
      new: true
    },
    {
      id: 'art',
      title: 'Color Splash',
      description: 'Mix paints and draw.',
      icon: 'palette',
      color: 'bg-primary-fixed',
      textColor: 'text-on-primary-fixed',
      span: { md: 'col-span-4 row-span-1' },
      border: 'border-2 border-primary-fixed-dim'
    },
    {
      id: 'language',
      title: 'Word Wizards',
      description: 'Read stories and learn new words with interactive tales.',
      icon: 'menu_book',
      color: 'bg-surface-container-high',
      textColor: 'text-on-surface',
      span: { md: 'col-span-6 row-span-1' },
      border: 'border-2 border-outline-variant',
      layout: 'flex-row'
    },
    {
      id: 'daily',
      title: 'Daily Challenge',
      description: 'Complete your daily learning quest!',
      icon: 'star',
      color: 'bg-surface-container-lowest',
      textColor: 'text-on-surface',
      span: { md: 'col-span-6 row-span-1' },
      border: 'border-2 border-surface-dim',
      layout: 'flex-row'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* TopNavBar (Web Only) */}
      <nav className="hidden md:flex bg-background justify-between items-center w-full px-margin py-base max-w-full sticky top-0 z-50">
        <div className="font-headline-lg text-headline-lg font-black text-primary">
          KidsPlay Learning
        </div>
        <div className="flex gap-8 items-center">
          {['Explore', 'Quizzes', 'Activities', 'My Progress'].map((item) => (
            <a
              key={item}
              className={`font-body-lg text-body-lg transition-colors duration-200 ${activeTab === item ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
              href="#"
              onClick={() => setActiveTab(item)}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-6 py-2 rounded-full hover:scale-95 transition-transform duration-150 border-2 border-transparent">
            Parent Portal
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-surface-variant">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-surface-variant">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-margin pt-8 md:pt-12">
        <header className="mb-gutter text-center md:text-left">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-2">Pick Your Adventure</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Where do you want to go today?</p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[250px]">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`rounded-xl ${category.color} ${category.textColor} p-cell-padding relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300 ${category.span.md} ${category.border || ''} ${category.layout === 'flex-row' ? 'md:flex-row' : ''}`}
            >
              {category.id === 'math' && (
                <div className="absolute inset-0 pattern-circles opacity-50"></div>
              )}
              {category.id === 'science' && (
                <div className="absolute inset-0 pattern-dots from-secondary-fixed/50 to-transparent"></div>
              )}
              {category.id === 'art' && (
                <div className="absolute inset-0 pattern-circles-amber"></div>
              )}

              <div className={`relative z-10 ${category.layout === 'flex-row' ? 'flex justify-between items-center w-full' : 'flex justify-between items-start'}`}>
                <div className={`bg-primary-fixed text-primary px-4 py-2 rounded-full font-label-bold text-label-bold inline-flex items-center gap-2 border-2 border-transparent ${category.id === 'language' ? 'bg-surface text-primary border border-outline-variant' : ''}`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{category.icon}</span>
                  {category.id === 'math' ? 'Math Magic' : category.id === 'language' ? 'Story Time' : ''}
                </div>
                {category.id === 'math' && (
                  <button className="bg-on-primary text-primary-container w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </button>
                )}
                {category.new && (
                  <span className="bg-surface/50 px-3 py-1 rounded-full text-xs font-label-bold uppercase tracking-wider">New</span>
                )}
              </div>

              <div className={`relative z-10 ${category.layout === 'flex-row' ? 'w-1/2 pr-4' : 'w-full md:w-2/3'}`}>
                <h3 className={`font-headline-md text-headline-md mb-2 ${category.id === 'art' ? 'text-primary' : ''}`}>{category.title}</h3>
                <p className={`font-body-default text-body-default ${category.id === 'art' ? 'text-on-surface-variant' : 'opacity-80'}`}>{category.description}</p>
                {category.tags && (
                  <div className="flex gap-2 mt-4">
                    {category.tags.map((tag, index) => (
                      <span key={index} className="bg-primary/50 text-on-primary px-3 py-1 rounded-full text-sm font-label-bold">{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              {category.id === 'language' && (
                <div className="w-1/2 relative h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-secondary-container rounded-full flex items-center justify-center pattern-dots from-secondary-fixed/40 to-transparent">
                    <span className="material-symbols-outlined text-5xl text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                  </div>
                </div>
              )}

              {category.id === 'math' && (
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full opacity-30 blur-2xl"></div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
