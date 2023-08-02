import { Injectable, inject } from '@angular/core';
import { Iplayer } from '../../interfaces/Iplayer';
import { AngularFireDatabase, AngularFireObject} from '@angular/fire/compat/database';
import { Player } from '../../classes/Player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Iplayer[] = [];
  private db: AngularFireDatabase = inject(AngularFireDatabase);

  constructor() {

  }


  createPlayer(){
    let user = new Player("me")
    console.log(user)
    this.db.object("me").set(user);
   
  }

  getPlayerInfo(playerId: string){
    
  }

}
