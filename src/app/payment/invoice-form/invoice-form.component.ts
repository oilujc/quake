import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm: FormGroup
  paymentMethods: any[]
  artists : any[]

  constructor(private  fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      payment_method: ['', Validators.required],
      fee: [{value: '', disabled: true} , Validators.required],
      artist: ['', Validators.required],
      amount: ['', Validators.required],
      agent: ['', Validators.required],
      admin: [{value: '', disabled: true}, Validators.required],
      quake: [{value: '', disabled: true}, Validators.required],
      subtotal: ['', Validators.required]
    })

    this.paymentMethods = [
      {name: 'Paypal', value: '0'},
      {name: 'Fiverr', value: '1'}
    ]

    this.artists = [
      {name: 'Oscarina', value: '0'},
      {name: 'Rosmary', value: '1'}
    ]
  }

}
