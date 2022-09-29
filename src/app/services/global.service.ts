import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    public http: HttpClient
  ) { }

  get() {
    return this.http.get('...');
  }

  put( data: any ) {
    return this.http.post('...', data );
  }

  delete( id: string ) {
    return this.http.delete('...' );
  }

}
