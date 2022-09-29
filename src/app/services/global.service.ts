import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    public http: HttpClient
  ) { }

  get(info: string) {
    return this.http.get('...').pipe(
      map(resp => resp[info]))
  }

  post( data: any, info: string ) {
    return this.http.post('...', data ).pipe(
      map(resp => resp[info]));
  }

  delete( id: string, info: string ) {
    return this.http.delete('...' ).pipe(
      map(resp => resp[info]));
  }

}
