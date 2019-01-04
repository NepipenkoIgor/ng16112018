import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LargeService } from './common/services/large.service';
import { SmallService } from './common/services/small.service';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IStore } from './store';

// enum Size {
//   XL = 52,
//   L = 48,
//   s = 46
// }

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public logo: string = 'assets/img/logo.png';
  public placeholder: string = 'Более 1000 товаров';
  public text!: string;

  private _ubsubscribeSubject$$: Subject<boolean> = new Subject();

  private _span: string = '<span style="color:red">Hi all</span>';

  public constructor(
    private  _sanitazer: DomSanitizer,
    @Inject('SizeService') private _sizeService: LargeService | SmallService,
    private _store: Store<IStore>
  ) {
    this._sizeService.run();

    this._store.select('currentProduct')
      .pipe(
        takeUntil(this._ubsubscribeSubject$$)
      )
      .subscribe((product: IProduct | null) => {
        console.log(product);
      });


    this._ubsubscribeSubject$$.next(true);
    // const europeXL: string = Size[52];
    // console.log(`europeXL => ${europeXL}`);
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
