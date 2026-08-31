import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanStateService {
  private loanStateSubject = new BehaviorSubject<string>('');
  loanState$ = this.loanStateSubject.asObservable();

  updateLoanState(state: string) {
    this.loanStateSubject.next(state);
  }
}