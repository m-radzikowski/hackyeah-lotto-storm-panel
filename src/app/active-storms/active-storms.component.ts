import {Component, OnInit} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Storm} from '../model/storm.type';

@Component({
  selector: 'app-active-storms',
  templateUrl: './active-storms.component.html',
  styleUrls: ['./active-storms.component.css']
})
export class ActiveStormsComponent implements OnInit {

  displayedColumns: string[] = ['lat', 'lng', 'limit', 'pool', 'profit'];

  dataSource: Storm[] = [];

  constructor(private websocket: WebsocketService) {
  }

  ngOnInit() {
    this.websocket.getStorms().subscribe(storms => {
      this.dataSource = storms;
    });
  }

}
