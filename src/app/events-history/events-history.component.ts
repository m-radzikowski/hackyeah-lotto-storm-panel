import {Component, OnInit} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Winner} from '../model/winner.type';

@Component({
  selector: 'app-events-history',
  templateUrl: './events-history.component.html',
  styleUrls: ['./events-history.component.css']
})
export class EventsHistoryComponent implements OnInit {

  private _data: Winner[] = [];

  constructor(private websocket: WebsocketService) {
  }

  ngOnInit() {
    this.websocket.getWinners().subscribe(winner => {
      this._data.push(winner);
    });
  }

  get data() {
    return this._data.reverse();
  }

}
