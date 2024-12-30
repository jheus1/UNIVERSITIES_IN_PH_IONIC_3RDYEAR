import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Batangas4PageRoutingModule } from './batangas4-routing.module';

import { Batangas4Page } from './batangas4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Batangas4PageRoutingModule
  ],
  declarations: [Batangas4Page]
})
export class Batangas4PageModule {}
