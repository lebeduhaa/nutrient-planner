import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectsMap = new Map<string, Subject<any>>();

  public getSubject(subjectName: string): Subject<any> {
    this.createIfNotExist(subjectName);

    return this.subjectsMap.get(subjectName);
  }

  public emitSubject(subjectName: string, value: any): void {
    this.createIfNotExist(subjectName);

    this.subjectsMap.get(subjectName).next(value);
  }

  private createIfNotExist(subjectName: string): void {
    const subject = this.subjectsMap.get(subjectName);

    if (!subject) {
      this.subjectsMap.set(subjectName, new Subject());
    }
  }

}
