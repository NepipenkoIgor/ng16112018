import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public logo!: string;
  @Input()
  public placeholder!: string;

  @Output()
  public search: EventEmitter<string> = new EventEmitter();

  public constructor(
    private _router: Router
  ) {
    // tslint:disable-next-line
    console.log('constructor');
  }

  public goToProducts(): void {
    this._router.navigate(['products']);
  }

  // public ngOnInit(): void {
  //
  // }
  //
  // public ngAfterContentInit(): void {
  //   // tslint:disable-next-line
  //   console.log('ngAfterContentInit');
  // }
  //
  // public ngAfterViewInit(): void {
  //   // tslint:disable-next-line
  //   console.log('ngAfterViewInit');
  // }
  //
  // public ngAfterContentChecked(): void {
  //   // tslint:disable-next-line
  //   console.log('ngAfterContentChecked');
  // }
  //
  // public ngAfterViewChecked(): void {
  //   // tslint:disable-next-line
  //   console.log('ngAfterViewChecked');
  // }
  //
  // public ngDoCheck(): void {
  //   // tslint:disable-next-line
  //   console.log('ngDoCheck');
  // }
  //
  // public ngOnChanges(changes: SimpleChanges): void {
  //   // tslint:disable-next-line
  //   console.log('changes', changes);
  // }

  public searchEvent(event: KeyboardEvent): void {
    const value: string = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }

}
