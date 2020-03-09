import { NgModule } from '@angular/core';

import { SharedModule } from 'src/modules/shared/modules/shared.module';
import { AuthenticationComponent } from '../components/authentication/authentication.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AuthenticationComponent
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class LoginModule {}
