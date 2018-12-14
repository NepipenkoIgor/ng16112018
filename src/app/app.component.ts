import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IProduct, products$ } from './mock/products';
import { Observable } from 'rxjs';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public logo: string = 'assets/img/logo.png';
  public placeholder: string = 'Более 1000 товаров';
  public text!: string;
  public products$: Observable<IProduct[]> = products$;
  private _span: string = '<span style="color:red">Hi all</span>';

  public constructor(
    private  _sanitazer: DomSanitizer
  ) {
  }

  public safeSpan(): SafeHtml {
    return this._sanitazer.bypassSecurityTrustHtml(this._span);
  }

}
