import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  private _currentItem$$: Subject<any> = new Subject();

  public getCurrentItem(): Observable<any> {
    return this._currentItem$$.asObservable();
  }

  public setCurrentItem(item: any): void {
    this._currentItem$$.next(item);
  }

  public getItems(): Observable<any> {
    return of([]);
  }

}
