import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { CHEF_TIPS } from '../data/recipeData';

interface ChefTipsProps {
  showHtmlTags?: boolean;
}

export const ChefTipsSection: React.FC<ChefTipsProps> = ({ showHtmlTags = false }) => {
  return (
    <section id="puf-noktalari" className="relative">
      {showHtmlTags && (
        <div className="mb-2 flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
          <code>&lt;section id="puf-noktalari"&gt;</code>
          <span className="text-amber-800">· Önemli ipuçlarını içeren bölüm</span>
        </div>
      )}

      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-[#8E4423]" />
        <h2 className="text-2xl font-bold tracking-tight text-stone-900 font-serif-recipe">
          Enes Öztürk'ten Püf Noktaları
        </h2>
        {showHtmlTags && (
          <span className="text-xs font-mono bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
            &lt;h2&gt;
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CHEF_TIPS.map((tip, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-stone-200 bg-[#FAF7F2] p-5 hover:border-[#8E4423]/30 transition-all"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#8E4423] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-stone-900">
                  {tip.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-stone-700">
                  {tip.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
