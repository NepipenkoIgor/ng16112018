import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, Params } from '@angular/router';
import { IProduct } from '../../../mock/products';

@Component({
  selector: 'course-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public title!: string;
  public id!: string;
  public product!: IProduct;

  public constructor(
    private _activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    //  Why Data is not {title: any } ????
    console.log(this._activatedRoute.snapshot);
    this._activatedRoute.data.subscribe((data: Data) => {
      this.title = data.title;
      this.product = data.product;
    });
    this._activatedRoute.queryParams.subscribe((query: Params) => {
      console.log(query);
    });
    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      console.log(param);
      this.id = param.get('id') as string;
    });
  }

}
