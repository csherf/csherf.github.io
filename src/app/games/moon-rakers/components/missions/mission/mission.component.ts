import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {
  @Input() mission: {id: number, path: string};

  constructor(){
    this.mission = {id: 0, path:"obj/"}
  }
}
