import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPagePlayfulPatternConcept() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="sticky top-0 w-full z-50 bg-[#F9FAF7]/80 dark:bg-emerald-950/80 backdrop-blur-md border-b border-emerald-100/20 dark:border-emerald-800/20 shadow-sm dark:shadow-none font-['Plus_Jakarta_Sans'] font-medium">
<div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
<a className="text-2xl font-black text-emerald-900 dark:text-emerald-50 tracking-tight" href="#">sugi.dev</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-emerald-800/70 dark:text-emerald-200/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all scale-102 active:scale-98 transition-transform duration-200" href="#">Programs</a>
<a className="text-emerald-800/70 dark:text-emerald-200/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all scale-102 active:scale-98 transition-transform duration-200" href="#">Science</a>
<a className="text-emerald-800/70 dark:text-emerald-200/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all scale-102 active:scale-98 transition-transform duration-200" href="#">Community</a>
<a className="text-emerald-800/70 dark:text-emerald-200/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all scale-102 active:scale-98 transition-transform duration-200" href="#">Journal</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-emerald-800/70 dark:text-emerald-200/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all" href="#">Login</a>
<a className="bg-emerald-900 text-emerald-50 px-5 py-2.5 rounded-full hover:bg-emerald-800 transition-colors scale-102 active:scale-98 transition-transform duration-200" href="#">Get Started</a>
</div>
</div>
</nav>
<main>

<section className="relative bg-primary text-on-primary py-24 lg:py-32 overflow-hidden rounded-b-xl">

<div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
<span className="material-symbols-outlined absolute top-10 left-10 text-[120px] text-primary-fixed-dim -rotate-12" style={{"fontVariationSettings": "FILL 1"}}>eco</span>
<span className="material-symbols-outlined absolute top-40 right-20 text-[80px] text-primary-fixed-dim rotate-45" style={{"fontVariationSettings": "FILL 1"}}>spa</span>
<span className="material-symbols-outlined absolute bottom-20 left-1/4 text-[150px] text-primary-fixed-dim rotate-12" style={{"fontVariationSettings": "FILL 1"}}>local_florist</span>
<span className="material-symbols-outlined absolute top-1/2 right-1/3 text-[90px] text-primary-fixed-dim -rotate-45" style={{"fontVariationSettings": "FILL 1"}}>water_drop</span>
</div>
<div className="max-w-7xl mx-auto px-container-padding relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col gap-stack-lg">
<div className="inline-flex items-center gap-2 bg-primary-container px-4 py-2 rounded-full w-max">
<span className="material-symbols-outlined text-primary-fixed" style={{"fontVariationSettings": "FILL 1"}}>bolt</span>
<span className="font-label-bold text-label-bold text-primary-fixed">The Future of Wellness</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-primary leading-tight">
                            Grow your health with natural precision.
                        </h1>
<p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-xl">
                            A modern platform that blends organic living with intelligent tracking. Discover a playful, grounded approach to feeling your best every single day.
                        </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center justify-center bg-secondary-fixed text-on-secondary-fixed font-button-text text-button-text px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-secondary-fixed/20" href="#">
                                Start Your Journey
                            </a>
<a className="inline-flex items-center justify-center border-2 border-primary-fixed text-primary-fixed font-button-text text-button-text px-8 py-4 rounded-full hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors" href="#">
                                Explore Features
                            </a>
</div>
</div>
<div className="relative">

<div className="absolute -top-6 -right-6 z-20 bg-tertiary-container text-on-tertiary-container w-24 h-24 rounded-full flex flex-col items-center justify-center rotate-12 shadow-xl shadow-black/20">
<span className="font-label-bold text-label-bold">100%</span>
<span className="text-xs font-bold uppercase tracking-wider">Natural</span>
</div>

<div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl shadow-primary/50">
<img className="w-full h-full object-cover" data-alt="Young woman practicing yoga stretches in a bright, sunlit modern room with large green indoor plants, conveying wellness and organic vitality" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmGbnpA5DrNdPRUwjU21zG-7RI2E9pr3hFd1rqqdVr0JE5ogpQNT2T0nwYnG7awmvkBs5VTOi6jM3ylehn2XG7C0EVx6IARbkzCBgfVCw9dQaW7bGuyFjbcU9ZEycx_u97RW54P5vtLbZt7OHp2sDYYbGEnE894wW7zy0-Rn8BzO3WRu0Lz4--KHndtaWmtepz5_pZ-yBp3fm6ILKOATcDvVmGghlO6E8CZRihLA5CCtqB6SkEeHfSgF-eS57JbCtWLlxVdAZw9Q"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-section-margin bg-surface-bright">
<div className="max-w-7xl mx-auto px-container-padding">
<div className="text-center mb-16 flex flex-col items-center gap-stack-md">
<h2 className="font-headline-lg text-headline-lg text-on-surface">Structured for Growth</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                        Everything you need to cultivate a balanced lifestyle, neatly organized in our organic toolkit.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap">

<div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(47,82,73,0.05)] relative overflow-hidden flex flex-col justify-between group">

<div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container rounded-bl-full opacity-50 -z-0 transition-transform group-hover:scale-110 duration-500"></div>
<div className="relative z-10 mb-8">
<div className="w-14 h-14 bg-secondary text-on-secondary rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>monitoring</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Intuitive Progress Tracking</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                                Watch your wellness journey unfold with visual progress bars that grow alongside you. High-contrast indicators make celebrating wins easy.
                            </p>
</div>
<div className="relative z-10 w-full h-48 rounded-lg overflow-hidden border border-outline-variant/30">
<img className="w-full h-full object-cover opacity-90" data-alt="Clean minimal digital dashboard showing colorful data visualization charts on a screen, representing health progress tracking" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRwQJQr6GrmtzilbyPvlMDtT0RuNzBeKDp3RQ0KBE-rsde_SUNocDsWFbpczOr2LuTG2v9uIORJhrqcvIs51war83W7pkEd6Lf7brai-20mtgDDYCagMiSIlayjKk8I3J60-YdqOhVYHtyFOzyThw2i7KejVAcoVy9kBBOOzyOyz14Z8Lv7qtqAQparSVK6_MecsM3O8t3mNcmHOQo0Qjs5vKVp6g9-h3EHbKnnweHhf7NjHBzwp94E7oB_h2nOlEbsDm1gdAnyg"/>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(47,82,73,0.05)] relative overflow-hidden flex flex-col">

<div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed w-12 h-12 rounded-full flex items-center justify-center rotate-[15deg]">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>auto_awesome</span>
</div>
<div className="w-14 h-14 bg-surface-container text-primary rounded-full flex items-center justify-center mb-6 mt-4">
<span className="material-symbols-outlined">psychology</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Mindful Prompts</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                            Daily nudges designed not to distract, but to ground you. Small moments of reflection built into your routine.
                        </p>
<a className="font-label-bold text-label-bold text-primary hover:text-secondary mt-6 flex items-center gap-1" href="#">
                            Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>

<div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(47,82,73,0.05)] relative overflow-hidden flex flex-col">
<div className="w-14 h-14 bg-surface-container text-primary rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined">restaurant_menu</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Organic Nutrition</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                            Discover recipes and meal plans that focus on whole, natural ingredients tailored to your specific wellness goals.
                        </p>
<a className="font-label-bold text-label-bold text-primary hover:text-secondary mt-6 flex items-center gap-1" href="#">
                            Explore recipes <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>

<div className="md:col-span-2 bg-primary-container text-on-primary-container rounded-xl p-8 relative overflow-hidden flex items-center">

<div className="absolute right-0 bottom-0 w-1/2 h-full bg-primary/20 rounded-tl-[100px]"></div>
<div className="relative z-10 max-w-lg">
<span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container font-label-bold text-label-bold rounded-full mb-4">Community</span>
<h3 className="font-headline-md text-headline-md mb-2">Grow Together</h3>
<p className="font-body-md text-body-md text-primary-fixed-dim mb-6">
                                Join a network of like-minded individuals. Share your journey, participate in group challenges, and cultivate a supportive environment.
                            </p>
<button className="bg-secondary-fixed text-on-secondary-fixed font-button-text text-button-text px-6 py-3 rounded-full hover:scale-105 transition-transform">
                                Join the Grove
                            </button>
</div>

<div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-80 mix-blend-overlay">
<span className="material-symbols-outlined text-[120px]" style={{"fontVariationSettings": "FILL 1"}}>groups</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full rounded-t-[40px] mt-20 border-t border-emerald-50 dark:border-emerald-900 shadow-[0_-4px_20px_rgba(47,82,73,0.05)] bg-white dark:bg-emerald-950 font-['Plus_Jakarta_Sans'] text-sm text-emerald-900 dark:text-emerald-50">
<div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-xl font-bold text-emerald-900 dark:text-emerald-50 opacity-80 hover:opacity-100 transition-opacity">sugi.dev</span>
<p className="text-emerald-800/60 dark:text-emerald-200/60">© 2024 sugi.dev. Cultivating wellness through tech.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-emerald-800/60 dark:text-emerald-200/60 hover:text-emerald-500 dark:hover:text-emerald-400 underline underline-offset-4 transition-all" href="#">About Us</a>
<a className="text-emerald-800/60 dark:text-emerald-200/60 hover:text-emerald-500 dark:hover:text-emerald-400 underline underline-offset-4 transition-all" href="#">Privacy Policy</a>
<a className="text-emerald-800/60 dark:text-emerald-200/60 hover:text-emerald-500 dark:hover:text-emerald-400 underline underline-offset-4 transition-all" href="#">Terms of Service</a>
<a className="text-emerald-800/60 dark:text-emerald-200/60 hover:text-emerald-500 dark:hover:text-emerald-400 underline underline-offset-4 transition-all" href="#">Contact</a>
</div>
</div>
</footer>

    </div>
  );
}
