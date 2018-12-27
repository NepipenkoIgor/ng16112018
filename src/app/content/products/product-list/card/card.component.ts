import { Component, Input } from '@angular/core';

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


  public dollarPrice(price: number): number {
    return price / 28.1;
  }
}
