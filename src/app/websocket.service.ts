import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Storm} from './model/storm.type';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: WebSocket;

  private storms = new Subject<Storm[]>();

  constructor() {
    console.log('connecting websocket');
    this.socket = new WebSocket('ws://localhost:90/storm?web');

    const self = this;
    this.socket.onmessage = function (event) {
      const data = JSON.parse(event.data) as Storm[];
      self.storms.next(data);
    };
  }

  getStorms(): Observable<Storm[]> {
    return this.storms.asObservable();
  }
}
