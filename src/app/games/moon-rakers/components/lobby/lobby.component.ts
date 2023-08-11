import { Component, inject } from '@angular/core';
import { LobbyService } from '../../services/lobbies/lobby.service';
import { Lobby } from '../../classes/Lobbies';
import { SnapshotAction } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Players } from '../../classes/Players';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {
  private pserv: LobbyService = inject(LobbyService);

  lobbies: Lobby[] = [];
  currentLobby: Lobby = {key:"", data: {count:0, name:"", players: new Players()}};
  host: string = "";
  isHost: boolean = false;
  state: "creating" | "in-lobby" = "creating";


  constructor(){
    this.getLobbies();
  }

  getLobbies(){
    this.pserv.getLobbies().subscribe( data => {
      this.lobbies = data;
    });
  }

  create() {
    if (this.host != "") {
      this.state = "in-lobby"
      this.isHost = true
      this.pserv.createLobby(this.currentLobby.data.name, this.host)
    }
  }
  back(){
    this.state = "creating"
  }
  start() {
    
  }

  selectG(event:Lobby) {
    this.currentLobby = event;
    this.pserv.currentLobby = event;
    this.state = "in-lobby"
    console.log(event)
  }

  join(){
    this.pserv.joinLobby(this.currentLobby.key ? this.currentLobby.key:"" , this.host)
  }
}
