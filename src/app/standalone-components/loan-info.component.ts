import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-info',
  template: `<div>Información del préstamo: {{ loanInfo }}</div>`,
  standalone: true
})
export class LoanInfoComponent {
  loanInfo = 'Detalles del préstamo';
}