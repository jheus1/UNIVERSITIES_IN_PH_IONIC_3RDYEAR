import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinagatIslands5PageRoutingModule } from './dinagat-islands5-routing.module';

import { DinagatIslands5Page } from './dinagat-islands5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinagatIslands5PageRoutingModule
  ],
  declarations: [DinagatIslands5Page]
})
export class DinagatIslands5PageModule {}
