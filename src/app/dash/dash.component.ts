import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {UserService} from "../services/userService";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  private user: User = new User();

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private userService: UserService) {

  }

  createUser(): void {
    this.user.username = 'autoincrementtest';
    this.user.password = 'autoincrementtest';
    this.user.creation_date = new Date();
    this.user.credentials = 0;
    this.userService.createUser(this.user)
      .subscribe( data => {
        alert("User created successfully.");
      });

  };
  public click() {
    this.user.username = 'post';
    this.user.password = 'post';
    this.user.creation_date = new Date();
    this.user.credentials = 0;
    console.log(this.user);
    this.userService.createUser(this.user).subscribe()
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
