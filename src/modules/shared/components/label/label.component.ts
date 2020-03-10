import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: 'label.component.html',
  styleUrls: ['label.component.scss']
})
export class LabelComponent {

  @Input() value: string;
  @Input() disabled: boolean;
  @Input() currency: string;

}
