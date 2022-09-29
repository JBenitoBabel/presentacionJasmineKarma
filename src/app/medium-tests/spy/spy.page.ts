import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.page.html',
  styleUrls: ['./spy.page.scss'],
})
export class SpyPage implements OnInit {

  public cats: any[] = [];
  public messageError: string;

  constructor(
    public globalService: GlobalService
  ) { }

  ngOnInit() {
    this.globalService.get('cats')
          .subscribe( result => this.cats = result );
  }

  addCats() {
    const cat = { name: 'Zan' };

    this.globalService.post(cat, 'cats')
          .subscribe(
            catDB => this.cats.push(catDB),
            err => this.messageError = err
          );
  }

  deleteCat(id: string) {
    const confirmar = confirm('¿Estas seguro que desea borrar este gato?');

    if ( confirmar ) {
      this.globalService.delete(id,'cats');
    }

  }

}
