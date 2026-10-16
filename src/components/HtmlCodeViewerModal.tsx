import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, FileCode } from 'lucide-react';
import { RAW_SEMANTIC_HTML_CODE } from '../data/recipeData';

interface HtmlCodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HtmlCodeViewerModal: React.FC<HtmlCodeViewerModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_SEMANTIC_HTML_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([RAW_SEMANTIC_HTML_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cikolatali-kup-tarifi-enes-ozturk.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="html-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-stone-900 rounded-2xl border border-stone-700 shadow-2xl overflow-hidden text-stone-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#8E4423]/30 text-[#E8C4A2] rounded-lg">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 id="html-modal-title" className="text-base font-bold text-white tracking-tight">
                HTML Ödev Kodu: Çikolatalı Küp Tarifi
              </h3>
              <p className="text-xs text-stone-400">
                Hazırlayan: Enes Öztürk · %100 Standartlara Uygun Semantik HTML5
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                copied ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Kopyalandı!' : 'Kodu Kopyala'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#8E4423] hover:bg-[#A34E28] text-white rounded-lg text-xs font-semibold transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>.html İndir</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Kapat"
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Sub-banner explaining semantic tags */}
        <div className="px-6 py-3 bg-stone-950/40 border-b border-stone-800 text-xs text-stone-300 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-semibold text-[#E8C4A2]">Kullanılan Etiketler:</span>
          <span><code>&lt;header&gt;</code> & <code>&lt;h1&gt;</code></span>
          <span><code>&lt;ul&gt;</code> & <code>&lt;li&gt;</code> (Malzemeler)</span>
          <span><code>&lt;ol&gt;</code> & <code>&lt;li&gt;</code> (Adımlar)</span>
          <span><code>&lt;strong&gt;</code> & <code>&lt;em&gt;</code> (Vurgu)</span>
          <span><code>&lt;table&gt;</code> (Besinler)</span>
          <span><code>&lt;footer&gt;</code> (Künye)</span>
        </div>

        {/* Code Block Container */}
        <div className="flex-1 overflow-auto p-6 bg-[#121212] font-mono text-xs leading-relaxed text-stone-300 selection:bg-[#8E4423]/50">
          <pre className="whitespace-pre">
            <code>{RAW_SEMANTIC_HTML_CODE}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <span>Ödev teslimi için bu HTML kodunu doğrudan kopyalayabilir veya indirebilirsiniz.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
