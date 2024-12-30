import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tarlac5PageRoutingModule } from './tarlac5-routing.module';

import { Tarlac5Page } from './tarlac5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tarlac5PageRoutingModule
  ],
  declarations: [Tarlac5Page]
})
export class Tarlac5PageModule {}
