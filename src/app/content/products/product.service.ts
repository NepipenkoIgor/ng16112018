import { IProduct } from '../../mock/products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

export class ProductService {

  public constructor(
    @Inject(HttpClient) private _http: HttpClient,
  ) {

  }

  public getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`/products`);
  }

  public getProduct(id: string): Observable<IProduct> {
    return this._http.get<IProduct>(`/products/${id}`);
  }
}
