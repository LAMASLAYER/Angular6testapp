import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Player} from '../models/player';
import {Properties} from '../utils/properties';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}


  public getChar(id) {
    return this.http.get(Properties.server + '/characters/player_id/' + id);
  }

  public getRaceById(id) {
    return this.http.get (Properties.server + '/races/race_id/' + id);
  }

  public getRaceByName(name) {
    return this.http.get (Properties.server + '/races/name/' + name);
  }

  public getRaces() {
    return this.http.get (Properties.server + '/races/all');
  }


  public getPlayer(id) {
    return this.http.get (Properties.server + '/players/' + id);
  }

}
