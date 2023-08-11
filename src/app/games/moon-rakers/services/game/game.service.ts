import { Injectable, inject } from '@angular/core';
import { AngularFireDatabase, AngularFireObject} from '@angular/fire/compat/database';
import { Game } from '../../classes/Game';
import { Iplayer } from '../../interfaces/Iplayer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private db: AngularFireDatabase = inject(AngularFireDatabase);
  private game: Game;


  constructor() { 
    this.game = new Game("", "", "me");
  }

  createGame(id:string, gameName: string, playerID: string) {
   this.game = new Game(id, gameName, playerID);
  }

  addPlayer(player: string){
    this.game.addPlayers(player)
 
  }

  pushGame(){
    let call = this.db.object(this.game.id.toString()).set({
      "name": this.game.name,
      "players": this.game.players
    })
  }

  getPlayerInfo(id: string): Observable<Iplayer|null>{
    return this.db.object<Iplayer>(id).valueChanges();
  }

}
