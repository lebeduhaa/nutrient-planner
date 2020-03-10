import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared.module';
import { InfoCardComponent } from './info-card.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    InfoCardComponent
  ],
  exports: [
    InfoCardComponent
  ]
})
export class InfoCardModule {}
