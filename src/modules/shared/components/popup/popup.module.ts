import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared.module';
import { PopupComponent } from './popup.component';
import { MaterialModule } from '../../modules/material.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule
  ],
  declarations: [
    PopupComponent
  ],
  exports: [
    PopupComponent
  ]
})
export class PopupModule {}
