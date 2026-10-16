import React, { useState } from 'react';
import { Check, Volume2, VolumeX, Clock, Lightbulb, Play } from 'lucide-react';
import { Step } from '../types';

interface StepsWalkthroughProps {
  steps: Step[];
  showHtmlTags?: boolean;
  onStartTimerPreset?: (minutes: number, label: string) => void;
}

export const StepsWalkthrough: React.FC<StepsWalkthroughProps> = ({
  steps,
  showHtmlTags = false,
  onStartTimerPreset
}) => {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [readingStepId, setReadingStepId] = useState<string | null>(null);

  const toggleStep = (id: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSpeak = (step: Step) => {
    if (!('speechSynthesis' in window)) {
      alert('Tarayıcınız sesli okumayı desteklemiyor.');
      return;
    }

    if (readingStepId === step.id) {
      window.speechSynthesis.cancel();
      setReadingStepId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${step.stepNumber}. Adım. ${step.title}. ${step.description}`);
    utterance.lang = 'tr-TR';
    utterance.rate = 0.95;

    utterance.onend = () => {
      setReadingStepId(null);
    };

    utterance.onerror = () => {
      setReadingStepId(null);
    };

    setReadingStepId(step.id);
    window.speechSynthesis.speak(utterance);
  };

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  return (
    <section id="hazirlanisi" className="relative">
      {/* HTML Tag Badge in Inspector Mode */}
      {showHtmlTags && (
        <div className="mb-2 flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
          <code>&lt;section id="hazirlanisi"&gt;</code>
          <span className="text-amber-800">· Tarifin yapılış adımlarını içeren semantik bölüm</span>
        </div>
      )}

      {/* Header and Step Progress */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif-recipe">
              Çikolatalı Küp Nasıl Yapılır?
            </h2>
            {showHtmlTags && (
              <span className="text-xs font-mono bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                &lt;h2&gt;
              </span>
            )}
          </div>
          <p className="text-xs text-stone-600 mt-1">
            Adım adım hazırlanış rehberi · Kronolojik sıralı tarif
          </p>
        </div>

        {/* Progress pill */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-stone-600">Hazırlanış İlerlemesi</div>
            <div className="text-xs font-mono tabular-nums font-bold text-stone-900">
              %{progressPercent} tamamlandı ({completedCount}/{steps.length})
            </div>
          </div>
          <div className="w-14 h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#8E4423] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {showHtmlTags && (
        <div className="text-xs font-mono text-purple-800 bg-purple-50 border border-purple-200 px-3 py-1 rounded-md mb-2">
          <code>&lt;ol&gt; &lt;!-- Sıralı liste: Tarif adımları kronolojik bir sıra izlediği için ol kullanılır --&gt;</code>
        </div>
      )}

      {/* Semantic Ordered List */}
      <ol className="space-y-4">
        {steps.map((step) => {
          const isDone = !!completedSteps[step.id];
          const isReading = readingStepId === step.id;

          return (
            <li
              key={step.id}
              className={`rounded-2xl border transition-all ${
                isDone
                  ? 'border-stone-200 bg-stone-50/60 opacity-80'
                  : 'border-stone-200 bg-white shadow-xs hover:border-[#8E4423]/40'
              }`}
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    {/* Step Number Circle */}
                    <button
                      type="button"
                      onClick={() => toggleStep(step.id)}
                      aria-label={`${step.stepNumber}. adımı tamamlandı olarak işaretle`}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-mono text-xs font-bold transition-all ${
                        isDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#3A1E14] text-white hover:bg-[#8E4423]'
                      }`}
                    >
                      {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : step.stepNumber}
                    </button>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={`text-base font-bold tracking-tight ${isDone ? 'text-stone-500 line-through' : 'text-stone-900'}`}>
                          {step.title}
                        </h3>

                        {showHtmlTags && (
                          <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">
                            &lt;li&gt;&lt;strong&gt;
                          </span>
                        )}

                        {step.durationMinutes && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                            <Clock className="w-3 h-3 text-stone-600" />
                            <span className="tabular-nums">{step.durationMinutes} dk</span>
                          </span>
                        )}
                      </div>

                      {/* Step description */}
                      <p className={`mt-2 text-sm leading-relaxed ${isDone ? 'text-stone-500' : 'text-stone-700'}`}>
                        {step.description}
                      </p>

                      {/* Step Chef Tip Callout */}
                      {step.tip && (
                        <div className="mt-3 flex items-start gap-2 text-xs text-[#6B371E] bg-[#FAF3EC] border border-[#ECD9C8] p-2.5 rounded-xl">
                          <Lightbulb className="w-4 h-4 text-[#8E4423] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-stone-900">Püf Noktası: </span>
                            <span>{step.tip}</span>
                          </div>
                        </div>
                      )}

                      {showHtmlTags && (
                        <div className="mt-2 text-[11px] font-mono text-stone-600 bg-stone-50 p-1.5 rounded border border-stone-200">
                          ℹ️ {step.htmlTagExplanation}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions for this step */}
                  <div className="flex items-center gap-1 shrink-0">
                    {/* Read Aloud button */}
                    <button
                      type="button"
                      onClick={() => handleSpeak(step)}
                      title={isReading ? 'Okumayı Durdur' : 'Adımı Sesli Oku'}
                      aria-label="Adımı sesli oku"
                      className={`p-2 rounded-lg text-xs transition-colors ${
                        isReading
                          ? 'bg-[#8E4423] text-white'
                          : 'text-stone-500 hover:text-stone-800 hover:bg-stone-100'
                      }`}
                    >
                      {isReading ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    {/* Quick Timer preset trigger if applicable */}
                    {step.durationMinutes && onStartTimerPreset && (
                      <button
                        type="button"
                        onClick={() => onStartTimerPreset(step.durationMinutes!, `${step.stepNumber}. Adım (${step.durationMinutes} dk)`)}
                        title={`${step.durationMinutes} dakikalık pişirme sayacını kur`}
                        className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-lg text-xs"
                      >
                        <Play className="w-4 h-4 text-[#8E4423]" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {showHtmlTags && (
        <div className="text-xs font-mono text-purple-800 bg-purple-50 border border-purple-200 px-3 py-1 rounded-md mt-2">
          <code>&lt;/ol&gt; &lt;!-- Sıralı Liste Kapanışı --&gt;</code>
        </div>
      )}

      {/* Completion Wish Card */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#FAF4ED] via-white to-[#FAF4ED] border border-[#EADBCC] text-center">
        <p className="text-base font-serif-recipe font-bold text-stone-900 italic">
          "Afiyet olsun! Çikolatalı küpleriniz servise hazır."
        </p>
        <p className="text-xs text-stone-600 mt-1">
          Enes Öztürk Özel Tarifi · Yanında sıcak filtre kahve veya soğuk süt ile tüketmeniz tavsiye edilir.
        </p>
        {showHtmlTags && (
          <code className="inline-block mt-2 text-xs font-mono text-stone-600">
            &lt;p&gt;&lt;strong&gt;&lt;em&gt;Afiyet olsun!&lt;/em&gt;&lt;/strong&gt;&lt;/p&gt;
          </code>
        )}
      </div>
    </section>
  );
};
