import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: '',
    redirectTo: 'invoice',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
