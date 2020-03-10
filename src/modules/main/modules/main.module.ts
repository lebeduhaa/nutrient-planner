import { NgModule } from '@angular/core';

import { SharedModule } from 'src/modules/shared/modules/shared.module';
import { MainComponent } from '../components/main/main.component';
import { InfoCardModule } from 'src/modules/shared/components/info-card/info-card.module';
import { ButtonModule } from 'src/modules/shared/components/button/button.module';
import { LabelModule } from 'src/modules/shared/components/label/label.module';

@NgModule({
  imports: [
    SharedModule,
    InfoCardModule,
    ButtonModule,
    LabelModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {}
