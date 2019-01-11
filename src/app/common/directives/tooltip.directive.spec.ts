import { TooltipDirective } from './tooltip.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'course-test-component',
  template: `
    <div class="with_tooltip" [courseTooltip]="tooltipText" #t="tooltip"></div>
    <div class="with_control" (mouseenter)="t.show()" (mouseleave)="t.hide()"></div>
  `,
})
class TestComponent {
  public tooltipText: string = 'text on tooltip';
}


describe('TooltipDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TooltipDirective
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it('should work', () => {
    const tooltipContainer: DebugElement = fixture.debugElement.query(By.css('.with_tooltip'));
    const tooltip: DebugElement = tooltipContainer.query(By.css('.tooltiptext'));

    expect(tooltipContainer.nativeElement.classList.contains('tooltip-container'))
      .toBeTruthy();

    expect(tooltip.nativeElement.classList.contains('open'))
      .toBeFalsy();

    const tooltipControl: DebugElement = fixture.debugElement.query(By.css('.with_control'));

    tooltipControl.triggerEventHandler('mouseenter', null);

    expect(tooltip.nativeElement.classList.contains('open'))
      .toBeTruthy();
    tooltipControl.triggerEventHandler('mouseleave', null);

    expect(tooltip.nativeElement.classList.contains('open'))
      .toBeFalsy();
  });
});
