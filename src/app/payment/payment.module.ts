import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [InvoiceComponent, InvoiceFormComponent, InvoiceListComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    InvoiceFormComponent,
    InvoiceListComponent
  ]
})
export class PaymentModule { }
