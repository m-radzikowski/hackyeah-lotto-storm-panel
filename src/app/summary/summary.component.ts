import {Component, OnInit} from '@angular/core';
import {WebsocketService} from '../websocket.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  prizeSum = 0;
  profitSum = 0;

  constructor(private websocket: WebsocketService) {
  }

  ngOnInit() {
    this.websocket.getWinners().subscribe(winner => {
      this.prizeSum += winner.storm.max / 2;
      this.profitSum += winner.storm.max / 2;
    });
  }

}
