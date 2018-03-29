import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private basepathURL = 'http://localhost:2000/';

  constructor(
    private http: Http,
    private router: Router) {}
  getChat(): Observable<any> {
    return this.http.get(this.basepathURL, { headers: this.headers })
      .map((response: Response) => { return response.json(); })
      .catch((error: any) => { return this.handleError(error); });
  }
  createChat(chat: any) {
    return this.http.post(this.basepathURL, chat, { headers: this.headers })
      .map((response: Response) => response.json())
      .catch((error: any) => { return this.handleError(error); });
  }
  updateChat(chat: any) {
    return this.http.put(this.basepathURL, chat, { headers: this.headers })
      .map((response: Response) => response.json())
      .catch((error: any) => { return this.handleError(error); });
  }
  private handleError(error: any): any {
    if (error.status === 401) {
      this.router.navigate(['/auth/login']);
    }
    return Observable.throw(error.json().error || 'Server error');
  }
}
