import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent {
  @Output() mission_clicked = new EventEmitter<number>();
  missions: string[] = ["mission","mission","mission","mission","mission","mission","mission","mission"];
  
  mission_selected(mission_id: number) {
    console.log("in mission comp")
    this.mission_clicked.emit(mission_id);
  }
}
