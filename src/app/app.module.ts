import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoanInfoComponent } from './standalone-components/loan-info.component';

@NgModule({
  declarations: [LoanInfoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [LoanInfoComponent]
})
export class AppModule { }