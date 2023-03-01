import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpPostService {

  private REST_API_SERVER_USER = 'http://randomuser.me/api/?results=';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient : HttpClient) { }


  public getCommentsUser(n : number = 1): Observable<any>{
    debugger;


    const url = this.REST_API_SERVER_USER + n;

    //const a = $(this.REST_API_SERVER_USER) + n;

    return this.httpClient.get<any>(url,this.httpOptions);

  }



}
