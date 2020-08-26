import {ECategoryEnum} from '@shared/enums/category.enum';

export interface IProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ECategoryEnum;
  isAvailable: boolean;
  image?: string;
}
