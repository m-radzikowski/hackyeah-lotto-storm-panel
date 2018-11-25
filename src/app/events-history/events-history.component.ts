import {Component, OnInit} from '@angular/core';
import {WebsocketService} from '../websocket.service';

@Component({
  selector: 'app-events-history',
  templateUrl: './events-history.component.html',
  styleUrls: ['./events-history.component.css']
})
export class EventsHistoryComponent implements OnInit {

  constructor(private websocket: WebsocketService) {
  }

  ngOnInit() {
    this.websocket.getStorms().subscribe(storms => {
      console.log(storms);
    });
  }

}
