import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/recipeData';
import { Review } from '../types';

export const ReviewsSection: React.FC<{ showHtmlTags?: boolean }> = ({ showHtmlTags = false }) => {
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('cikolatali_kup_reviews');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_REVIEWS;
  });

  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('cikolatali_kup_reviews', JSON.stringify(reviews));
    } catch {
      // ignore
    }
  }, [reviews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author: authorName.trim(),
      date: 'Bugün',
      rating,
      comment: commentText.trim(),
      verifiedCook: true
    };

    setReviews([newReview, ...reviews]);
    setAuthorName('');
    setCommentText('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="yorumlar" className="relative">
      {showHtmlTags && (
        <div className="mb-2 flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
          <code>&lt;section id="yorumlar"&gt;</code>
          <span className="text-amber-800">· Kullanıcı değerlendirmeleri ve form bölümü</span>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 font-serif-recipe">
            Yorumlar ve Puanlar
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Tarifi deneyenlerin değerlendirmeleri
          </p>
        </div>

        <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-xl">
          <div className="flex items-center text-amber-500">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="font-mono tabular-nums font-bold text-sm text-stone-900">
            {avgRating} / 5.0
          </span>
          <span className="text-xs text-stone-600">({reviews.length} değerlendirme)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Review Form */}
        <div className="lg:col-span-1 rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
          <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#8E4423]" />
            Tarifi Değerlendirin
          </h3>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            <div>
              <label htmlFor="author-name" className="block text-xs font-semibold text-stone-700 mb-1">
                Adınız Soyadınız
              </label>
              <input
                id="author-name"
                type="text"
                required
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Örn: Ayşe Kaya"
                className="w-full text-xs px-3 py-2 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8E4423]/30"
              />
            </div>

            <div>
              <span className="block text-xs font-semibold text-stone-700 mb-1">
                Puanınız
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    aria-label={`${star} yıldız ver`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-stone-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="comment-text" className="block text-xs font-semibold text-stone-700 mb-1">
                Yorumunuz ve Deneyiminiz
              </label>
              <textarea
                id="comment-text"
                rows={3}
                required
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Çikolatalı küp kıvamı nasıl oldu? Beğendiniz mi?"
                className="w-full text-xs p-3 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8E4423]/30"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#3A1E14] hover:bg-[#25130D] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Yorumu Paylaş
            </button>

            {submitted && (
              <p className="text-xs text-emerald-700 font-medium text-center flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Yorumunuz başarıyla eklendi!
              </p>
            )}
          </form>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2 space-y-3">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-5 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF3EC] text-[#8E4423] font-bold text-xs flex items-center justify-center">
                    {rev.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                      {rev.author}
                      {rev.verifiedCook && (
                        <span className="text-[10px] text-emerald-800 font-medium bg-emerald-50 px-1.5 py-0.2 rounded">
                          Tarifi Denedi
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-stone-600">{rev.date}</div>
                  </div>
                </div>

                <div className="flex items-center text-amber-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>

              <p className="mt-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                {rev.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
