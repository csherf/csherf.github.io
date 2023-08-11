import { Component, Inject, Input, inject } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Observable, Subscription } from 'rxjs';
import { PlayerService } from '../../services/player/player.service';
import { Player } from '../../classes/Player';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],



})
export class PlayerComponent {
  private srvP: PlayerService = inject(PlayerService);


  player: Player = new Player("");


  subscribers: Subscription[] = [];


  constructor() {

    this.subscribers.push(this.srvP.getBHSplayer().subscribe(d => {
      this.player = d;
      
    }
    ));

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);


    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.container.data.length,
      );
      // this.srvP.update(this.deck, this.hand, this.discard, this.trash, this.playing)

    }
  }

  draw() {
    console.log(this.player.deck)
    this.srvP.draw(1)
  }

}
