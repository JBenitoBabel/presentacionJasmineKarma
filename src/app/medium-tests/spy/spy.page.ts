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
    this.globalService.get()
          .subscribe( (result: any) => this.cats = result );
  }

  addCat() {
    const cat = { name: 'Zan' };

    this.globalService.put(cat)
          .subscribe(
            medicoDB => this.cats.push(medicoDB),
            err => this.messageError = err
          );
  }

  deleteCat(id: string) {
    const confirmar = confirm('¿Estas seguro que desea borrar este gato?');

    if ( confirmar ) {
      this.globalService.delete( id );
    }

  }

}
