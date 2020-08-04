import {IProductModel} from '@shared/models/product.model';
import {ECategoryEnum} from '@shared/enums/category.enum';

export const PRODUCTS_LIST: IProductModel[] = [
  {name: 'Apple', category: ECategoryEnum.First, description: 'An apple', price: 5, isAvailable: true},
  {name: 'Banana', category: ECategoryEnum.Second, description: 'A banana', price: 7, isAvailable: false},
  {name: 'Orange', category: ECategoryEnum.First, description: 'An orange', price: 8, isAvailable: true},
];
