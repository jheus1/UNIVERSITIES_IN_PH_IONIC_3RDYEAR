import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulacanPageRoutingModule } from './bulacan-routing.module';

import { BulacanPage } from './bulacan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulacanPageRoutingModule
  ],
  declarations: [BulacanPage]
})
export class BulacanPageModule {}
