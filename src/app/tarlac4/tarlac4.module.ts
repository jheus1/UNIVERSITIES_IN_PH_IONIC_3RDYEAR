import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tarlac4PageRoutingModule } from './tarlac4-routing.module';

import { Tarlac4Page } from './tarlac4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tarlac4PageRoutingModule
  ],
  declarations: [Tarlac4Page]
})
export class Tarlac4PageModule {}
