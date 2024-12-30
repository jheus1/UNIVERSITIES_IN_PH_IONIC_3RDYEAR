import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizal7PageRoutingModule } from './rizal7-routing.module';

import { Rizal7Page } from './rizal7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizal7PageRoutingModule
  ],
  declarations: [Rizal7Page]
})
export class Rizal7PageModule {}
