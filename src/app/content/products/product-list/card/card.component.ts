import { Component, Input } from '@angular/core';
import { AddProductToCart } from '../../../../store/actions/cart.actions';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../store';

@Component({
  selector: 'course-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  public constructor(
    private _store: Store<IStore>
  ) {
  }

  public dollarPrice(price: number): number {
    return price / 28.1;
  }

  public addProductToCart(product: IProduct): void {
    this._store.dispatch(new AddProductToCart(product));
  }
}
