import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Batangas6PageRoutingModule } from './batangas6-routing.module';

import { Batangas6Page } from './batangas6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Batangas6PageRoutingModule
  ],
  declarations: [Batangas6Page]
})
export class Batangas6PageModule {}
