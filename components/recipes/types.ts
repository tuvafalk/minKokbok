export interface OvenSettings {
  temp: string;
  time: string;
}

export interface IngredientGroup {
  group: string;
  items: string[];
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  effort: number;
  oven?: OvenSettings;
  portions: number;
  time: string;
  ingredients: IngredientGroup[];
  instructions: string[];
  tips?: string;
}