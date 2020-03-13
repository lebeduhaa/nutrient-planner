import { NgModule } from '@angular/core';

import { SharedModule } from 'src/modules/shared/modules/shared.module';
import { LayoutComponent } from '../components/layout/layout.component';
import { MainModule } from 'src/modules/main/modules/main.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { PaymentsModule } from 'src/modules/payments/modules/payments.module';

@NgModule({
  imports: [
    SharedModule,
    LayoutRoutingModule,
    MainModule,
    PaymentsModule
  ],
  declarations: [
    LayoutComponent,
    SideBarComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {}
