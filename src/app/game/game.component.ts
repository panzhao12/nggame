import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { User } from '../user';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  luckyNum!: string; //TODO: any problem with definite assignment assertion?
  genNum!: string;
  users!: User[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.luckyNum = this.gameService.luckyNum;
    this.genNum = this.gameService.genNum;
    this.getUsers();
  }

  getUsers(): void {
    this.gameService.getUsers()
    .subscribe(users => this.users = users);
  }

  generateNum(): void {
    this.genNum = this.gameService.generateNum();
    if(this.genNum === this.luckyNum) {this.isLuckyNum();}
  }

  isLuckyNum(): void {
    let name = window.prompt(
      `bingo! ${this.gameService.click > 1? this.gameService.click 
        +' clicks!' : this.gameService.click + ' click!'} Input your name:`) + ''; //TODO "12" should show before pop up window
    this.save(name, this.gameService.click);
    this.gameService.click = 0;
  }

  save(name: string, click: number): void {
    name = name.trim();
    if (!name || name === 'null') { return; }
    this.gameService.saveRank({ name, click } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

}
