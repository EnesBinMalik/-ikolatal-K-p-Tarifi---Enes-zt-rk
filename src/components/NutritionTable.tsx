import React from 'react';
import { NutritionFact } from '../types';

interface NutritionTableProps {
  facts: NutritionFact[];
  showHtmlTags?: boolean;
}

export const NutritionTable: React.FC<NutritionTableProps> = ({
  facts,
  showHtmlTags = false
}) => {
  return (
    <section id="besin-degerleri" className="relative">
      {showHtmlTags && (
        <div className="mb-2 flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
          <code>&lt;section id="besin-degerleri"&gt;</code>
          <span className="text-amber-800">· Tablo verilerini içeren anlamsal bölüm</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 font-serif-recipe">
              Besin Değerleri Tablosu
            </h2>
            {showHtmlTags && (
              <span className="text-xs font-mono bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                &lt;h2&gt;
              </span>
            )}
          </div>
          <p className="text-xs text-stone-600 mt-1">
            1 Porsiyon (~3 adet çikolatalı küp / 80g) için ortalama değerler
          </p>
        </div>
      </div>

      {showHtmlTags && (
        <div className="text-xs font-mono text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-md mb-2">
          <code>&lt;table border="1"&gt; &lt;!-- Tablo verisi HTML standardında table, thead, tbody, tr, th ve td etiketleriyle yapılandırılır --&gt;</code>
        </div>
      )}

      {/* Semantic Table */}
      <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-xs">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Çikolatalı Küp 1 Porsiyon Besin Değerleri
          </caption>
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50/80 text-xs font-semibold text-stone-700">
              <th scope="col" className="py-3 px-4 sm:px-6">
                Besin Öğesi
                {showHtmlTags && <span className="ml-1 text-[10px] font-mono text-cyan-700">&lt;th&gt;</span>}
              </th>
              <th scope="col" className="py-3 px-4 sm:px-6 text-right">
                Porsiyon Başına
                {showHtmlTags && <span className="ml-1 text-[10px] font-mono text-cyan-700">&lt;th&gt;</span>}
              </th>
              <th scope="col" className="py-3 px-4 sm:px-6 text-right">
                Günlük Değer (%)
                {showHtmlTags && <span className="ml-1 text-[10px] font-mono text-cyan-700">&lt;th&gt;</span>}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {facts.map((fact) => (
              <tr key={fact.label} className="hover:bg-stone-50/50 transition-colors">
                <td className="py-3 px-4 sm:px-6 font-medium text-stone-900">
                  {fact.label}
                  {showHtmlTags && <span className="ml-1 text-[9px] font-mono text-stone-600">&lt;td&gt;</span>}
                </td>
                <td className="py-3 px-4 sm:px-6 text-right font-mono tabular-nums text-stone-700">
                  {fact.valuePerServing} {fact.unit}
                </td>
                <td className="py-3 px-4 sm:px-6 text-right">
                  <span className="font-mono tabular-nums text-xs font-semibold text-[#8E4423]">
                    %{fact.dailyValuePercentage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showHtmlTags && (
        <div className="text-xs font-mono text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-md mt-2">
          <code>&lt;/table&gt; &lt;!-- Tablo Kapanışı --&gt;</code>
        </div>
      )}
    </section>
  );
};
