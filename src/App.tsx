import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import NewConstruction from './pages/services/NewConstruction';
import Remodeling from './pages/services/Remodeling';
import Commercial from './pages/services/Commercial';
import Additions from './pages/services/Additions';
import Locations from './pages/Locations';
import Scottsdale from './pages/locations/Scottsdale';
import ParadiseValley from './pages/locations/ParadiseValley';
import FountainHills from './pages/locations/FountainHills';
import Carefree from './pages/locations/Carefree';
import CaveCreek from './pages/locations/CaveCreek';
import Phoenix from './pages/locations/Phoenix';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/portfolio/ProjectDetail';
import Process from './pages/Process';
import Blog from './pages/Blog';
import BlogPost from './pages/blog/BlogPost';
import About from './pages/About';
import Partners from './pages/Partners';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Sitemap from './pages/Sitemap';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import ThankYou from './pages/ThankYou';
import CostGuideOptIn from './pages/resources/CostGuideOptIn';
import CostGuide from './pages/resources/CostGuide';
import Resources from './pages/Resources';

// Placeholder components for other routes to prevent errors
const Placeholder = ({ title }: { title: string }) => (
  <div className="container mx-auto px-6 py-24 text-center">
    <h1 className="text-4xl font-serif font-bold text-primary mb-4">{title}</h1>
    <p className="text-slate-600">This page is under construction.</p>
  </div>
);
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/new-construction" element={<NewConstruction />} />
            <Route path="services/remodeling" element={<Remodeling />} />
            <Route path="services/commercial" element={<Commercial />} />
            <Route path="services/additions" element={<Additions />} />
            <Route path="locations" element={<Locations />} />
            <Route path="locations/scottsdale" element={<Scottsdale />} />
            <Route path="locations/paradise-valley" element={<ParadiseValley />} />
            <Route path="locations/fountain-hills" element={<FountainHills />} />
            <Route path="locations/carefree" element={<Carefree />} />
            <Route path="locations/cave-creek" element={<CaveCreek />} />
            <Route path="locations/phoenix" element={<Phoenix />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:slug" element={<ProjectDetail />} />
            <Route path="process" element={<Process />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="contact" element={<Contact />} />
            <Route path="booking" element={<Booking />} />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="resources/cost-guide-optin" element={<CostGuideOptIn />} />
            <Route path="resources/cost-guide" element={<CostGuide />} />
            <Route path="resources" element={<Resources />} />
            <Route path="about" element={<About />} />
            <Route path="partners" element={<Partners />} />
            <Route path="careers" element={<Careers />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="*" element={<Placeholder title="Page Not Found" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
