import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationComponent } from 'src/modules/login/components/authentication/authentication.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: AuthenticationComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RootRoutingModule {}
