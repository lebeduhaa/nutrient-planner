import { NgModule } from '@angular/core';

import { SharedModule } from 'src/modules/shared/modules/shared.module';
import { RootComponent } from '../components/root.component';
import { RootRoutingModule } from './root-routing.module';
import { LoginModule } from 'src/modules/login/modules/login.module';
import { LayoutModule } from 'src/modules/layout/modules/layout.module';

@NgModule({
  imports: [
    SharedModule,
    RootRoutingModule,
    LoginModule,
    LayoutModule
  ],
  declarations: [
    RootComponent
  ]
})
export class RootModule {}
