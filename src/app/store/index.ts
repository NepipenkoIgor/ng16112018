import { productReducer, productsReducer } from './reducers/products.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { cartReducer } from './reducers/cart.reducer';

import { EntityState } from '@ngrx/entity';
import { userReducer } from './reducers/user.reducer';

export interface IStore {
  products: IProduct[];
  cart: EntityState<ICartProduct>;
  currentProduct: IProduct;
  user: IUser;
}
export interface IStore {
  items: any[];
  currentItem: any;
  filter: {
    search: string;
    type: s
  }
}

selector(items,filter)


export const reducers: ActionReducerMap<IStore> = {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  currentProduct: productReducer
};
