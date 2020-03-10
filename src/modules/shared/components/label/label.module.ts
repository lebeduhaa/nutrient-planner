import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared.module';
import { LabelComponent } from './label.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LabelComponent
  ],
  exports: [
    LabelComponent
  ]
})
export class LabelModule {}
