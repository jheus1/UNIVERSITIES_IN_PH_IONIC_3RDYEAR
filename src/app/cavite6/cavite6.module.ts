import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cavite6PageRoutingModule } from './cavite6-routing.module';

import { Cavite6Page } from './cavite6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cavite6PageRoutingModule
  ],
  declarations: [Cavite6Page]
})
export class Cavite6PageModule {}
