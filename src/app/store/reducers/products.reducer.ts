import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GetProductsSuccess,
  ProductsAction
} from '../actions/products.action';

export interface IProduct {
  '_id': string;
  'title': string;
  'serial': number;
  'author': string;
  'price': number;
  'src': string;
}

const initialProductsState: IProduct[] = [];
const initialCurrentProductState: IProduct = {} as IProduct;

// tslint:disable-next-line
export function productsReducer(state: IProduct[] = initialProductsState, action: ProductsAction) {
  console.log(action instanceof GetProductsSuccess);
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return (action as GetProductsSuccess).payload;
    case GET_PRODUCTS_ERROR:
      return state;
    default:
      return state;
  }
}

// tslint:disable-next-line
export function productReducer(state: IProduct = initialCurrentProductState, action: any) {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return action.payload;
    case GET_PRODUCT_ERROR:
      return null;
    default:
      return state;
  }
}
