import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestcountService {

  constructor(private HttpClient: HttpClient) {}
  public getRequestCount(): Observable<number>{
    return this.HttpClient.get<number>('http://localhost:8080/requests/count')
    }

}
