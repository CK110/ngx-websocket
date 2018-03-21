import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WebsocketService {

  ws: WebSocket;

  message$ = new BehaviorSubject<any>(null);

  constructor() {
    this.ws = new WebSocket('ws://123.207.167.163:9010/ajaxchattest');
    console.log(this.ws);

    this.ws.addEventListener('message', (event) => {
      this.message$.next(event);
    });

    this.ws.addEventListener('open', (event) => {
      console.log(event);
    });
  }

  send(data: any) {
    this.ws.send(data);
  }

  getMessage(): Observable<any> {
    return this.message$.asObservable();
  }

  close() {
    this.ws.close();
  }
}
