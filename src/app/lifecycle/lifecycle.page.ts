import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.page.html',
  styleUrls: ['./lifecycle.page.scss'],
})

export class Cat {

  food: number;

  constructor() { 
    this.food = 200;
  }

  eat( amount: number) {
    if (amount == this.food) {
      this.food = 0;
    } else {
      this.food -= amount;
    }
    return this.food;
  }

}