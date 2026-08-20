import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToastAlertDesignSystemShowcase from './pages/ToastAlertDesignSystemShowcase';
import TableDesignSystemShowcase from './pages/TableDesignSystemShowcase';
import TabDesignSystemShowcase from './pages/TabDesignSystemShowcase';
import ShowcasePlayfulBento from './pages/ShowcasePlayfulBento';
import LoaderSkeletonDesignSystemShowcase from './pages/LoaderSkeletonDesignSystemShowcase';
import InputDesignSystemShowcase from './pages/InputDesignSystemShowcase';
import FeatureHighlightsKidsLearningPlatform from './pages/FeatureHighlightsKidsLearningPlatform';
import CardDesignSystemShowcase from './pages/CardDesignSystemShowcase';
import ButtonDesignSystemShowcase from './pages/ButtonDesignSystemShowcase';
import BadgeDesignSystemShowcase from './pages/BadgeDesignSystemShowcase';
import Screen404ErrorMysteryPuzzle from './pages/Screen404ErrorMysteryPuzzle';
import Screen404ErrorJungleTrail from './pages/Screen404ErrorJungleTrail';
import Screen404ErrorCosmicDetour from './pages/Screen404ErrorCosmicDetour';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ToastAlertDesignSystemShowcase />} />
<Route path='/toast-alert-design-system-showcase' element={<ToastAlertDesignSystemShowcase />} />
<Route path='/table-design-system-showcase' element={<TableDesignSystemShowcase />} />
<Route path='/tab-design-system-showcase' element={<TabDesignSystemShowcase />} />
<Route path='/showcase-playful-bento' element={<ShowcasePlayfulBento />} />
<Route path='/loader-skeleton-design-system-showcase' element={<LoaderSkeletonDesignSystemShowcase />} />
<Route path='/input-design-system-showcase' element={<InputDesignSystemShowcase />} />
<Route path='/feature-highlights-kids-learning-platform' element={<FeatureHighlightsKidsLearningPlatform />} />
<Route path='/card-design-system-showcase' element={<CardDesignSystemShowcase />} />
<Route path='/button-design-system-showcase' element={<ButtonDesignSystemShowcase />} />
<Route path='/badge-design-system-showcase' element={<BadgeDesignSystemShowcase />} />
<Route path='/404-error-mystery-puzzle' element={<Screen404ErrorMysteryPuzzle />} />
<Route path='/404-error-jungle-trail' element={<Screen404ErrorJungleTrail />} />
<Route path='/404-error-cosmic-detour' element={<Screen404ErrorCosmicDetour />} />
        <Route path="*" element={<ToastAlertDesignSystemShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}
