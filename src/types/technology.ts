export interface Technology {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  icon: string;
}

export interface StackItem extends Technology {
  quantity: number;
}