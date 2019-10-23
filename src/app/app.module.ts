import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeaponComponent } from './weapon/weapon.component';
import { EnhancementService } from './enhancement.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule }     from './app-routing.module';
import { MassSimulationComponent } from './mass-simulation/mass-simulation.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, WeaponComponent, MessagesComponent, MassSimulationComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EnhancementService, MessageService]
})
export class AppModule { }
