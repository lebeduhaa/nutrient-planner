import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from '../components/layout/layout.component';
import { MainComponent } from 'src/modules/main/components/main/main.component';
import { PaymentsComponent } from 'src/modules/payments/components/payments/payments.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'main', component: MainComponent },
          { path: 'payments', component: PaymentsComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {}
