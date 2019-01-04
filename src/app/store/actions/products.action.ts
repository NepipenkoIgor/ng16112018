export const GET_PRODUCTS_PENDING: string = 'GET_PRODUCTS_PENDING';
export const GET_PRODUCTS_SUCCESS: string = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR: string = 'GET_PRODUCTS_ERROR';

export const GET_PRODUCT_PENDING: string = 'GET_PRODUCT_PENDING';
export const GET_PRODUCT_SUCCESS: string = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR: string = 'GET_PRODUCT_ERROR';


export class GetProductsPending {
  public readonly type: string = GET_PRODUCTS_PENDING;
}

export class GetProductsSuccess {
  public readonly type: string = GET_PRODUCTS_SUCCESS;

  public constructor(public payload: IProduct[]) {
  }
}

export class GetProductsError {
  public readonly type: string = GET_PRODUCTS_ERROR;
}

export class GetProductPending {
  public readonly type: string = GET_PRODUCT_PENDING;

  public constructor(public payload: string) {
  }
}

export class GetProductSuccess {
  public readonly type: string = GET_PRODUCT_SUCCESS;

  public constructor(public payload: IProduct) {
  }
}

export class GetProductError {
  public readonly type: string = GET_PRODUCT_ERROR;
}

export type ProductsAction = GetProductsSuccess | GetProductsError;
