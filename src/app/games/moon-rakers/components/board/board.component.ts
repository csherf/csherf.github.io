import { Component, inject } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  private service: GameService = inject(GameService);
  private pserv: PlayerService = inject(PlayerService);
  protected selected_player: number = 0;
  protected current_mission: number = 0;

  state: "player_selected" | "board" | "missions" = 'board'

  constructor() { }

  select(player: number){
    this.selected_player = player;
    this.pserv.setPlayer(player)
    this.state = this.state == 'player_selected' ? 'board' : 'player_selected'
    console.log(this.state)
    // this.service.createGame("gID1","test1", "me")
    // this.service.pushGame()
    // this.service.getPlayerInfo("me").subscribe(
    //   d => console.log(d)
    // )
  
    // this.pserv.createPlayer();
  }

  mission_selected(id:number){
    this.state = 'missions';
    this.current_mission = id
    console.log(id)
  }

  changeState(state:  "player_selected" | "board" | "missions"){
    this.state = state;
  }
}
