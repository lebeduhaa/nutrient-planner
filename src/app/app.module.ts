import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootModule } from 'src/modules/root/modules/root.module';
import { RootComponent } from 'src/modules/root/components/root.component';


@NgModule({
  imports: [
    BrowserModule,
    RootModule,
    BrowserAnimationsModule
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
