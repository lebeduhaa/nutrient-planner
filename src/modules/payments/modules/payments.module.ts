import { NgModule } from '@angular/core';

import { SharedModule } from 'src/modules/shared/modules/shared.module';
import { PaymentsStoryComponent } from '../components/payments-story/payments-story.component';
import { PaymentsComponent } from '../components/payments/payments.component';
import { InfoCardModule } from 'src/modules/shared/components/info-card/info-card.module';
import { LabelModule } from 'src/modules/shared/components/label/label.module';
import { ButtonModule } from 'src/modules/shared/components/button/button.module';
import { OutPaymentsComponent } from '../components/out-payments/out-payments.component';
import { PopupModule } from 'src/modules/shared/components/popup/popup.module';
import { OpenOutPaymentsDirective } from '../directives/open-out.directive';
import { TableModule } from 'src/modules/shared/components/table/table.module';
import { LinkModule } from 'src/modules/shared/components/link/link.module';

@NgModule({
  imports: [
    SharedModule,
    InfoCardModule,
    LabelModule,
    ButtonModule,
    PopupModule,
    TableModule,
    LinkModule
  ],
  declarations: [
    PaymentsComponent,
    PaymentsStoryComponent,
    OutPaymentsComponent,
    OpenOutPaymentsDirective
  ],
  entryComponents: [
    OutPaymentsComponent
  ],
  exports: [
    PaymentsComponent
  ]
})
export class PaymentsModule {}
