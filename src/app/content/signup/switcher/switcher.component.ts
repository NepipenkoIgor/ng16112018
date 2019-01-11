import { Component, forwardRef, HostListener, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type Cb = (checked: boolean) => void;
const provider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  // TODO: WHY without forwardRef ????
  useExisting: forwardRef(() => SwitcherComponent),
  multi: true
};

@Component({
  selector: 'course-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [provider]
})
export class SwitcherComponent implements ControlValueAccessor {

  public checked!: boolean;
  private _onChangeCb!: Cb;

  @HostListener('click')
  public toggle(): void {
    this.checked = !this.checked;
    this._onChangeCb(this.checked);
  }

  public writeValue(checked: boolean): void {
    this.checked = checked;
  }

  public registerOnChange(_fn: Cb): void {
    this._onChangeCb = _fn;
  }

  public registerOnTouched(_fn: Cb): void {
  }
}
