import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tarlac1PageRoutingModule } from './tarlac1-routing.module';

import { Tarlac1Page } from './tarlac1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tarlac1PageRoutingModule
  ],
  declarations: [Tarlac1Page]
})
export class Tarlac1PageModule {}
