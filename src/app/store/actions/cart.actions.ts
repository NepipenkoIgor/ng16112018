export const ADD_PRODUCT_TO_CART: string = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART: string = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_PRODUCT_IN_CART: string = 'INCREMENT_PRODUCT_IN_CART';
export const DECREMENT_PRODUCT_IN_CART: string = 'DECREMENT_PRODUCT_IN_CART';

export class AddProductToCart {
  public readonly type: string = ADD_PRODUCT_TO_CART;

  public constructor(public readonly payload: IProduct) {
  }
}

export class RemoveProductFromCart {
  public readonly type: string = REMOVE_PRODUCT_FROM_CART;

  public constructor(public readonly payload: string) {
  }
}

export class DecrementProductInCart {
  public readonly type: string = DECREMENT_PRODUCT_IN_CART;

  public constructor(public readonly payload: ICartProduct) {
  }
}

export class IncrementProductInCart {
  public readonly type: string = INCREMENT_PRODUCT_IN_CART;

  public constructor(public readonly payload: ICartProduct) {
  }
}
