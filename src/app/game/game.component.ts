import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { User } from '../user';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  luckyNum!: string;
  genNum!: string;
  users!: User[];

  constructor(private gameService: GameService) { }

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
    if (this.genNum === this.luckyNum) { setTimeout(()=>this.isLuckyNum(), 0); }
  }

  isLuckyNum(): void {
    let name = window.prompt(
      `Bingo! ${this.gameService.clicks > 1 ? this.gameService.clicks
        + ' clicks!' : this.gameService.clicks + ' click!'} Please input your name:`) + '';
    this.save(name, this.gameService.clicks);
    this.gameService.clicks = 0;
    this.genNum = '?';
  }

  save(name: string, clicks: number): void {
    name = name.trim();
    if (!name || name === 'null') { return; }
    this.gameService.saveRank({ name, clicks } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

}
