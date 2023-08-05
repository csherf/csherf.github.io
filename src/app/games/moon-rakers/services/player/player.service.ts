import { Injectable, inject } from '@angular/core';
import { Iplayer } from '../../interfaces/Iplayer';
import { AngularFireDatabase, AngularFireObject} from '@angular/fire/compat/database';
import { Player } from '../../classes/Player';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { STARTER_DECK } from '../../interfaces/CARDS';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Iplayer[] = [];
  private db: AngularFireDatabase = inject(AngularFireDatabase);

  private deck: string[] = this.shuffle(STARTER_DECK);
  private hand: string[] = [];

  private bhsDeck: BehaviorSubject<string[]>;
  private bhsHand: BehaviorSubject<string[]>;


  constructor() {
    this.hand = this.deck.splice(-5)
    this.bhsDeck = new BehaviorSubject(this.deck);
    this.bhsHand = new BehaviorSubject(this.hand);

  }


  createPlayer(){
    let user = new Player("me")
    console.log(user)
    this.db.object("me").set(user);
  }

  getPlayerInfo(playerId: string){
    
  }

  getDeck(): Observable<string[]>{
    return this.bhsDeck;
  }

  getHand():Observable<string[]>{
    return this.bhsHand;
  }

  draw(amount: Number){
    this.hand.push(...this.deck.splice(-amount))
    this.bhsDeck.next(this.deck)
    this.bhsHand.next(this.hand)

  }

  shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
}
