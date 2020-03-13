import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonComponent {

  @Output() click = new EventEmitter<void>();

  @Input() caption: string;
  @Input() dark: boolean;
  @Input() disabled: boolean;

  public reactOnClick(event: MouseEvent): void {
    event.stopPropagation();

    if (!this.disabled) {
      this.click.emit();
    }
  }

}
