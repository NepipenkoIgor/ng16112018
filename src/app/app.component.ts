import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IProduct } from './mock/products';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { LargeService } from './common/services/large.service';
import { SmallService } from './common/services/small.service';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public logo: string = 'assets/img/logo.png';
  public placeholder: string = 'Более 1000 товаров';
  public text!: string;
  public products$: Observable<IProduct[]> = this._productService.getProducts();
  private _span: string = '<span style="color:red">Hi all</span>';

  public constructor(
    private  _sanitazer: DomSanitizer,
    private _productService: ProductService,
    @Inject('SizeService') private _sizeService: LargeService | SmallService,
  ) {
    this._sizeService.run();
  }

  public safeSpan(): SafeHtml {
    return this._sanitazer.bypassSecurityTrustHtml(this._span);

    // liveSearch(fromEvent(inputElement, 'input'), doRequest(inputElement.value))
    //   .subscribe(render);
    //
    // function liveSearch(source1$, source2$, schedule = async) {
    //   return source1$.pipe(
    //     observeOn(asap),
    //     debounceTime(300),
    //     filter(() => !!inputElement && !!inputElement.value && inputElement.value.length > 2),
    //     tap(() => !!resultElement ? resultElement.innerHTML = '' : ''),
    //     switchMap(() => source2$)
    //   );
    // }

  }

}
