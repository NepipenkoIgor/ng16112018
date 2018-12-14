import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input()
  public logo!: string;
  @Input()
  public placeholder!: string;

  @Output()
  public search: EventEmitter<string> = new EventEmitter();

  public constructor() {
    // tslint:disable-next-line
    console.log('constructor');
  }

  public ngOnInit(): void {

  }

  public ngAfterContentInit(): void {
    // tslint:disable-next-line
    console.log('ngAfterContentInit');
  }

  public ngAfterViewInit(): void {
    // tslint:disable-next-line
    console.log('ngAfterViewInit');
  }

  public ngAfterContentChecked(): void {
    // tslint:disable-next-line
    console.log('ngAfterContentChecked');
  }

  public ngAfterViewChecked(): void {
    // tslint:disable-next-line
    console.log('ngAfterViewChecked');
  }

  public ngDoCheck(): void {
    // tslint:disable-next-line
    console.log('ngDoCheck');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line
    console.log('changes', changes);
  }

  public searchEvent(event: KeyboardEvent): void {
    const value: string = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }

}
