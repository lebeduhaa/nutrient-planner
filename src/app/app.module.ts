import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootModule } from 'src/modules/root/modules/root.module';
import { RootComponent } from 'src/modules/root/components/root.component';


@NgModule({
  imports: [
    BrowserModule,
    RootModule
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
