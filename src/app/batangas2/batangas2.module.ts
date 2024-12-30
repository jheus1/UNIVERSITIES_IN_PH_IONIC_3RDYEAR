import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Batangas2PageRoutingModule } from './batangas2-routing.module';

import { Batangas2Page } from './batangas2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Batangas2PageRoutingModule
  ],
  declarations: [Batangas2Page]
})
export class Batangas2PageModule {}
