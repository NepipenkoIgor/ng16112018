import { Component, OnInit } from '@angular/core';
import { selectAll, totalPrice, trueProductsCount } from '../../store/reducers/cart.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IStore } from '../../store';
import { DecrementProductInCart, IncrementProductInCart, RemoveProductFromCart } from '../../store/actions/cart.actions';

@Component({
  selector: 'course-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products$!: Observable<ICartProduct[]>;
  public count$!: Observable<number>;
  public price$!: Observable<number>;

  public constructor(
    private _store: Store<IStore>
  ) {
  }

  public ngOnInit(): void {
    this.products$ = this._store.select(selectAll);
    this.count$ = this._store.select(trueProductsCount);
    this.price$ = this._store.select(totalPrice);
  }

  public removeProduct(id: string): void {
    this._store.dispatch(new RemoveProductFromCart(id));
  }

  public incrementProduct(product: ICartProduct): void {
    this._store.dispatch(new IncrementProductInCart(product));
  }

  public decrementProduct(product: ICartProduct): void {
    this._store.dispatch(new DecrementProductInCart(product));
  }
}
