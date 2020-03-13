import { Component } from '@angular/core';

import { PaymentsStory } from '../../../shared/models/payments-story.model';

@Component({
  selector: 'app-payments-story',
  templateUrl: 'payments-story.component.html',
  styleUrls: ['payments-story.component.scss']
})
export class PaymentsStoryComponent {

  public story: PaymentsStory[] = [
    { date: '26.02.2020', payment: 7580.50},
    { date: '26.02.2020', payment: 1020},
    { date: '26.02.2020', payment: 500},
    { date: '26.02.2020', payment: 7380.30},
    { date: '26.02.2020', payment: 11.540},
    { date: '26.02.2020', payment: 1250},
    { date: '26.02.2020', payment: 19590}
  ];

}
