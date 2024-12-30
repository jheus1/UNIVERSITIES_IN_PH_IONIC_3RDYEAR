import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cavite8PageRoutingModule } from './cavite8-routing.module';

import { Cavite8Page } from './cavite8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cavite8PageRoutingModule
  ],
  declarations: [Cavite8Page]
})
export class Cavite8PageModule {}
