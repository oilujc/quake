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
  budgets : any[]
  artistMaxAmount: number = 0
  earnings: number = 0

  constructor(private  fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      payment_method: ['0', Validators.required],
      budget: ['0', Validators.required],
      fee: ['0' , Validators.required],
      artist: ['0', Validators.required],
      amount: ['5', Validators.required],
      agent: ['30', Validators.required],
      admin: ['0', Validators.required],
      quake: ['0', Validators.required],
      subtotal: ['50', Validators.required],
      total: ['100', Validators.required]
    })

    this.paymentMethods = [
      {name: 'Paypal', value: '0'},
      {name: 'Fiverr', value: '1'}
    ]

    this.budgets = [
      {name: 'Dynamic', value: '0'},
      {name: 'Static', value: '1'}
    ]

    this.artists = [
      {name: 'Oscarina', value: '0'},
      {name: 'Rosmary', value: '1'}
    ]

    this.changePaymentMethod(this.fbc.payment_method.value)
    this.changeCheckbox(this.fbc.budget.value)

  }

  get fbc() {
    return this.invoiceForm.controls
  }

  changeCheckbox(value) {
    if (value === '0') {

      this.fbc.fee.disable()
      this.fbc.agent.enable()
      this.fbc.amount.enable()
      this.fbc.admin.disable()
      this.fbc.quake.disable()
      this.fbc.subtotal.disable()
      this.fbc.total.disable()

    } else if (value === '1') {

      this.fbc.fee.disable()
      this.fbc.agent.enable()
      this.fbc.total.enable()
      this.fbc.agent.disable()
      this.fbc.admin.disable()
      this.fbc.quake.disable()
      this.fbc.subtotal.disable()

    }
    this.changePaymentMethod(this.fbc.payment_method.value)
  }

  changePaymentMethod(value) {
    
    var budget = this.fbc.budget.value

    if (budget === '1') {
      let total = this.fbc.total.value
      this.artistMaxAmount = total * 0.5
    }

    if (value === '1' && (budget === '0' || budget === '1')) {
      console.log(value)

      let total = this.fbc.total.value
      this.fbc.fee.setValue(total * 0.2)

    } else if (value === '0' && budget === '0') {
      console.log(value)

      let subtotal = this.fbc.subtotal.value
      let total = this.fbc.total.value
      let agent = this.fbc.agent.value
      let amount = this.fbc.amount.value

      let admin = agent * 0.7
      let quake = agent * 0.3

      this.earnings = Number(agent) + Number(admin) + Number(quake)
      console.log(Number(this.earnings))

      subtotal = Number(this.earnings) + Number(amount)

      total = (subtotal + 0.3) / 0.946

      let fee = total - subtotal

      this.fbc.admin.setValue(admin.toFixed(2))
      this.fbc.quake.setValue(quake.toFixed(2))
      this.fbc.subtotal.setValue(subtotal.toFixed(2))
      this.fbc.total.setValue(total.toFixed(2))
      this.fbc.fee.setValue(fee.toFixed(2))

    } else if (value === '0' && budget === '1') {
      let total = this.fbc.total.value

      total = (total * 0.054) + 0.3 

      this.fbc.fee.setValue(total)
    } 
  }

}
