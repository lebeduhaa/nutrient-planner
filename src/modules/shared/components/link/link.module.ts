import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared.module';
import { LinkComponent } from './link.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LinkComponent
  ],
  exports: [
    LinkComponent
  ]
})
export class LinkModule {}
