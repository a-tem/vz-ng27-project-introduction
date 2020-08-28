import {ICartCombinedItem} from '@shared/models/cart.model';

export interface IOrderData {
  user: {
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    zip: string;
  };
  products: ICartCombinedItem[];
  created: number;
  totalSum?: number;
}
