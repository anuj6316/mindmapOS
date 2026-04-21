import React, { useState } from 'react';
import { marketplaceProducts, Category, Product } from '../data/marketplaceData';
import MarketplaceHero from '../components/marketplace/MarketplaceHero';
import CategoryNav from '../components/marketplace/CategoryNav';
import FeaturedBanners from '../components/marketplace/FeaturedBanners';
import TrendingScroll from '../components/marketplace/TrendingScroll';
import ProductSection from '../components/marketplace/ProductSection';
import TrustSection from '../components/marketplace/TrustSection';
import CreatorSection from '../components/marketplace/CreatorSection';
import ProductDetailModal from '../components/marketplace/ProductDetailModal';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const getProductsByCategory = (cat: Category) => {
    return marketplaceProducts.filter(p => p.category === cat);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddProduct = (product: Product) => {
    // For now, we'll just open the details modal as well, 
    // or we could show a toast notification here.
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-x-hidden font-sans">
      
      {/* Abstract Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[60vw] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0" />
      <div className="fixed bottom-[-10%] left-[20%] w-[60vw] h-[50vw] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0" />

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>

      <MarketplaceHero />
      
      <CategoryNav 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />

      <div className="relative z-10">
        {(activeCategory === 'All') && (
          <>
            <FeaturedBanners />
            <TrendingScroll />
          </>
        )}

        {(activeCategory === 'All' || activeCategory === 'Models') && (
          <ProductSection 
            id="models"
            title="The brain behind your agent."
            description="Local AI models built and optimised for MindMapOS. Faster, smaller, and more accurate on device tasks than general-purpose models of the same size. Download once. Runs entirely on your hardware."
            infoTitle="WHAT IS A MODEL?"
            infoContent={`A model is the AI that powers MindMapOS's understanding. When you type a request, the model figures out what you mean and how to execute it.\n\nMindMapOS works with any Ollama-compatible model, but Marketplace models are fine-tuned specifically for device management, system tasks, and the Guardian Layer — which means better accuracy, fewer misunderstandings, and faster responses on the same hardware.\n\nAll models run locally on your device by default. Nothing is sent to a server.`}
            products={getProductsByCategory('Models')}
            onViewDetails={handleViewDetails}
            onAdd={handleAddProduct}
          />
        )}

        {(activeCategory === 'All' || activeCategory === 'Agents') && (
          <ProductSection 
            id="agents"
            title="Purpose-built for what you actually do."
            description="Agents are specialists. Where MindMapOS's default agent handles everything, Marketplace agents are trained deeply on one domain — and are significantly better at it as a result. Install multiple. MindMapOS routes tasks to the right agent automatically."
            infoTitle="WHAT IS AN AGENT?"
            infoContent={`The default MindMapOS agent is a generalist — it handles everything from file management to developer setup to connected accounts.\n\nA Marketplace Agent is a specialist. It's been trained specifically on one domain — development, security, media, productivity — and handles tasks in that domain with much higher accuracy, more intelligent planning, and domain-specific knowledge that a generalist can't match.\n\nWhen you install a specialist agent, MindMapOS automatically routes relevant tasks to it. You don't need to specify which agent to use. Just describe what you want — MindMapOS picks the right tool.\n\nAll agents operate within the Guardian Layer. No agent can bypass your safety settings.`}
            products={getProductsByCategory('Agents')}
            onViewDetails={handleViewDetails}
            onAdd={handleAddProduct}
          />
        )}

        {(activeCategory === 'All' || activeCategory === 'Orchestrations') && (
          <ProductSection 
            id="orchestrations"
            title="Workflows that run themselves."
            description="Orchestrations are pre-built multi-step workflows — complex sequences of tasks that MindMapOS executes automatically on a schedule or on demand. Install one, configure it once, and it handles everything from that point forward."
            infoTitle="WHAT IS AN ORCHESTRATION?"
            infoContent={`An Orchestration is a saved workflow — a sequence of tasks that MindMapOS executes together, in the right order, automatically.\n\nThink of it as a hired routine. You install it, set it up once, and it runs itself.\n\nExamples:\n"Every Sunday night" → backs up your files, clears your cache, checks for updates, and sends you a summary of what it did.\n\n"Every morning at 7am" → pulls your agenda, checks the weather, identifies urgent emails, and has a briefing ready when you open MindMapOS.\n\nEvery step in every orchestration still respects the Guardian Layer. Anything destructive still requires your confirmation. Orchestrations are not a way to bypass safety — they're a way to automate the safe parts of your routine.`}
            products={getProductsByCategory('Orchestrations')}
            onViewDetails={handleViewDetails}
            onAdd={handleAddProduct}
          />
        )}

        {(activeCategory === 'All' || activeCategory === 'Bundles') && (
          <ProductSection 
            id="bundles"
            title="Everything you need. One install."
            description="Bundles are curated collections of models, agents, and orchestrations that work better together. Designed for specific use cases and user types. Install the bundle — MindMapOS handles the rest."
            infoTitle="HOW BUNDLES WORK"
            infoContent={`Bundles install multiple complementary products with a single click. They ensure that you have the right model paired with the right agents and workflows for a specific purpose.\n\nWhen you install a bundle, you get all included products automatically configured to work seamlessly together.`}
            products={getProductsByCategory('Bundles')}
            onViewDetails={handleViewDetails}
            onAdd={handleAddProduct}
          />
        )}

        <TrustSection />
        <CreatorSection />
        
        {/* Simple Footer */}
        <footer className="bg-slate-50 py-12 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 text-[13px] text-slate-500 font-medium">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-teal-500" /> Guardian Layer compatible</span>
              <span className="hidden md:flex items-center gap-2">⭐ Community rated and reviewed</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-[13px] font-medium text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">Browse All Models</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Browse All Agents</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Submit a Request</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Marketplace Policies</a>
            </div>
          </div>
        </footer>

      </div>

      <ProductDetailModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}
