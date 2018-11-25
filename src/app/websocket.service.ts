import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Storm} from './model/storm.type';
import {Winner} from './model/winner.type';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: WebSocket;

  private storms = new Subject<Storm[]>();
  private winners = new Subject<Winner>();

  constructor() {
    this.socket = new WebSocket('ws://localhost:90/storm?web');

    const self = this;
    this.socket.onmessage = function (event) {
      const data = JSON.parse(event.data);
      console.log(data);
      if (Array.isArray(data)) {
        self.storms.next(data);
      } else {
        self.winners.next(data);
      }
    };
  }

  getStorms(): Observable<Storm[]> {
    return this.storms.asObservable();
  }

  getWinners(): Observable<Winner> {
    return this.winners.asObservable();
  }
}
