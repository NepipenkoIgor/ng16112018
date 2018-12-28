import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  GET_PRODUCT_PENDING,
  GET_PRODUCTS_PENDING,
  GetProductError,
  GetProductsError,
  GetProductsSuccess,
  GetProductSuccess
} from '../actions/products.action';

@Injectable()
export class ProductsEffect {
  @Effect()
  public products$: Observable<Action> = this._actions$.pipe(
    ofType(GET_PRODUCTS_PENDING),
    switchMap(() =>
      this._http.get<IProduct[]>(`/products`).pipe(
        // If successful, dispatch success action with result
        map((products: IProduct[]) => new GetProductsSuccess(products)),
        // If request fails, dispatch failed action
        catchError(() => of(new GetProductsError()))
      )
    )
  );

  public constructor(
    private _http: HttpClient,
    private _actions$: Actions
  ) {
  }
}

@Injectable()
export class ProductEffect {
  @Effect()
  public products$: Observable<Action> = this._actions$.pipe(
    ofType(GET_PRODUCT_PENDING),
    // tslint:disable-next-line
    switchMap((action: any) =>
      this._http.get<IProduct>(`/products/${action.payload}`).pipe(
        // If successful, dispatch success action with result
        map((product: IProduct) => new GetProductSuccess(product)),
        // If request fails, dispatch failed action
        catchError(() => of(new GetProductError()))
      )
    )
  );

  public constructor(
    private _http: HttpClient,
    private _actions$: Actions
  ) {
  }
}
