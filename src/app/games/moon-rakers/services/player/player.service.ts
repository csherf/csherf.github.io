import { Injectable, inject } from '@angular/core';
import { Iplayer } from '../../interfaces/Iplayer';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Player } from '../../classes/Player';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { STARTER_DECK } from '../../interfaces/CARDS';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private db: AngularFireDatabase = inject(AngularFireDatabase);

  private players: Player[] = [new Player("p1")];
  private currentPlayer: number = 0;

  private bhsPlayer: BehaviorSubject<Player>;


  constructor() {
    this.players[0].setDefault();
    this.bhsPlayer = new BehaviorSubject(this.players[this.currentPlayer]);

  }

  createPlayer() {
    let user = new Player("me")
    console.log(user)
    this.db.object("me").set(user);
  }

  setPlayer(pID: number) {
    this.currentPlayer = pID;
    this.bhsPlayer = new BehaviorSubject(this.players[this.currentPlayer]);

  }

  getPlayerInfo(playerId: string) {

  }

  //GET Behavior Subjects as Observables to subscribe too 
  getBHSplayer(): Observable<Player> {
    return this.bhsPlayer;
  }

  draw(amount: number) {
    this.players[this.currentPlayer].draw(amount);
    this.bhsPlayer.next( this.players[this.currentPlayer])
  }

  //Shuffle the deck



  //Update classes and DB
  update(deck: string[], hand: string[], discard: string[], trash: string[], playing: string[]) {


  }




}
