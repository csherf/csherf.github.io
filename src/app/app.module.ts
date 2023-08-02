import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';
import { MoonRakersComponent } from './games/moon-rakers/moon-rakers.component';
import { PlayerComponent } from './games/moon-rakers/components/player/player.component';
import { BoardComponent } from './games/moon-rakers/components/board/board.component';
import { ShopComponent } from './games/moon-rakers/components/shop/shop.component';
import { CrewComponent } from './games/moon-rakers/components/crew/crew.component';
import { ShipPartsComponent } from './games/moon-rakers/components/ship-parts/ship-parts.component';
import { LeaderBoardComponent } from './games/moon-rakers/components/leader-board/leader-board.component';
import { MissionsComponent } from './games/moon-rakers/components/missions/missions.component';
import { MissionComponent } from './games/moon-rakers/components/missions/mission/mission.component';
import { CardComponent } from './games/moon-rakers/components/card/card.component';
import { CrewmatesComponent } from './games/moon-rakers/components/crewmates/crewmates.component';
import { ShipPartComponent } from './games/moon-rakers/components/ship-parts/ship-part/ship-part.component';
import { CoinsComponent } from './games/moon-rakers/components/shop/coins/coins.component';
import { ObjectivesComponent } from './games/moon-rakers/components/objectives/objectives.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MoonRakersComponent,
    PlayerComponent,
    BoardComponent,
    ShopComponent,
    CrewComponent,
    ShipPartsComponent,
    LeaderBoardComponent,
    MissionsComponent,
    MissionComponent,
    CardComponent,
    CrewmatesComponent,
    ShipPartComponent,
    CoinsComponent,
    ObjectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
