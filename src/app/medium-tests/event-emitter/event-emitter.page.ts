import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.page.html',
  styleUrls: ['./event-emitter.page.scss'],
})
export class Feeder {

  food: number;
  foodChange = new EventEmitter<number>();

  constructor() { 
    this.food = 200;
  }

  eat( amount: number) {
    if (amount == this.food) {
      this.food = 0;
    } else {
      this.food -= amount;
    }
    this.foodChange.emit(this.food);
  }

}
