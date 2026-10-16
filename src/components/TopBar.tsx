import React from 'react';
import { FileCode, Printer } from 'lucide-react';

interface TopBarProps {
  onOpenHtmlModal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenHtmlModal }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark, single line */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 font-serif-recipe hover:text-[#8E4423] transition-colors"
        >
          Çikolatalı Küp
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a
            href="#tarif"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Tarif
          </a>
          <a
            href="#malzemeler"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Malzemeler
          </a>
          <a
            href="#hazirlanisi"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Hazırlanışı
          </a>
          <a
            href="#besin-degerleri"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Besin Değerleri
          </a>
          <a
            href="#hazirlayan"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Enes Öztürk
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenHtmlModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#3A1E14] hover:bg-[#25130D] rounded-lg shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>HTML Ödev Kodu</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            title="Yazdır"
            aria-label="Tarifi Yazdır"
            className="hidden sm:flex items-center p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
