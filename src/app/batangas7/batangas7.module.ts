import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Batangas7PageRoutingModule } from './batangas7-routing.module';

import { Batangas7Page } from './batangas7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Batangas7PageRoutingModule
  ],
  declarations: [Batangas7Page]
})
export class Batangas7PageModule {}
