import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  completeShippingAddress = false;
  completeBillingAddress = false;

  constructor() { }

  ngOnInit(): void {
  }

  showBillingAddress() {
    this.completeShippingAddress = true;
  }

  showPlaceOrder() {
    this.completeBillingAddress = true;
  }

}
