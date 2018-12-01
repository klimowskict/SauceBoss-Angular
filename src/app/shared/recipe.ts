import { Review } from './../shared/Review';

export class Recipe {
  id: number;
  name: string;
  image: string;
  label: string;
  price: string;
  description: string;
  difficulty: string;
  reviews: Review[];
}
