import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Batangas1PageRoutingModule } from './batangas1-routing.module';

import { Batangas1Page } from './batangas1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Batangas1PageRoutingModule
  ],
  declarations: [Batangas1Page]
})
export class Batangas1PageModule {}
