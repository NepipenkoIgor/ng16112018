import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProduct } from '../../../mock/products';
import { ProductService } from '../product.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<IProduct | null> {

  public constructor(
    private _productService: ProductService,
    private _router: Router,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<IProduct | null> {
    return this._productService.getProduct(route.params.id)
      .pipe(
        catchError((_err: Error) => {
          this._router.navigate(['/products']);
          return of(null);
        })
      );
  }

}
