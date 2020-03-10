import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared.module';
import { InputComponent } from './input.component';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    SharedModule,
    DirectivesModule
  ],
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule {}
