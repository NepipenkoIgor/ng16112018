import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, skip, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GetProductPending } from '../../../store/actions/products.action';
import { IStore } from '../../../store';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<IProduct | null> {

  public constructor(
    private _router: Router,
    private _store: Store<IStore>
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<IProduct | null> {
    this._store.dispatch(new GetProductPending(route.params.id));
    return this._store.select('currentProduct')  // this._productService.getProduct(route.params.id)
      .pipe(
        skip(1),
        take(1),
        map((product: IProduct | null) => {
          if (!product) {
            this._router.navigate(['/products']);
            return product;
          }
          return product;
        })
      );
  }

}
