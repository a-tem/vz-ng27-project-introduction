import {ECategoryEnum} from '@shared/enums/category.enum';

export interface IProductModel {
  name: string;
  description: string;
  price: number;
  category: ECategoryEnum;
  isAvailable: boolean;
}
