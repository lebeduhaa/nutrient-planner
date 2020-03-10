import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/modules/shared/modules/shared.module';
import { AuthenticationComponent } from '../components/authentication/authentication.component';
import { InputModule } from 'src/modules/shared/components/input/input.module';
import { LinkModule } from 'src/modules/shared/components/link/link.module';
import { ButtonModule } from 'src/modules/shared/components/button/button.module';

@NgModule({
  imports: [
    SharedModule,
    InputModule,
    ButtonModule,
    LinkModule,
    RouterModule
  ],
  declarations: [
    AuthenticationComponent
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class LoginModule {}
