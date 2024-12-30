import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cavite2PageRoutingModule } from './cavite2-routing.module';

import { Cavite2Page } from './cavite2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cavite2PageRoutingModule
  ],
  declarations: [Cavite2Page]
})
export class Cavite2PageModule {}
