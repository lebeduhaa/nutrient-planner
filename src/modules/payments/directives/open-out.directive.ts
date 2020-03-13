import { Directive, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SubjectService } from 'src/modules/shared/services/subject.service';
import { OutPaymentsComponent } from '../components/out-payments/out-payments.component';
import { APP } from 'src/app/constants';

@Directive({
  selector: '[appOpenOut]'
})
export class OpenOutPaymentsDirective {

  constructor(
    private dialog: MatDialog,
    private subjectService: SubjectService
  ) {}

  @HostListener('click')
  openOutDialog(): void {
    const dialogRef = this.dialog.open(OutPaymentsComponent, {
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
