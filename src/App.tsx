import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/about";
import Navigation from "./components/Layout/navigation";
import Footer from "./components/Layout/footer";
import ContactPage from "./pages/contact";
import Portfolio from "./pages/portfolio";

const App = () => (
  <>
    <Navigation />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

    <Footer />
  </>
);

export default App;
