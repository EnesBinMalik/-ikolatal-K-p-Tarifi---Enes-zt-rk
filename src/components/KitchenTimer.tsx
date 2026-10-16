import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, BellRing, Sparkles } from 'lucide-react';
import { playChime } from '../utils/audioChime';

interface KitchenTimerProps {
  initialMinutes?: number;
  label?: string;
}

export const KitchenTimer: React.FC<KitchenTimerProps> = ({
  initialMinutes = 25,
  label = 'Fırın Pişirme Sayacı'
}) => {
  const [totalSeconds, setTotalSeconds] = useState(initialMinutes * 60);
  const [secondsRemaining, setSecondsRemaining] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0 && isActive) {
      setIsActive(false);
      setCompleted(true);
      playChime();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsRemaining]);

  const toggleTimer = () => {
    if (completed) {
      setCompleted(false);
      setSecondsRemaining(totalSeconds);
      setIsActive(true);
      return;
    }
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSecondsRemaining(totalSeconds);
    setCompleted(false);
  };

  const setPreset = (mins: number, presetLabel: string) => {
    setIsActive(false);
    setCompleted(false);
    const secs = mins * 60;
    setTotalSeconds(secs);
    setSecondsRemaining(secs);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const percentProgress = Math.max(0, Math.min(100, ((totalSeconds - secondsRemaining) / totalSeconds) * 100));

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-stone-100">
        <div className="flex items-center gap-2">
          <BellRing className="w-5 h-5 text-[#8E4423]" />
          <h3 className="font-semibold text-stone-900 text-sm tracking-tight">
            {label}
          </h3>
        </div>
        <div className="text-xs font-mono tabular-nums text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
          {Math.floor(totalSeconds / 60)} Dakika
        </div>
      </div>

      {/* Timer Presets */}
      <div className="flex flex-wrap items-center gap-1.5 pt-3 pb-4">
        {[
          { label: '25 dk Pişirme', min: 25 },
          { label: '20 dk Soğuma', min: 20 },
          { label: '8 dk Benmari', min: 8 },
          { label: '4 dk Çırpma', min: 4 }
        ].map((preset) => (
          <button
            key={preset.min}
            type="button"
            onClick={() => setPreset(preset.min, preset.label)}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              totalSeconds === preset.min * 60
                ? 'bg-[#3A1E14] text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Big Digital Display & Progress */}
      <div className="flex flex-col items-center justify-center py-4 bg-stone-50 rounded-xl border border-stone-100">
        <div className="text-4xl sm:text-5xl font-mono tabular-nums font-bold text-stone-900 tracking-wider">
          {formatTime(secondsRemaining)}
        </div>
        
        {completed ? (
          <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Süre doldu! Fırını kontrol edin.</span>
          </div>
        ) : (
          <span className="mt-1 text-xs text-stone-600">
            {isActive ? 'Zaman işliyor... Mutfaktayız' : 'Hazır olduğunuzda başlatın'}
          </span>
        )}

        {/* Progress bar */}
        <div className="w-3/4 max-w-xs mt-3 h-1.5 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#8E4423] transition-all duration-1000 ease-linear rounded-full"
            style={{ width: `${percentProgress}%` }}
          />
        </div>
      </div>

      {/* Timer Controls */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          type="button"
          onClick={toggleTimer}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white shadow-sm transition-transform active:scale-95 ${
            isActive ? 'bg-amber-700 hover:bg-amber-800' : 'bg-[#3A1E14] hover:bg-[#25130D]'
          }`}
        >
          {isActive ? (
            <>
              <Pause className="w-4 h-4" /> Duraklat
            </>
          ) : (
            <>
              <Play className="w-4 h-4" /> {completed ? 'Yeniden Başlat' : 'Başlat'}
            </>
          )}
        </button>

        <button
          type="button"
          onClick={resetTimer}
          aria-label="Sayacı Sıfırla"
          className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Sıfırla</span>
        </button>

        <button
          type="button"
          onClick={() => playChime()}
          title="Zil Sesini Test Et"
          className="px-2.5 py-2.5 rounded-lg text-xs text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors"
        >
          Zil Testi
        </button>
      </div>
    </div>
  );
};
