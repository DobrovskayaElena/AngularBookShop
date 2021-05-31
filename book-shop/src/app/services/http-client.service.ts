import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { delay, tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

//  getData(){
 //   return this.http.get('../components/user/user.json')
//}

getData(): Observable<{userList :User[]}> {
  return this.http.get<{userList: User[]}>('../components/user/user.json')
}

getApiError(): Observable<any> {
  // getting an error after 1s
  return of(0).pipe(
    delay(1000),
    tap(() => {throw 'A random error'})
  )
}
}
