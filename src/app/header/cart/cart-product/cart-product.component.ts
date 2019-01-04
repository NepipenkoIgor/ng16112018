import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'course-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {
  @Input()
  public product!: ICartProduct;

  @Output()
  public remove: EventEmitter<string> = new EventEmitter();

  @Output()
  public increment: EventEmitter<ICartProduct> = new EventEmitter();

  @Output()
  public decrement: EventEmitter<ICartProduct> = new EventEmitter();

  public removeProduct(id: string): void {
    this.remove.emit(id);
  }

  public incrementProduct(product: ICartProduct): void {
    this.increment.emit(product);
  }

  public decrementProduct(product: ICartProduct): void {
    if (product.count === 1) {
      this.remove.emit(product._id);
      return;
    }
    this.decrement.emit(product);
  }
}
