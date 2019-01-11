import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartProductComponent } from './cart-product.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

const product: ICartProduct = {
  '_id': '11111',
  'title': 'Product 1',
  'serial': 123,
  'author': 'Company 1',
  'price': 1000,
  'src': 'img.png',
  count: 2
};

describe('CartProductComponent', () => {
  let component: CartProductComponent;
  let fixture: ComponentFixture<CartProductComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartProductComponent]
    });

    fixture = TestBed.createComponent(CartProductComponent);

    component = fixture.componentInstance;
    component.product = product;

    spyOn(component, 'decrementProduct')
      .and
      .callThrough();

    spyOn(component, 'incrementProduct')
      .and
      .callThrough();

    spyOn(component, 'removeProduct')
      .and
      .callThrough();

    spyOn(component.remove, 'emit')
      .and
      .callThrough();

    spyOn(component.increment, 'emit')
      .and
      .callThrough();

    spyOn(component.decrement, 'emit')
      .and
      .callThrough();

    fixture.detectChanges();

  });

  it('should increment', () => {
    const incrementProduct: DebugElement = fixture.debugElement.query(By.css('.count__increase'));
    incrementProduct.triggerEventHandler('click', null);
    expect(component.incrementProduct)
      .toHaveBeenCalledWith(product);
  });

  it('should decrement', () => {
    const decrementProduct: DebugElement = fixture.debugElement.query(By.css('.count__decrease'));
    decrementProduct.triggerEventHandler('click', null);
    expect(component.decrement.emit)
      .toHaveBeenCalledWith(product);
    expect(component.remove.emit)
      .not
      .toHaveBeenCalled();
    component.product = {...component.product, count: 1};
    fixture.detectChanges();

    decrementProduct.triggerEventHandler('click', null);
    expect(component.remove.emit)
      .toHaveBeenCalledWith(product._id);

    expect(component.decrement.emit)
      .toHaveBeenCalledTimes(1);
  });
});
