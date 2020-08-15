import {IProductModel} from '@shared/models/product.model';
import {ECategoryEnum} from '@shared/enums/category.enum';

export const PRODUCTS_LIST: IProductModel[] = [
  {name: 'Lemon', category: ECategoryEnum.Second, description: 'A lemon', price: 6, isAvailable: true},
  {name: 'Apple', category: ECategoryEnum.First, description: 'An apple', price: 5, isAvailable: true},
  {name: 'Banana', category: ECategoryEnum.Second, description: 'A banana', price: 7, isAvailable: false},
  {name: 'Tomato', category: ECategoryEnum.Second, description: 'A tomato', price: 3, isAvailable: true},
  {name: 'Orange', category: ECategoryEnum.First, description: 'An orange', price: 8, isAvailable: true},
];
