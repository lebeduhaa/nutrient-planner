import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from '../components/layout/layout.component';
import { MainComponent } from 'src/modules/main/components/main/main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'main', component: MainComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {}
