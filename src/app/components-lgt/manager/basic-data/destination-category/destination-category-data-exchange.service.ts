import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DestinationCategoryDataExchangeService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  private viewComeBackFromCancelEditView = new BehaviorSubject(false);
  currentStatusOfViewComeBackFromCancelEditView = this.viewComeBackFromCancelEditView.asObservable();

  changeStatusOfViewComeBackFromCancelEditView(status: boolean) {
    this.viewComeBackFromCancelEditView.next(status);
  }

  //
  private messageFromCancel = new BehaviorSubject(false);

  currentMessageFromCancel = this.messageFromCancel.asObservable();

  changeMessageFromCancel(status: boolean) {
    this.messageFromCancel.next(status);
  }
}
