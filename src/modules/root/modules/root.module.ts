import { NgModule } from '@angular/core';

import { SharedModule } from 'src/modules/shared/modules/shared.module';
import { RootComponent } from '../components/root.component';
import { RootRoutingModule } from './root-routing.module';
import { LoginModule } from 'src/modules/login/modules/login.module';

@NgModule({
  imports: [
    SharedModule,
    RootRoutingModule,
    LoginModule
  ],
  declarations: [
    RootComponent
  ]
})
export class RootModule {}
