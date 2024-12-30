import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Batangas9PageRoutingModule } from './batangas9-routing.module';

import { Batangas9Page } from './batangas9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Batangas9PageRoutingModule
  ],
  declarations: [Batangas9Page]
})
export class Batangas9PageModule {}
