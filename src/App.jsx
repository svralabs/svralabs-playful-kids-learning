import React from 'react'

const CARDS = [
  {
    bg: 'bg-surface-light',
    pattern: 'pattern-concentric opacity-50',
    icon: 'quiz',
    iconColor: 'text-primary-container',
    title: 'Fun',
    script: 'Quiz',
    scriptColor: 'text-primary-container',
    desc: 'Test your understanding with a short but fun quizzes!',
    descClass: 'text-on-surface-variant',
    titleClass: 'text-on-surface',
  },
  {
    bg: 'bg-bento-primary',
    pattern: 'pattern-blobs',
    icon: 'lightbulb',
    iconColor: 'text-primary-container',
    title: 'Creative',
    script: 'Activities',
    scriptColor: 'text-secondary-fixed',
    desc: 'Discover enjoyable activities such as coloring, crafting, and science.',
    descClass: 'text-primary-fixed',
    titleClass: 'text-on-primary',
  },
  {
    bg: 'bg-bento-secondary',
    pattern: 'pattern-dots',
    icon: 'sports_esports',
    iconColor: 'text-tertiary-container',
    title: 'Learn with',
    script: 'Games',
    scriptColor: 'text-tertiary-container',
    desc: 'Learn something new while your kids playing games!',
    descClass: 'text-on-surface-variant',
    titleClass: 'text-on-surface',
  },
]

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen">
      <nav aria-hidden="true" className="hidden" />
      <main className="w-full px-margin py-16 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
          <div className="max-w-2xl">
            <h2 className="text-display font-black text-on-surface">
              Our interactive <span className="font-calligraphic text-primary-container font-normal">features</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="bg-surface-light text-primary-container font-label-bold px-6 py-3 rounded-full hover:scale-105 transition-transform cursor-default">#funny</span>
            <span className="bg-secondary-container text-on-secondary-container font-label-bold px-6 py-3 rounded-full hover:scale-105 transition-transform cursor-default">#enjoy</span>
            <span className="bg-primary-container text-on-primary font-label-bold px-6 py-3 rounded-full hover:scale-105 transition-transform cursor-default">#happy</span>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {CARDS.map((c) => (
            <article
              key={c.script}
              className={`${c.bg} rounded-[32px] p-cell-padding relative overflow-hidden flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className={`absolute inset-0 ${c.pattern} pointer-events-none`} />
              <div className={`scalloped w-16 h-16 flex items-center justify-center shadow-sm z-10 ${c.iconColor}`}>
                <span className="material-symbols-outlined text-[32px]">{c.icon}</span>
              </div>
              <div className="mt-auto pt-16 z-10">
                <h3 className={`font-headline-lg ${c.titleClass}`}>
                  {c.title}{' '}
                  <span className={`font-calligraphic ${c.scriptColor} font-normal text-[40px]`}>{c.script}</span>
                </h3>
                <p className={`font-body-default ${c.descClass} mt-2 max-w-[250px]`}>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
