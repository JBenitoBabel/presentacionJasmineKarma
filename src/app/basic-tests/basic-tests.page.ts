import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-tests',
  templateUrl: './basic-tests.page.html',
  styleUrls: ['./basic-tests.page.scss'],
})
export class BasicTestsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // STRING

  getName(name:string) {
    return `Hello ${name}`;
  }

  // NUMBER

  addOne(number:number) {
    return number + 1;
  }

  // BOOLEAN

  existCat() {
    return true;
  }

  // Arrays

  getCats() {
    return ['Norte', 'Zan'];
  }
}
