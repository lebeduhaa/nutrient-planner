import { Component, Input, OnInit } from '@angular/core';

import { APP } from 'src/app/constants';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: string;
  @Input() placeholder: string;

  public isPassword: boolean;
  public currentType: string;

  ngOnInit() {
    this.isPasswordDetection();
    this.copyType();
  }

  public showPassword(): void {
    this.currentType = APP.controlTypes.text;
  }

  public hidePassword(): void {
    if (this.type === APP.controlTypes.password) {
      this.currentType = APP.controlTypes.password;
    }
  }

  private isPasswordDetection(): void {
    this.isPassword = this.type === APP.controlTypes.password;
  }

  private copyType(): void {
    this.currentType = this.type;
  }

}
