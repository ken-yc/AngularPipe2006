import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ROCPService {
  private url:string = 'http://ec2-54-177-109-222.us-west-1.compute.amazonaws.com:8080/todos';
  constructor(private httpCli: HttpClient) {}

  postTodo(todoForm): Observable<string[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }) 
    };

    return this.httpCli.post<string[]>(this.url, todoForm, httpHead);
  }

  getTodos(): Observable<string[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }) 
    };

    return this.httpCli.get<string[]>(this.url, httpHead);
  }
}
