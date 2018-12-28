import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetProductsPending } from '../../../store/actions/products.action';

@Component({
  selector: 'course-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products$!: Observable<IProduct[]>;

  public constructor(
    private _store: Store<IStore>
  ) {
  }

  public ngOnInit(): void {
    this._store.dispatch(new GetProductsPending());
    this.products$ = this._store.select('products');
  }

}
