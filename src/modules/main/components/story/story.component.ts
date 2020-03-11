import { Component } from '@angular/core';

import { Story } from 'src/modules/shared/models/story.model';

@Component({
  selector: 'app-story',
  templateUrl: 'story.component.html',
  styleUrls: ['story.component.scss']
})
export class StoryComponent {

  public story: Story[] = [
    { clientId: 255, activationDate: '26.02.2020', payment: 7580.50, reward: 75.80 },
    { clientId: 1525, activationDate: '26.02.2020', payment: 1020, reward: 10.10 },
    { clientId: 13, activationDate: '26.02.2020', payment: 500, reward: 5 },
    { clientId: 758, activationDate: '26.02.2020', payment: 7380.30, reward: 73.80 },
    { clientId: 669, activationDate: '26.02.2020', payment: 11.540, reward: 11.5 },
    { clientId: 1584, activationDate: '26.02.2020', payment: 1250, reward: 12.5 },
    { clientId: 110, activationDate: '26.02.2020', payment: 19590, reward: 195.54 }
  ]

}
