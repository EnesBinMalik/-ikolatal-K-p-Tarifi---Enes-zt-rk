import React, { useState } from 'react';
import { Check, RotateCcw, Info, ShoppingBag } from 'lucide-react';
import { Ingredient } from '../types';

interface IngredientsListProps {
  ingredients: Ingredient[];
  currentServings: number;
  baseServings: number;
  showHtmlTags?: boolean;
}

export const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  currentServings,
  baseServings,
  showHtmlTags = false
}) => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const resetChecked = () => {
    setCheckedIds({});
  };

  const scaleFactor = currentServings / baseServings;
  const completedCount = Object.values(checkedIds).filter(Boolean).length;

  const formatQuantity = (baseQty: number, unit: string) => {
    const scaled = baseQty * scaleFactor;
    // For counts like 3 eggs, if 1.5 format nicely
    if (unit === 'adet') {
      return Number.isInteger(scaled) ? scaled.toString() : scaled.toFixed(1).replace('.', ',');
    }
    if (unit === 'çimdik' || unit === 'paket') {
      return Math.round(scaled) || 1;
    }
    return Math.round(scaled);
  };

  return (
    <section id="malzemeler" className="relative">
      {/* HTML Tag Badge in Inspector Mode */}
      {showHtmlTags && (
        <div className="mb-2 flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
          <code>&lt;section id="malzemeler"&gt;</code>
          <span className="text-amber-800">· Malzeme listesini kapsayan anlamsal bölüm</span>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif-recipe">
              Gerekli Malzemeler
            </h2>
            {showHtmlTags && (
              <span className="text-xs font-mono bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                &lt;h2&gt;
              </span>
            )}
          </div>
          <p className="text-xs text-stone-600 mt-1">
            {currentServings} kişilik porsiyon için ölçeklendirilmiştir · {ingredients.length} malzeme
          </p>
        </div>

        <div className="flex items-center gap-2">
          {completedCount > 0 && (
            <button
              type="button"
              onClick={resetChecked}
              className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1 px-2.5 py-1.5 bg-stone-100 rounded-md transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Sıfırla ({completedCount})
            </button>
          )}

          <div className="text-xs font-medium text-stone-700 bg-[#FAF4ED] border border-[#EADBCC] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5 text-[#8E4423]" />
            <span>Hazır:</span>
            <span className="font-mono tabular-nums font-bold text-[#8E4423]">
              {completedCount} / {ingredients.length}
            </span>
          </div>
        </div>
      </div>

      {showHtmlTags && (
        <div className="text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md mb-2">
          <code>&lt;ul&gt; &lt;!-- Sırasız liste: Malzemelerin kronolojik bir önceliği olmadığı için ul tercih edilir --&gt;</code>
        </div>
      )}

      {/* Semantic Unordered List with Interactive Checkbox */}
      <ul className="divide-y divide-stone-100 rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
        {ingredients.map((item) => {
          const isChecked = !!checkedIds[item.id];
          const qty = formatQuantity(item.baseQuantity, item.unit);

          return (
            <li
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`group flex items-start gap-3.5 p-4 transition-colors cursor-pointer select-none ${
                isChecked ? 'bg-stone-50/70 text-stone-400' : 'hover:bg-[#FAF7F2]'
              }`}
            >
              {/* Checkbox Visual */}
              <button
                type="button"
                aria-label={`${item.name} işaretle`}
                className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all ${
                  isChecked
                    ? 'bg-[#8E4423] border-[#8E4423] text-white shadow-xs'
                    : 'border-stone-300 bg-white group-hover:border-[#8E4423]'
                }`}
              >
                {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </button>

              {/* Item Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <strong
                    className={`text-sm font-semibold tracking-tight transition-colors ${
                      isChecked ? 'line-through text-stone-400 font-normal' : 'text-stone-900'
                    }`}
                  >
                    <span className="tabular-nums font-bold text-[#8E4423] mr-1">
                      {qty} {item.unit}
                    </span>
                    {item.name}
                  </strong>

                  {showHtmlTags && (
                    <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-1 rounded">
                      &lt;li&gt;&lt;strong&gt;
                    </span>
                  )}
                </div>

                {item.note && (
                  <p
                    className={`text-xs mt-0.5 ${
                      isChecked ? 'text-stone-400 line-through' : 'text-stone-600'
                    }`}
                  >
                    <em>{item.note}</em>
                  </p>
                )}

                {showHtmlTags && (
                  <p className="text-[11px] font-mono text-stone-600 mt-1 bg-stone-50 p-1 rounded border border-stone-200">
                    ℹ️ {item.htmlTagExplanation}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {showHtmlTags && (
        <div className="text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md mt-2">
          <code>&lt;/ul&gt; &lt;!-- Liste Kapanışı --&gt;</code>
        </div>
      )}
    </section>
  );
};
