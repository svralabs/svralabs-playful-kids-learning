import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPagePlayfulGraphics() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-[#2F5249]/5 dark:border-white/5 shadow-[0_4px_20px_-4px_rgba(47,82,73,0.06)]">
<div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 py-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-3xl icon-fill">eco</span>
<a className="text-xl font-bold text-[#2F5249] dark:text-[#97B067] tracking-tighter font-h3" href="#">sugi.dev</a>
</div>
<ul className="hidden md:flex gap-8 items-center font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight">
<li><a className="text-[#2F5249] dark:text-white border-b-2 border-[#97B067] pb-1 hover:text-[#97B067] transition-colors duration-300" href="#">Programs</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-[#97B067] transition-colors duration-300" href="#">Nutrition</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-[#97B067] transition-colors duration-300" href="#">Wellness</a></li>
<li><a className="text-slate-600 dark:text-slate-400 hover:text-[#97B067] transition-colors duration-300" href="#">About</a></li>
</ul>
<button className="bg-primary-container text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-full hover:bg-primary transition-colors active:scale-95 duration-300 shadow-sm flex items-center gap-2">
                Get Started
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</nav>
<main className="flex-grow pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-24">

<section className="relative rounded-[40px] bg-secondary-fixed overflow-hidden min-h-[819px] flex items-center">

<div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-tertiary-fixed rounded-blob opacity-50 z-0"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary-fixed rounded-blob-alt opacity-40 z-0"></div>
<div className="absolute top-[20%] left-[10%] w-24 h-24 bg-[#FFD166] rounded-full mix-blend-multiply opacity-60 z-0 blur-xl"></div>
<div className="absolute bottom-[30%] right-[20%] w-32 h-32 bg-[#EF476F] rounded-full mix-blend-multiply opacity-30 z-0 blur-2xl"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 items-center w-full">
<div className="flex flex-col gap-8 max-w-xl">
<div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
<span className="material-symbols-outlined text-tertiary icon-fill">nutrition</span>
<span className="text-tertiary font-label-sm text-label-sm">Fresh &amp; Fun Nutrition</span>
</div>
<h1 className="text-primary font-h1 text-h1">
                        Bite into a <span className="text-tertiary-container relative inline-block">happier<svg className="absolute w-full h-3 -bottom-1 left-0 text-tertiary-fixed" preserveaspectratio="none" viewbox="0 0 100 20"><path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path></svg></span>, healthier you.
                    </h1>
<p className="text-on-surface-variant font-body-lg text-body-lg">
                        Discover playful, plant-based plans that make feeling good feel like a game. No clinical diets, just vibrant living.
                    </p>
<div className="flex flex-wrap gap-4 mt-4">
<button className="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-full hover:bg-on-surface transition-colors shadow-lg flex items-center gap-2 group">
                            Start Your Journey
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">celebration</span>
</button>
<button className="bg-white/80 backdrop-blur-sm text-primary font-label-sm text-label-sm px-8 py-4 rounded-full hover:bg-white transition-colors border-2 border-primary-fixed flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">play_circle</span>
                            See how it works
                        </button>
</div>
</div>
<div className="relative h-[400px] md:h-[500px] w-full lg:w-[120%] lg:-mr-[20%]">

<div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 rotate-3 scale-105">
<div className="row-span-2 rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
<img alt="Vibrant healthy salad bowl with fresh greens and seeds" className="w-full h-full object-cover" data-alt="Vibrant, colorful healthy salad bowl with fresh greens, seeds, and avocado on a bright clean surface, overhead shot, energetic mood" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAerCmVCYmr4RS2Vlaws1XMnarx89pZ1iLgqt0qyw8U6fL3FfLYed5NHS1A4XNWvc4c1RcOxpIZTv458bkXUl0GR4AbjDapw9PWOC8SXe-yResS_BRIoLVxFz0vcHLpJkAvwT_fVkxQMZ5XwJCG3Tbhpf1b3swGGK28NacDl51iY7dNN59keu1tnRgpJ18gDQAx-MtIG_E-SwdIZd4MXea21EeYK7qw4aiHQ6AlLISE2RGiVWwH6Gpi-YQQl7E30toG_qlvyClfjQ"/>
</div>
<div className="rounded-[24px] bg-tertiary-container flex items-center justify-center p-6 text-on-tertiary relative overflow-hidden">
<div className="absolute top-[-20px] right-[-20px] text-[100px] opacity-20 material-symbols-outlined icon-fill">mood</div>
<div className="text-center z-10">
<h3 className="font-h3 text-h3 mb-2">98%</h3>
<p className="font-body-md text-body-md opacity-90">Feel more energetic</p>
</div>
</div>
<div className="rounded-[24px] overflow-hidden shadow-lg border-4 border-white">
<img alt="Smiling person enjoying a healthy smoothie" className="w-full h-full object-cover" data-alt="Close up of a smiling woman outdoors in a sunny park holding a bright green smoothie jar, happy and vibrant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu6IWcAaEPvmKgIpa05MgH9OyMWjGXvXa5Z_p5_zBk4reRGh3vUnScJZ2qRSfxNS7YCzqAqnDJDSc2-trulyrNLcyNGQSQ7y0lFeiVO0cbizF2sWYCJZGLkOCwnAbUN5U3M8oKzEdLIJ13jChJwT2hNZ1Afo_iN_agX7xzvDXfqoV6-ReqC9OvUt9-FqfXz9Sp5nwCVVo_iyHcwGbxvf_TxgHNYAjN1n8LdTWBCAn_vzSIwhnSQ-mtAg-w0Y7Fa7yncTQxGymXeQ"/>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-12">
<div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
<h2 className="text-primary font-h2 text-h2">Wellness, unboxed.</h2>
<p className="text-on-surface-variant font-body-lg text-body-lg">We threw out the rulebook. Say hello to a vibrant approach to your daily routine.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface-container-low rounded-[32px] p-8 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed rounded-bl-full z-0 opacity-50 group-hover:scale-110 transition-transform"></div>
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm z-10 relative">
<span className="material-symbols-outlined text-3xl text-primary icon-fill">local_florist</span>
</div>
<div className="z-10 relative">
<h3 className="text-primary font-h3 text-h3 mb-3">Plant-Powered</h3>
<p className="text-on-surface-variant font-body-md text-body-md">Discover recipes that focus on whole, unrefined plants. Less prep, more pep in your step.</p>
</div>
</div>

<div className="bg-surface-container-low rounded-[32px] p-8 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed rounded-bl-full z-0 opacity-50 group-hover:scale-110 transition-transform"></div>
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm z-10 relative">
<span className="material-symbols-outlined text-3xl text-tertiary icon-fill">smart_toy</span>
</div>
<div className="z-10 relative">
<h3 className="text-primary font-h3 text-h3 mb-3">Smart Tracking</h3>
<p className="text-on-surface-variant font-body-md text-body-md">Watch your 'Progress Leaves' grow as you hit your daily water and veg goals.</p>
</div>
</div>

<div className="bg-surface-container-low rounded-[32px] p-8 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed rounded-bl-full z-0 opacity-50 group-hover:scale-110 transition-transform"></div>
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm z-10 relative">
<span className="material-symbols-outlined text-3xl text-secondary icon-fill">volunteer_activism</span>
</div>
<div className="z-10 relative">
<h3 className="text-primary font-h3 text-h3 mb-3">Community Love</h3>
<p className="text-on-surface-variant font-body-md text-body-md">Share wins, swap recipes, and send high-fives in our sunny community hub.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#2F5249]/5 dark:bg-slate-950 w-full rounded-t-[40px] mt-20 transition-all duration-200">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1280px] mx-auto px-8 py-12">
<div className="flex flex-col items-center md:items-start gap-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#2F5249] text-2xl icon-fill">eco</span>
<span className="text-lg font-bold text-[#2F5249] font-['Plus_Jakarta_Sans']">sugi.dev</span>
</div>
<p className="text-slate-500 dark:text-slate-400 font-['Plus_Jakarta_Sans'] text-sm">© 2024 sugi.dev. Cultivating wellness naturally.</p>
</div>
<ul className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 font-['Plus_Jakarta_Sans'] text-sm">
<li><a className="text-slate-500 dark:text-slate-400 hover:text-[#97B067] underline decoration-2 underline-offset-4 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-slate-500 dark:text-slate-400 hover:text-[#97B067] underline decoration-2 underline-offset-4 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-slate-500 dark:text-slate-400 hover:text-[#97B067] underline decoration-2 underline-offset-4 transition-colors" href="#">Contact Us</a></li>
<li><a className="text-slate-500 dark:text-slate-400 hover:text-[#97B067] underline decoration-2 underline-offset-4 transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
</footer>

    </div>
  );
}
