import { Directive, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OutComponent } from '../components/out/out.component';
import { APP } from 'src/app/constants';
import { SubjectService } from 'src/modules/shared/services/subject.service';

@Directive({
  selector: '[appOpenOut]'
})
export class OpenOutDirective {

  constructor(
    private dialog: MatDialog,
    private subjectService: SubjectService
  ) {}

  @HostListener('click')
  openOutDialog(): void {
    const dialogRef = this.dialog.open(OutComponent, {
      id: APP.dialogs.out,
      width: '330px'
    });

    this.emitBlurSubject(true);
    dialogRef.afterClosed()
      .subscribe(() => {
        this.emitBlurSubject(false);
      });
  }

  private emitBlurSubject(value: boolean): void {
    this.subjectService.emitSubject(APP.subjects.blur, value);
  }

}
