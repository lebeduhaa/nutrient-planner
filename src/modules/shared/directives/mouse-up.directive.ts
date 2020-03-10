import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMouseUp]'
})
export class MouseUpDirective {

  @Output() appMouseUp = new EventEmitter<void>();

  @HostListener('document:mouseup')
  moseUp(): void {
    this.appMouseUp.emit();
  }

}