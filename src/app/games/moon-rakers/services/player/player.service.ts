import { Injectable } from '@angular/core';
import { player } from './player';
import { AngularFireDatabase, AngularFireObject} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  data: AngularFireObject<any> = this.db.object('players');

  players: player[] = [];

  constructor(private db: AngularFireDatabase) {


   }

  createPlayer(){
    this.data.set({ players: ['p1','p2']});
  }
}
