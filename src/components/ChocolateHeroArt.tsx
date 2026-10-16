import React from 'react';

export const ChocolateHeroArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2D1A15] via-[#1E110E] to-[#120806] p-6 sm:p-8 shadow-2xl ${className}`}>
      {/* Background ambient culinary glow */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#E08D45]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#8E4423]/25 blur-3xl pointer-events-none" />

      {/* SVG Gourmet Culinary Artwork */}
      <svg
        viewBox="0 0 640 420"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Enes Öztürk Çikolatalı Küp Sunumu"
      >
        <defs>
          {/* Ceramic Plate Shadow & Gradient */}
          <radialGradient id="plateShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.65" />
            <stop offset="80%" stopColor="#000000" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A3430" />
            <stop offset="45%" stopColor="#25211E" />
            <stop offset="100%" stopColor="#171513" />
          </linearGradient>

          <linearGradient id="plateRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#695F57" />
            <stop offset="50%" stopColor="#3E3833" />
            <stop offset="100%" stopColor="#544C44" />
          </linearGradient>

          {/* Chocolate Cube 1 Gradients */}
          <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A261C" />
            <stop offset="60%" stopColor="#321710" />
            <stop offset="100%" stopColor="#230F0A" />
          </linearGradient>

          <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#321710" />
            <stop offset="100%" stopColor="#1B0C08" />
          </linearGradient>

          <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#24100B" />
            <stop offset="100%" stopColor="#110604" />
          </linearGradient>

          {/* Ganache Gloss Gradient */}
          <linearGradient id="ganacheGloss" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B3E2B" />
            <stop offset="40%" stopColor="#3B1910" />
            <stop offset="100%" stopColor="#1A0704" />
          </linearGradient>

          <linearGradient id="glossHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Mint Leaf Gradient */}
          <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#55A95A" />
            <stop offset="60%" stopColor="#2E7D32" />
            <stop offset="100%" stopColor="#1B4D20" />
          </linearGradient>

          {/* Raspberry Accent */}
          <radialGradient id="berryGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FF4F79" />
            <stop offset="50%" stopColor="#C2185B" />
            <stop offset="100%" stopColor="#600025" />
          </radialGradient>
        </defs>

        {/* Shadow under the plate */}
        <ellipse cx="320" cy="355" rx="270" ry="45" fill="url(#plateShadow)" />

        {/* Artisanal Ceramic Serving Plate */}
        <ellipse cx="320" cy="335" rx="250" ry="50" fill="url(#plateRim)" />
        <ellipse cx="320" cy="333" rx="242" ry="46" fill="url(#plateGrad)" />
        <ellipse cx="320" cy="332" rx="210" ry="38" fill="#1C1816" stroke="#483F38" strokeWidth="1.5" />

        {/* Cocoa Powder Dust scatter on plate */}
        <g opacity="0.6">
          <circle cx="160" cy="330" r="1.5" fill="#C98865" />
          <circle cx="172" cy="338" r="2" fill="#87472A" />
          <circle cx="185" cy="326" r="1.2" fill="#AA5B35" />
          <circle cx="210" cy="342" r="1.8" fill="#582C18" />
          <circle cx="230" cy="348" r="1.2" fill="#DCA180" />
          <circle cx="420" cy="340" r="2" fill="#87472A" />
          <circle cx="445" cy="332" r="1.5" fill="#AA5B35" />
          <circle cx="468" cy="345" r="1.8" fill="#582C18" />
          <circle cx="490" cy="334" r="1.2" fill="#C98865" />
          <circle cx="360" cy="352" r="1.6" fill="#87472A" />
          <circle cx="280" cy="350" r="2" fill="#AA5B35" />
        </g>

        {/* ================================================= */}
        {/* LOWER CUBE 1 (LEFT BOTTOM) */}
        {/* ================================================= */}
        <g id="cube-left-bottom">
          {/* Top Face */}
          <polygon points="170,230 260,205 320,232 230,258" fill="url(#cubeTop)" />
          {/* Top subtle texture */}
          <polygon points="175,231 258,207 312,231 230,254" fill="#5A2E22" opacity="0.35" />
          {/* Left Face */}
          <polygon points="170,230 230,258 230,325 170,296" fill="url(#cubeLeft)" />
          {/* Right Face */}
          <polygon points="230,258 320,232 320,300 230,325" fill="url(#cubeRight)" />
          {/* Fudgy brownie inner texture dots on left face */}
          <circle cx="190" cy="270" r="2" fill="#753C2D" opacity="0.6" />
          <circle cx="212" cy="285" r="2.5" fill="#8B4836" opacity="0.5" />
          <circle cx="202" cy="262" r="1.5" fill="#55281C" />
          {/* Crust highlight */}
          <path d="M170,230 L230,258 L320,232" stroke="#874635" strokeWidth="1.2" opacity="0.5" fill="none" />
        </g>

        {/* ================================================= */}
        {/* LOWER CUBE 2 (RIGHT BOTTOM) */}
        {/* ================================================= */}
        <g id="cube-right-bottom">
          {/* Top Face */}
          <polygon points="320,230 405,202 470,228 385,257" fill="url(#cubeTop)" />
          {/* Left Face */}
          <polygon points="320,230 385,257 385,324 320,298" fill="url(#cubeLeft)" />
          {/* Right Face */}
          <polygon points="385,257 470,228 470,295 385,324" fill="url(#cubeRight)" />
          {/* Walnut chunk embedded in brownie face */}
          <ellipse cx="430" cy="265" rx="7" ry="5" fill="#C49A6C" transform="rotate(-15 430 265)" />
          <ellipse cx="430" cy="265" rx="5" ry="3.5" fill="#8E6336" transform="rotate(-15 430 265)" />
          {/* Crust line */}
          <path d="M320,230 L385,257 L470,228" stroke="#874635" strokeWidth="1.2" opacity="0.5" fill="none" />
        </g>

        {/* ================================================= */}
        {/* TOP CUBE (CENTER STACKED - HERO PIECE) */}
        {/* ================================================= */}
        <g id="cube-top-hero">
          {/* Cast shadow onto lower cubes */}
          <polygon points="245,215 380,215 360,255 260,250" fill="#0D0503" opacity="0.75" />

          {/* Top Face (Slight isometric angle) */}
          <polygon points="245,150 345,120 415,150 315,182" fill="url(#cubeTop)" />
          {/* Subtle cacao dust highlight on top */}
          <polygon points="252,151 343,123 408,150 316,177" fill="#6E3729" opacity="0.45" />

          {/* Left Face */}
          <polygon points="245,150 315,182 315,255 245,222" fill="url(#cubeLeft)" />
          {/* Right Face */}
          <polygon points="315,182 415,150 415,222 315,255" fill="url(#cubeRight)" />

          {/* Rich chocolate ganache drip hanging down center-left */}
          <path
            d="M295,178 Q305,190 307,215 Q308,228 312,230 Q316,228 316,212 Q318,185 330,175"
            fill="url(#ganacheGloss)"
          />
          {/* Ganache glossy specular highlight reflection */}
          <path
            d="M306,192 Q308,212 309,222"
            stroke="url(#glossHighlight)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Additional small chocolate drip on right edge */}
          <path
            d="M375,162 Q382,175 383,195 Q384,204 388,204 Q391,202 391,190 Q392,168 400,155"
            fill="url(#ganacheGloss)"
          />
          <path
            d="M383,180 Q384,195 385,200"
            stroke="url(#glossHighlight)"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Top crust edge highlights */}
          <path d="M245,150 L315,182 L415,150" stroke="#9A4E3B" strokeWidth="1.5" opacity="0.6" fill="none" />
          <path d="M245,150 L345,120 L415,150" stroke="#7A3928" strokeWidth="1" opacity="0.4" fill="none" />

          {/* Cocoa Powder sprinkled on top face */}
          <g opacity="0.85">
            <circle cx="280" cy="155" r="1" fill="#E8B091" />
            <circle cx="288" cy="150" r="1.5" fill="#E8B091" />
            <circle cx="310" cy="160" r="1.2" fill="#E8B091" />
            <circle cx="325" cy="148" r="1.8" fill="#C67F5D" />
            <circle cx="340" cy="155" r="1.4" fill="#E8B091" />
            <circle cx="355" cy="142" r="1.6" fill="#C67F5D" />
            <circle cx="370" cy="149" r="1.2" fill="#E8B091" />
          </g>
        </g>

        {/* ================================================= */}
        {/* GARNISH: FRESH RASPBERRY & MINT SPRIG */}
        {/* ================================================= */}
        <g id="garnish-mint-and-berry">
          {/* Raspberry on plate near bottom left cube */}
          <g transform="translate(190, 310) scale(0.9)">
            <circle cx="12" cy="14" r="12" fill="url(#berryGrad)" />
            {/* Raspberry drupelets */}
            <circle cx="7" cy="8" r="4.5" fill="#FF5277" />
            <circle cx="15" cy="7" r="4.5" fill="#E91E63" />
            <circle cx="6" cy="15" r="4.5" fill="#C2185B" />
            <circle cx="14" cy="15" r="4.5" fill="#FF4081" />
            <circle cx="19" cy="12" r="4.2" fill="#D81B60" />
            <circle cx="11" cy="20" r="4.2" fill="#880E4F" />
            <circle cx="17" cy="19" r="3.8" fill="#AD1457" />
          </g>

          {/* Mint Leaves resting gracefully on top cube */}
          {/* Leaf 1 (Left pointing) */}
          <path
            d="M335,128 C305,115 285,128 275,122 C295,142 320,138 335,128 Z"
            fill="url(#mintGrad)"
            stroke="#1B5E20"
            strokeWidth="0.8"
          />
          {/* Leaf vein */}
          <path d="M335,128 Q305,124 275,122" stroke="#81C784" strokeWidth="0.9" fill="none" opacity="0.8" />

          {/* Leaf 2 (Up-Right pointing) */}
          <path
            d="M335,128 C345,100 370,95 385,92 C375,115 355,126 335,128 Z"
            fill="url(#mintGrad)"
            stroke="#1B5E20"
            strokeWidth="0.8"
          />
          {/* Leaf vein */}
          <path d="M335,128 Q360,110 385,92" stroke="#81C784" strokeWidth="0.9" fill="none" opacity="0.8" />
        </g>

        {/* Ambient Steam / Fresh Warm Aroma */}
        <g opacity="0.3" stroke="#F5D0B5" strokeWidth="1.8" strokeLinecap="round" fill="none">
          <path d="M310,95 Q305,75 315,60 Q325,45 318,30" />
          <path d="M345,90 Q355,70 348,52 Q340,36 348,20" />
        </g>
      </svg>

      {/* Floating Recipe Badge Card inside hero visual */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-white/90">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E08D45] ring-4 ring-[#E08D45]/20" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E8C4A2]">
            Enes Öztürk Özel Sunumu
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-stone-300">
          <span>%70 Yoğun Kakao</span>
          <span aria-hidden="true" className="text-stone-500">·</span>
          <span>Nemli Fudge Doku</span>
          <span aria-hidden="true" className="text-stone-500">·</span>
          <span>3x3 cm İdeal Küp</span>
        </div>
      </div>
    </div>
  );
};
