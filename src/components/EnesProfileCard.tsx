import React from 'react';
import { Code2, Award, BookOpen, Heart, CheckCircle } from 'lucide-react';
import { RECIPE_META } from '../data/recipeData';

interface EnesProfileCardProps {
  showHtmlTags?: boolean;
}

export const EnesProfileCard: React.FC<EnesProfileCardProps> = ({ showHtmlTags = false }) => {
  return (
    <section id="hazirlayan" className="relative rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
      {showHtmlTags && (
        <div className="mb-3 flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
          <code>&lt;section id="hazirlayan"&gt; &lt;!-- Yazar ve ödev künyesini içeren bölüm --&gt;</code>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Enes Öztürk Avatar Artwork */}
        <div className="relative shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-gradient-to-br from-[#3A1E14] to-[#1E110E] p-1 shadow-md border-2 border-[#E8C4A2]">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full rounded-xl"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Enes Öztürk Avatar"
            >
              {/* Warm background */}
              <rect width="100" height="100" fill="#2E1710" />
              <circle cx="50" cy="50" r="45" fill="#422217" />
              
              {/* Chef Apron / Dark Shirt */}
              <path d="M22,100 L32,68 L68,68 L78,100 Z" fill="#1C0D08" />
              <path d="M36,68 L36,100 M64,68 L64,100" stroke="#8E4423" strokeWidth="1.5" />
              
              {/* Apron Straps & Collar */}
              <path d="M38,68 L50,82 L62,68" stroke="#E8C4A2" strokeWidth="2" fill="none" />
              <rect x="42" y="76" width="16" height="5" rx="1.5" fill="#E8C4A2" />

              {/* Neck */}
              <rect x="43" y="52" width="14" height="18" fill="#E5B292" rx="4" />

              {/* Head & Face */}
              <ellipse cx="50" cy="42" rx="18" ry="21" fill="#F3C3A4" />

              {/* Friendly Smile */}
              <path d="M43,49 Q50,56 57,49" stroke="#7C3B24" strokeWidth="2" strokeLinecap="round" fill="none" />
              <ellipse cx="43" cy="46" rx="2.5" ry="1.5" fill="#FCA5A5" opacity="0.6" />
              <ellipse cx="57" cy="46" rx="2.5" ry="1.5" fill="#FCA5A5" opacity="0.6" />

              {/* Eyes */}
              <ellipse cx="43" cy="39" rx="2.5" ry="3" fill="#2C1810" />
              <ellipse cx="57" cy="39" rx="2.5" ry="3" fill="#2C1810" />
              <circle cx="44" cy="38" r="0.8" fill="#FFFFFF" />
              <circle cx="58" cy="38" r="0.8" fill="#FFFFFF" />

              {/* Eyebrows */}
              <path d="M39,34 Q44,32 47,34" stroke="#2C1810" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M53,34 Q56,32 61,34" stroke="#2C1810" strokeWidth="1.8" strokeLinecap="round" fill="none" />

              {/* Hair */}
              <path
                d="M32,38 C30,22 40,16 50,16 C62,16 70,22 68,38 C64,28 58,24 50,25 C42,24 36,28 32,38 Z"
                fill="#2C1810"
              />

              {/* Small chef toque / code badge icon */}
              <circle cx="76" cy="24" r="10" fill="#E08D45" />
              <path d="M73,21 L71,24 L73,27 M79,21 L81,24 L79,27" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="absolute -bottom-2 -right-2 bg-emerald-700 text-white p-1 rounded-full border-2 border-white shadow-xs">
            <CheckCircle className="w-4 h-4" />
          </div>
        </div>

        {/* Bio Content */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 font-serif-recipe">
              {RECIPE_META.author.name}
            </h2>
            <span className="text-xs text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full font-medium">
              Web Sitesi Yapımcısı
            </span>
          </div>

          <p className="text-xs font-semibold text-[#8E4423] mt-1">
            {RECIPE_META.author.course} · {RECIPE_META.author.assignment}
          </p>

          <p className="text-sm text-stone-700 mt-3 leading-relaxed">
            {RECIPE_META.author.bio}
          </p>

          {/* Badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-3 border-t border-stone-100 text-xs text-stone-600">
            <div className="flex items-center gap-1.5 font-medium">
              <Code2 className="w-4 h-4 text-[#8E4423]" />
              <span>Semantik HTML5</span>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5 font-medium">
              <BookOpen className="w-4 h-4 text-[#8E4423]" />
              <span>Ödev Tamamlandı</span>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5 font-medium">
              <Heart className="w-4 h-4 text-rose-600" />
              <span>Özel Çikolata Tarifi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
