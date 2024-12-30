import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cavite10PageRoutingModule } from './cavite10-routing.module';

import { Cavite10Page } from './cavite10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cavite10PageRoutingModule
  ],
  declarations: [Cavite10Page]
})
export class Cavite10PageModule {}
