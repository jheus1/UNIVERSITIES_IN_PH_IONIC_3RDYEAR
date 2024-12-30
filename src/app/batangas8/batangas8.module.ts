import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Batangas8PageRoutingModule } from './batangas8-routing.module';

import { Batangas8Page } from './batangas8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Batangas8PageRoutingModule
  ],
  declarations: [Batangas8Page]
})
export class Batangas8PageModule {}
