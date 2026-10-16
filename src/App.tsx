import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { ChocolateHeroArt } from './components/ChocolateHeroArt';
import { KitchenTimer } from './components/KitchenTimer';
import { IngredientsList } from './components/IngredientsList';
import { StepsWalkthrough } from './components/StepsWalkthrough';
import { NutritionTable } from './components/NutritionTable';
import { ChefTipsSection } from './components/ChefTipsSection';
import { EnesProfileCard } from './components/EnesProfileCard';
import { ReviewsSection } from './components/ReviewsSection';
import { HtmlCodeViewerModal } from './components/HtmlCodeViewerModal';
import { RECIPE_META, INGREDIENTS, STEPS, NUTRITION_FACTS } from './data/recipeData';
import {
  Clock,
  Users,
  Flame,
  ChefHat,
  Code2,
  Share2,
  Check,
  FileCode,
  Bookmark
} from 'lucide-react';

export default function App() {
  const [servings, setServings] = useState<number>(8);
  const [showHtmlTags, setShowHtmlTags] = useState<boolean>(false);
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C221E]">
      {/* Top Bar Navigation (Universal Frontend Design Top Bar Contract) */}
      <TopBar onOpenHtmlModal={() => setIsHtmlModalOpen(true)} />

      {/* Mode Toolbar: Switch between normal recipe and HTML homework inspector */}
      <div className="no-print bg-[#F3ECE2] border-b border-[#E5DACD] px-4 py-2.5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-800">Görünüm Modu:</span>
            <div className="inline-flex rounded-lg bg-white p-0.5 border border-stone-300 shadow-2xs">
              <button
                type="button"
                onClick={() => setShowHtmlTags(false)}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  !showHtmlTags
                    ? 'bg-[#3A1E14] text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Kullanıcı Görünümü
              </button>
              <button
                type="button"
                onClick={() => setShowHtmlTags(true)}
                className={`flex items-center gap-1.5 px-3 py-1 font-medium rounded-md transition-colors ${
                  showHtmlTags
                    ? 'bg-[#8E4423] text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                HTML Etiket Rehberi (Ödev)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyLink}
              className="text-stone-600 hover:text-stone-900 flex items-center gap-1 transition-colors"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Bağlantı Kopyalandı' : 'Tarifi Paylaş'}</span>
            </button>

            <span aria-hidden="true" className="text-stone-300">·</span>

            <button
              type="button"
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="text-stone-600 hover:text-stone-900 flex items-center gap-1 transition-colors"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-600 text-amber-600' : ''}`} />
              <span>{isBookmarked ? 'Kaydedildi' : 'Tarifi Kaydet'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-10">
        
        {/* ========================================================= */}
        {/* HERO SECTION / RECIPE HEADER */}
        {/* ========================================================= */}
        <article id="tarif" className="mb-10">
          {showHtmlTags && (
            <div className="mb-3 flex items-center gap-2 text-xs font-mono text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg">
              <code>&lt;header&gt; &lt;!-- Tarif başlığı ve üst tanıtım künyesi --&gt;</code>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7">
              {/* Category / Author Unboxed Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-3">
                <span className="font-semibold text-[#8E4423]">Tatlı & Çikolata</span>
                <span aria-hidden="true">·</span>
                <span>Hazırlayan: <strong>{RECIPE_META.author.name}</strong></span>
                <span aria-hidden="true">·</span>
                <span>{RECIPE_META.author.assignment}</span>
              </div>

              {/* Primary Recipe Heading */}
              <div className="flex items-center gap-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-950 font-serif-recipe leading-tight">
                  {RECIPE_META.title}
                </h1>
                {showHtmlTags && (
                  <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    &lt;h1&gt;
                  </span>
                )}
              </div>

              {/* Subtitle / Description */}
              <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-serif-recipe italic">
                {RECIPE_META.subtitle}
              </p>
              {showHtmlTags && (
                <code className="text-[11px] font-mono text-stone-500 block mt-1">
                  &lt;p&gt;&lt;em&gt;Tarif tanıtım paragrafı&lt;/em&gt;&lt;/p&gt;
                </code>
              )}

              {/* Recipe Quick Metadata Stats Bar */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-stone-100 text-stone-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-stone-500">Hazırlama</span>
                    <strong className="text-xs sm:text-sm font-semibold tabular-nums text-stone-900">
                      {RECIPE_META.prepTimeMinutes} Dk
                    </strong>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-50 text-[#8E4423]">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-stone-500">Pişirme</span>
                    <strong className="text-xs sm:text-sm font-semibold tabular-nums text-stone-900">
                      {RECIPE_META.cookTimeMinutes} Dk
                    </strong>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-stone-100 text-stone-700">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-stone-500">Porsiyon</span>
                    <strong className="text-xs sm:text-sm font-semibold tabular-nums text-stone-900">
                      {servings} Kişilik
                    </strong>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-stone-100 text-stone-700">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-stone-500">Zorluk</span>
                    <strong className="text-xs sm:text-sm font-semibold text-stone-900">
                      {RECIPE_META.difficulty}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Servings Adjuster Bar */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white rounded-xl border border-stone-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-stone-800">
                    Porsiyon Miktarı Seçin:
                  </span>
                  <div className="flex items-center gap-1">
                    {[4, 8, 12, 16].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setServings(count)}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                          servings === count
                            ? 'bg-[#3A1E14] text-white shadow-2xs'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {count} Kişilik
                      </button>
                    ))}
                  </div>
                </div>

                <span className="text-xs text-stone-500">
                  Malzemeler otomatik hesaplanır
                </span>
              </div>
            </div>

            {/* Right Visual Column: Mouth-watering Chocolate Cube Artwork */}
            <div className="lg:col-span-5">
              <ChocolateHeroArt />
            </div>
          </div>

          {showHtmlTags && (
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg">
              <code>&lt;/header&gt; &lt;!-- Üst Bölüm Sonu --&gt;</code>
            </div>
          )}
        </article>

        {/* ========================================================= */}
        {/* TWO COLUMN WORKSPACE: INGREDIENTS & INSTRUCTIONS */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Ingredients & Nutrition & Author */}
          <div className="lg:col-span-5 space-y-8">
            <IngredientsList
              ingredients={INGREDIENTS}
              currentServings={servings}
              baseServings={RECIPE_META.baseServings}
              showHtmlTags={showHtmlTags}
            />

            <NutritionTable
              facts={NUTRITION_FACTS}
              showHtmlTags={showHtmlTags}
            />

            <EnesProfileCard showHtmlTags={showHtmlTags} />
          </div>

          {/* Right Column: Kitchen Timer & Steps & Tips */}
          <div className="lg:col-span-7 space-y-8">
            {/* Built-in Interactive Kitchen Timer */}
            <KitchenTimer
              initialMinutes={25}
              label="Fırın ve Dinlendirme Pişirme Sayacı"
            />

            {/* Step-by-Step Instructions */}
            <StepsWalkthrough
              steps={STEPS}
              showHtmlTags={showHtmlTags}
            />

            {/* Chef's Tips & Tricks */}
            <ChefTipsSection showHtmlTags={showHtmlTags} />
          </div>
        </div>

        {/* ========================================================= */}
        {/* REVIEWS & COMMUNITY FEEDBACK */}
        {/* ========================================================= */}
        <div className="mb-12">
          <ReviewsSection showHtmlTags={showHtmlTags} />
        </div>

        {/* ========================================================= */}
        {/* EDUCATIONAL HOMEWORK HELPER BANNER */}
        {/* ========================================================= */}
        <div className="no-print rounded-2xl bg-gradient-to-r from-[#2C1810] to-[#1A0E0A] p-6 text-white shadow-md mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/10 text-[#E8C4A2]">
                <FileCode className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">
                  Ödevinizi Teslim Etmeye Hazır mısınız?
                </h3>
                <p className="text-xs text-stone-300 mt-0.5">
                  Bu web sitesinde kullanılan tüm semantik HTML kodunu tek tıkla kopyalayabilir veya .html dosyası olarak indirebilirsiniz.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setIsHtmlModalOpen(true)}
                className="px-4 py-2 bg-[#E08D45] hover:bg-[#D07C35] text-stone-950 font-semibold text-xs rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                HTML Kodunu Görüntüle
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* ========================================================= */}
      {/* SEMANTIC FOOTER */}
      {/* ========================================================= */}
      <footer className="border-t border-stone-200 bg-white py-8 px-4 sm:px-6 text-stone-600 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif-recipe font-bold text-stone-900 text-sm">
              Çikolatalı Küp Tarifi
            </span>
            <span aria-hidden="true">·</span>
            <span>Hazırlayan: <strong>Enes Öztürk</strong></span>
          </div>

          <div className="text-center sm:text-right text-stone-500">
            <p>&copy; 2026 Enes Öztürk · Web Geliştirme Ödevi Projesi</p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Standart W3C HTML5 etiketleri (header, main, section, ul, ol, table, footer) kullanılarak kodlanmıştır.
            </p>
          </div>
        </div>
      </footer>

      {/* HTML Code Viewer & Downloader Modal */}
      <HtmlCodeViewerModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
      />
    </div>
  );
}
