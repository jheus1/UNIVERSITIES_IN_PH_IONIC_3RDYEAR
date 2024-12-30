import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tarlac8PageRoutingModule } from './tarlac8-routing.module';

import { Tarlac8Page } from './tarlac8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tarlac8PageRoutingModule
  ],
  declarations: [Tarlac8Page]
})
export class Tarlac8PageModule {}
