import { Injectable, inject } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, SnapshotAction } from '@angular/fire/compat/database';
import { Game } from '../../classes/Game';
import { Iplayer } from '../../interfaces/Iplayer';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lobby } from '../../classes/Lobbies';
import { Player } from '../../classes/Player';
import { Players } from '../../classes/Players';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  private dbSrvc: AngularFireDatabase = inject(AngularFireDatabase);
  lobbies$: BehaviorSubject<Lobby[]>;
  lobbies: any[] = [];

  currentLobby: Lobby = new Lobby()


  constructor() {
    this.lobbies$ = new BehaviorSubject<Lobby[]>([])
    this.dbSrvc.list('lobbies').snapshotChanges().subscribe(snapshots => {
      this.lobbies = snapshots.map(snapshot => {
        return {
          key: snapshot.key,
          data: snapshot.payload.val()
        };
      });
      this.lobbies$.next(this.lobbies);
      console.log("Reciev snapshot change",this.lobbies)
    });


  }

  joinLobby(key: string, player: string) {
    let cplayer: string = "p" + (this.currentLobby.data.count + 1)
    this.dbSrvc.list('lobbies/' + key + "/players").set(cplayer, player)
    
  }


  getLobbies(): Observable<Lobby[]> {
    return this.lobbies$;
  }

  createLobby(lobbyName: string, host: string) {
    let key = this.dbSrvc.list('lobbies').push(
      {
        count: 1,
        name: lobbyName,
        players: new Players(host)
      }).key;

    this.currentLobby = new Lobby(key? key:"", {
      count: 1,
      name: lobbyName,
      players: new Players(host)
    });

  }





}
