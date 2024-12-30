import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslandsPageRoutingModule } from './dinagat-islands-routing.module';

import { DinagatIslandsPage } from './dinagat-islands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslandsPageRoutingModule
  ],
  declarations: [DinagatIslandsPage]
})
export class DinagatIslandsPageModule {}
