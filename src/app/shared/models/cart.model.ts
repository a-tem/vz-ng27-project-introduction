import {IProductModel} from '@shared/models/product.model';

export interface ICartInfo {
  totalPrice: number;
  totalItems: number;
}

export interface ICartCombinedItem {
  name: string;
  items: IProductModel[];
  image?: string;
}

export interface ICartAPIResponse {
  id: number;
  cartItems: ICartCombinedItem[];
}
