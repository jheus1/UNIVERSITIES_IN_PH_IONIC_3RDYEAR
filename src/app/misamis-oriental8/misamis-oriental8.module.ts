import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOriental8PageRoutingModule } from './misamis-oriental8-routing.module';

import { MisamisOriental8Page } from './misamis-oriental8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOriental8PageRoutingModule
  ],
  declarations: [MisamisOriental8Page]
})
export class MisamisOriental8PageModule {}
