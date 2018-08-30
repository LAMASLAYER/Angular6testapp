import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Properties} from '../utils/properties';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  public getImgs() {
    return this.http.get('https://res.cloudinary.com/fleurslesale/image/fetch');
  }

  public getUsers() {
    return this.http.get<User[]>(Properties.server + '/users/getUsers');
  }

  public deleteUser(user) {
    return this.http.delete(Properties.server + '/' + user.id);
  }

  public createUser(user) {
    console.log(user);
    return this.http.post<User>(Properties.server + '/users/post', user);
  }
}
