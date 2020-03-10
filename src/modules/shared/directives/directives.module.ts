import { NgModule } from "@angular/core";

import { MouseUpDirective } from './mouse-up.directive';

@NgModule({
  declarations: [
    MouseUpDirective
  ],
  exports: [
    MouseUpDirective
  ]
})
export class DirectivesModule {}
