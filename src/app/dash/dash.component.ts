import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/userService';
import {Player} from '../models/player';
import {Router} from '@angular/router';
import {Character} from '../models/character';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {


  public chars: Object;
  public name: string;
  public character: object;
  public c: Array<any>;
  public races: object;
  public size: string;
  public raceSize: string;
  public newChar: Character

  constructor(private router: Router, private userService: UserService) {
  }


  ngOnInit() {
    this.userService.getChar(1).subscribe(
      data => {
        this.chars = data;
        console.log(data);
        this.name = this.chars[0].name;
      }
    );
    this.userService.getRaces().subscribe(
      races => {
        this.races = races;
      }
    );
    this.raceSize = 'M';
    this.newChar = new Character();
    this.newChar['size'] = this.raceSize;
    this.newChar['race'] = 'Humain';
  }

  public buildChar(charId: number) {
    charId = charId - 1;
    this.character = new Object();
    this.c = [];
    this.character['name'] = this.chars[charId]['name'];
    this.character['age'] = this.chars[charId]['age'];
    this.character['alignment'] = this.chars[charId]['alignment'];
    this.character['charId'] = this.chars[charId]['charId'];
    this.character['creationDate'] = this.chars[charId]['creationDate'];
    this.character['deity'] = this.chars[charId]['deity'];
    if (this.character['deity'] == null) {
      this.character['deity'] = '/';
    }
    this.character['gender'] = this.chars[charId]['gender'];
    this.character['level'] = this.chars[charId]['level'];
    this.character['height'] = this.chars[charId]['height'];
    this.character['heightUnit'] = this.chars[charId]['heightUnit'];
    this.character['weight'] = this.chars[charId]['weight'];
    this.character['weightUnit'] = this.chars[charId]['weightUnit'];
    this.character['creationDate'] = this.chars[charId]['creationDate'];
    this.userService.getRaceById(this.chars[charId]['raceId']).subscribe(
      race => {
        this.character['race'] = race['name'];
        this.character['size'] = race['size'];
      }
    );
    this.userService.getPlayer(this.chars[charId]['playerId']).subscribe(
      player => {
        this.character['player'] = player['name'];
      }
    );
    this.c.push(this.character);
    console.log(this.c);
    console.log(this.character);
  }

  public getName(name): void {
    this.name = name;
  }

  public getRaceName(raceName): void {
    this.setSize(raceName);
  }

  public setSize(raceName) {
    this.userService.getRaceByName(raceName).subscribe(
      race => {
        this.raceSize = race['size'];
      }
    );
  }

  public submit(newChar: Character) {
    console.log(newChar);
  }

}
