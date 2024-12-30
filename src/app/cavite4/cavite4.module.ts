import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cavite4PageRoutingModule } from './cavite4-routing.module';

import { Cavite4Page } from './cavite4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cavite4PageRoutingModule
  ],
  declarations: [Cavite4Page]
})
export class Cavite4PageModule {}
