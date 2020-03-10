import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared.module';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule {}
