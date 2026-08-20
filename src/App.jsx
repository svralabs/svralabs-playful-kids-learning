import { StoreProvider } from './context/StoreContext';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DuolingoLearningTable from './pages/DuolingoLearningTable';
import DuolingoLearningDashboard from './pages/DuolingoLearningDashboard';
import DuolingoLandingCommunitySocialLearningV3 from './pages/DuolingoLandingCommunitySocialLearningV3';
import LandingPagePlayfulPatternConcept from './pages/LandingPagePlayfulPatternConcept';
import LandingPagePlayfulGraphics from './pages/LandingPagePlayfulGraphics';
import OrderHistoryStatus from './pages/OrderHistoryStatus';
import ShoppingCart from './pages/ShoppingCart';
import AiProfitCalculatorBudgetingPanel2 from './pages/AiProfitCalculatorBudgetingPanel2';
import JastipLandingPage from './pages/JastipLandingPage';
import PaymentCancellationGateway from './pages/PaymentCancellationGateway';
import ProductCatalog from './pages/ProductCatalog';
import ShopperListWorkspace from './pages/ShopperListWorkspace';
import AiProfitCalculatorBudgetingPanel1 from './pages/AiProfitCalculatorBudgetingPanel1';
import AdminInvoiceFeesManager from './pages/AdminInvoiceFeesManager';
import AdminMasterDashboard from './pages/AdminMasterDashboard';
import CustomerCheckoutForm from './pages/CustomerCheckoutForm';
import AdminPaymentCancellationDashboard from './pages/AdminPaymentCancellationDashboard';
import WellnessDashboard from './pages/WellnessDashboard';
import AdminEventCatalogManagement from './pages/AdminEventCatalogManagement';
import FeatureHighlightsKidsLearningPlatform from './pages/FeatureHighlightsKidsLearningPlatform';
import ToastAlertDesignSystemShowcase from './pages/ToastAlertDesignSystemShowcase';
import BadgeDesignSystemShowcase from './pages/BadgeDesignSystemShowcase';
import Page404ErrorCosmicDetour from './pages/Page404ErrorCosmicDetour';
import Page404ErrorMysteryPuzzle from './pages/Page404ErrorMysteryPuzzle';
import TableDesignSystemShowcase from './pages/TableDesignSystemShowcase';
import InputDesignSystemShowcase from './pages/InputDesignSystemShowcase';
import CardDesignSystemShowcase from './pages/CardDesignSystemShowcase';
import TabDesignSystemShowcase from './pages/TabDesignSystemShowcase';
import LoaderSkeletonDesignSystemShowcase from './pages/LoaderSkeletonDesignSystemShowcase';
import ButtonDesignSystemShowcase from './pages/ButtonDesignSystemShowcase';
import ShowcasePlayfulBento from './pages/ShowcasePlayfulBento';
import Page404ErrorJungleTrail from './pages/Page404ErrorJungleTrail';

export default function App() {
  return (
    <BrowserRouter>
    <StoreProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">playful-kids-learning</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Learning Table</Link>
            <Link to="/duolingo-learning-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Learning Dashboard</Link>
            <Link to="/duolingo-landing-community-social-learning-v3" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Landing Community Social Learning V3</Link>
            <Link to="/landing-page-playful-pattern-concept" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Landing Page Playful Pattern Concept</Link>
            <Link to="/landing-page-playful-graphics" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Landing Page Playful Graphics</Link>
            <Link to="/order-history-status" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Order History Status</Link>
            <Link to="/shopping-cart" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Shopping Cart</Link>
            <Link to="/ai-profit-calculator-budgeting-panel-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Ai Profit Calculator Budgeting Panel 2</Link>
            <Link to="/jastip-landing-page" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Landing Page</Link>
            <Link to="/payment-cancellation-gateway" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Payment Cancellation Gateway</Link>
            <Link to="/product-catalog" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Product Catalog</Link>
            <Link to="/shopper-list-workspace" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Shopper List Workspace</Link>
            <Link to="/ai-profit-calculator-budgeting-panel-1" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Ai Profit Calculator Budgeting Panel 1</Link>
            <Link to="/admin-invoice-fees-manager" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Invoice Fees Manager</Link>
            <Link to="/admin-master-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Master Dashboard</Link>
            <Link to="/customer-checkout-form" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Customer Checkout Form</Link>
            <Link to="/admin-payment-cancellation-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Payment Cancellation Dashboard</Link>
            <Link to="/wellness-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Wellness Dashboard</Link>
            <Link to="/admin-event-catalog-management" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Event Catalog Management</Link>
            <Link to="/feature-highlights-kids-learning-platform" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Feature Highlights Kids Learning Platform</Link>
            <Link to="/toast-alert-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Toast Alert Design System Showcase</Link>
            <Link to="/badge-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Badge Design System Showcase</Link>
            <Link to="/404-error-cosmic-detour" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">404 Error Cosmic Detour</Link>
            <Link to="/404-error-mystery-puzzle" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">404 Error Mystery Puzzle</Link>
            <Link to="/table-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Table Design System Showcase</Link>
            <Link to="/input-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Input Design System Showcase</Link>
            <Link to="/card-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Card Design System Showcase</Link>
            <Link to="/tab-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Tab Design System Showcase</Link>
            <Link to="/loader-skeleton-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Loader Skeleton Design System Showcase</Link>
            <Link to="/button-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Button Design System Showcase</Link>
            <Link to="/showcase-playful-bento" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Showcase Playful Bento</Link>
            <Link to="/404-error-jungle-trail" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">404 Error Jungle Trail</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<DuolingoLearningTable />} />
          <Route path="/duolingo-learning-dashboard" element={<DuolingoLearningDashboard />} />
          <Route path="/duolingo-landing-community-social-learning-v3" element={<DuolingoLandingCommunitySocialLearningV3 />} />
          <Route path="/landing-page-playful-pattern-concept" element={<LandingPagePlayfulPatternConcept />} />
          <Route path="/landing-page-playful-graphics" element={<LandingPagePlayfulGraphics />} />
          <Route path="/order-history-status" element={<OrderHistoryStatus />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/ai-profit-calculator-budgeting-panel-2" element={<AiProfitCalculatorBudgetingPanel2 />} />
          <Route path="/jastip-landing-page" element={<JastipLandingPage />} />
          <Route path="/payment-cancellation-gateway" element={<PaymentCancellationGateway />} />
          <Route path="/product-catalog" element={<ProductCatalog />} />
          <Route path="/shopper-list-workspace" element={<ShopperListWorkspace />} />
          <Route path="/ai-profit-calculator-budgeting-panel-1" element={<AiProfitCalculatorBudgetingPanel1 />} />
          <Route path="/admin-invoice-fees-manager" element={<AdminInvoiceFeesManager />} />
          <Route path="/admin-master-dashboard" element={<AdminMasterDashboard />} />
          <Route path="/customer-checkout-form" element={<CustomerCheckoutForm />} />
          <Route path="/admin-payment-cancellation-dashboard" element={<AdminPaymentCancellationDashboard />} />
          <Route path="/wellness-dashboard" element={<WellnessDashboard />} />
          <Route path="/admin-event-catalog-management" element={<AdminEventCatalogManagement />} />
          <Route path="/feature-highlights-kids-learning-platform" element={<FeatureHighlightsKidsLearningPlatform />} />
          <Route path="/toast-alert-design-system-showcase" element={<ToastAlertDesignSystemShowcase />} />
          <Route path="/badge-design-system-showcase" element={<BadgeDesignSystemShowcase />} />
          <Route path="/404-error-cosmic-detour" element={<Page404ErrorCosmicDetour />} />
          <Route path="/404-error-mystery-puzzle" element={<Page404ErrorMysteryPuzzle />} />
          <Route path="/table-design-system-showcase" element={<TableDesignSystemShowcase />} />
          <Route path="/input-design-system-showcase" element={<InputDesignSystemShowcase />} />
          <Route path="/card-design-system-showcase" element={<CardDesignSystemShowcase />} />
          <Route path="/tab-design-system-showcase" element={<TabDesignSystemShowcase />} />
          <Route path="/loader-skeleton-design-system-showcase" element={<LoaderSkeletonDesignSystemShowcase />} />
          <Route path="/button-design-system-showcase" element={<ButtonDesignSystemShowcase />} />
          <Route path="/showcase-playful-bento" element={<ShowcasePlayfulBento />} />
          <Route path="/404-error-jungle-trail" element={<Page404ErrorJungleTrail />} />
          <Route path="*" element={<DuolingoLearningTable />} />
          </Routes>
        </main>
      </div>
        </StoreProvider>
</BrowserRouter>
  );
}
