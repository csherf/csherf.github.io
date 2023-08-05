import { Component, Inject, Input, inject } from '@angular/core';
import {CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,} from '@angular/cdk/drag-drop';
import { Observable, Subscription } from 'rxjs';
import { PlayerService } from '../../services/player/player.service';




@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],



})
export class PlayerComponent {
  private srvP: PlayerService = inject(PlayerService);

  
  @Input() player: string = "";

  deck: string[] = [];
  hand: string[] = [];
  playing: string[] = []
  discard: string[] = []
  trash: string[] = []

  subscribers: Subscription[] = [];


  constructor(){
    
    this.subscribers.push(this.srvP.getDeck().subscribe( d => {
        this.deck = d
      }
    ));
    this.subscribers.push(this.srvP.getHand().subscribe( d => {
      this.hand = d
    }
  ));
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log("drop")
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("move")

    } else {
      console.log("transer")

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  draw(){
    this.srvP.draw(1)
  }
}
