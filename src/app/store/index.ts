import { productReducer, productsReducer } from './reducers/products.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const reducers: ActionReducerMap<IStore> = {
  products: productsReducer,
  currentProduct: productReducer
};
