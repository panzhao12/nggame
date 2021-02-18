import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { User } from '../user';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  users!: User[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.gameService.getUsers()
    .subscribe(users => { users.sort((a, b) => a.clicks - b.clicks);this.users = users; });
  }

}
