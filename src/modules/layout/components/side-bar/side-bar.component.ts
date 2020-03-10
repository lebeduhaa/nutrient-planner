import { Component } from '@angular/core';
import { APP } from 'src/app/constants';

@Component({
  selector: 'app-side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrls: ['side-bar.component.scss']
})
export class SideBarComponent {

  public menuItems = APP.menuItems;

}
