import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { LobbyService } from '../../../services/lobbies/lobby.service';
import { Lobby } from '../../../classes/Lobbies';
import { Players } from '../../../classes/Players';

@Component({
  selector: 'app-lobbies',
  templateUrl: './lobbies.component.html',
  styleUrls: ['./lobbies.component.scss']
})
export class LobbiesComponent {
  private pserv: LobbyService = inject(LobbyService);

  @Input() lobby: Lobby = {key:"", data: {count:0, name:"", players: new Players()}};
  @Output() joinLobby = new EventEmitter<Lobby>();
  
  constructor(){
    this.loadPlayers();
  }

  loadPlayers(){

  }

  join(){
    this.joinLobby.emit(this.lobby)
  }
}
