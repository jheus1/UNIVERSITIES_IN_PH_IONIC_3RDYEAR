import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tarlac9PageRoutingModule } from './tarlac9-routing.module';

import { Tarlac9Page } from './tarlac9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tarlac9PageRoutingModule
  ],
  declarations: [Tarlac9Page]
})
export class Tarlac9PageModule {}
