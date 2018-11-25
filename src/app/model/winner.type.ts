import {Storm} from './storm.type';

export interface Winner {
  storm: Storm;
  ticket: Ticket;
}

export interface Ticket {
  userId: number;
  lat: number;
  lng: number;
}
