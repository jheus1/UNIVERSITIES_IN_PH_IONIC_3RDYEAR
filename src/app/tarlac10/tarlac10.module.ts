import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tarlac10PageRoutingModule } from './tarlac10-routing.module';

import { Tarlac10Page } from './tarlac10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tarlac10PageRoutingModule
  ],
  declarations: [Tarlac10Page]
})
export class Tarlac10PageModule {}
