import { Component, OnInit } from '@angular/core';

import { SubjectService } from 'src/modules/shared/services/subject.service';
import { APP } from 'src/app/constants';

@Component({
  selector: 'app-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss']
})
export class RootComponent implements OnInit {

  public blur: boolean;

  constructor(
    private subjectService: SubjectService
  ) {}

  ngOnInit() {
    this.subscribeToBlurSubject();
  }

  private subscribeToBlurSubject(): void {
    this.subjectService.getSubject(APP.subjects.blur)
      .subscribe(blur => this.blur = blur);
  }

}
