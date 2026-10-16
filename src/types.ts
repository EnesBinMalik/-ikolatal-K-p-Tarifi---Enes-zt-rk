export interface Ingredient {
  id: string;
  name: string;
  baseQuantity: number;
  unit: string;
  note?: string;
  category: 'cikolata' | 'kuru' | 'sivi' | 'ekstra';
  htmlTagExplanation: string;
}

export interface Step {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  durationMinutes?: number;
  tip?: string;
  htmlTagExplanation: string;
}

export interface NutritionFact {
  label: string;
  valuePerServing: number;
  unit: string;
  dailyValuePercentage: number;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: string;
  verifiedCook?: boolean;
}

export interface RecipeMeta {
  title: string;
  subtitle: string;
  author: {
    name: string;
    role: string;
    course: string;
    assignment: string;
    bio: string;
  };
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  restTimeMinutes: number;
  baseServings: number;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  caloriesPerServing: number;
  ratingAverage: number;
  reviewCount: number;
}
