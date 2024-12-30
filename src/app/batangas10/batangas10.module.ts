import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Batangas10PageRoutingModule } from './batangas10-routing.module';

import { Batangas10Page } from './batangas10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Batangas10PageRoutingModule
  ],
  declarations: [Batangas10Page]
})
export class Batangas10PageModule {}
