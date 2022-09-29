import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.page.html',
  styleUrls: ['./private.page.scss'],
})
export class PrivatePage {

  public cats: any[] = [];

  constructor(
    public globalService: GlobalService
  ) { }

  checkCats(): void {
    if (this.cats.length > 0) {
      this.throwCats();
    } else {
      console.log('No hay gatos en la costa');
    }
  }

  private throwCats() {
    this.cats = [];
    this.globalService.delete('all', 'cats');
  }
}
