import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { id: 1, name: 'Olga', click: 1 },
      { id: 2, name: 'Pan', click: 12 }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}