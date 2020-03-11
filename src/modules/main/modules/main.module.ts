import { NgModule } from '@angular/core';

import { SharedModule } from 'src/modules/shared/modules/shared.module';
import { MainComponent } from '../components/main/main.component';
import { InfoCardModule } from 'src/modules/shared/components/info-card/info-card.module';
import { ButtonModule } from 'src/modules/shared/components/button/button.module';
import { LabelModule } from 'src/modules/shared/components/label/label.module';
import { StoryComponent } from '../components/story/story.component';
import { TableModule } from 'src/modules/shared/components/table/table.module';
import { LinkModule } from 'src/modules/shared/components/link/link.module';

@NgModule({
  imports: [
    SharedModule,
    InfoCardModule,
    ButtonModule,
    LabelModule,
    TableModule,
    LinkModule
  ],
  declarations: [
    MainComponent,
    StoryComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {}
