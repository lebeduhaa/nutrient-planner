import { NgModule } from '@angular/core';

import { SharedModule } from 'src/modules/shared/modules/shared.module';
import { AuthenticationComponent } from '../components/authentication/authentication.component';
import { InputModule } from 'src/modules/shared/components/input/input.module';

@NgModule({
  imports: [
    SharedModule,
    InputModule
  ],
  declarations: [
    AuthenticationComponent
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class LoginModule {}
