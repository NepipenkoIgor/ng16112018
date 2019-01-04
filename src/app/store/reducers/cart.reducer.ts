import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_IN_CART,
  INCREMENT_PRODUCT_IN_CART,
  REMOVE_PRODUCT_FROM_CART
} from '../actions/cart.actions';
import { createFeatureSelector, createSelector, MemoizedSelector, Selector } from '@ngrx/store';
import { IStore } from '../index';


export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter({
  selectId: (product: ICartProduct) => product._id
});

const cartInitialState: EntityState<ICartProduct> = adapter.getInitialState([]);

// tslint:disable-next-line
export function cartReducer(state: EntityState<ICartProduct> = cartInitialState, action: any) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const entity: ICartProduct = state.entities[action.payload._id];
      return adapter.upsertOne({
        ...action.payload,
        count: entity
          ? entity.count + 1
          : 1
      }, state);
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return adapter.removeOne(action.payload, state);
    }
    case DECREMENT_PRODUCT_IN_CART: {
      return adapter.updateOne({
        id: action.payload._id,
        changes: {count: action.payload.count - 1}
      }, state);
    }
    case INCREMENT_PRODUCT_IN_CART: {
      return adapter.updateOne({
        id: action.payload._id,
        changes: {count: action.payload.count + 1}
      }, state);
    }
    default:
      return state;
  }
}

export const {selectAll} = adapter.getSelectors(createFeatureSelector('cart'));


export const trueProductsCount: MemoizedSelector<IStore, number> = createSelector(
  selectAll, (products: ICartProduct[]) => {
    return products.reduce((count: number, product: ICartProduct) => {
      return count += product.count;
    }, 0);
  }
);

export const totalPrice: MemoizedSelector<IStore, number> = createSelector(
  selectAll, (products: ICartProduct[]) => {
    return products.reduce((price: number, product: ICartProduct) => {
      return price += product.price * product.count;
    }, 0);
  }
);

export const userSelector: Selector<IStore, IUser> = (state: IStore) => state.user;
export const productsSelector: Selector<IStore, IProduct[]> = (state: IStore) => state.products;
export const productsWithBonuses: MemoizedSelector<IStore, IProduct[]> = createSelector(
  userSelector,
  productsSelector,
  (user: IUser, products: IProduct[]) => {
    return products.map((product: IProduct) => {
      return {
        ...product,
        price: product.price * user.bonuses
      };
    });
  }
);

// redux + reselect + redux-observable
