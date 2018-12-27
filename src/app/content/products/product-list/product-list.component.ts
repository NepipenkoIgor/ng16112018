import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'course-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products$: Observable<IProduct[]> = this._productService.getProducts();

  public constructor(
    private _productService: ProductService,
  ) {
  }

}
