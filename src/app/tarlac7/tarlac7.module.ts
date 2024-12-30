import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tarlac7PageRoutingModule } from './tarlac7-routing.module';

import { Tarlac7Page } from './tarlac7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tarlac7PageRoutingModule
  ],
  declarations: [Tarlac7Page]
})
export class Tarlac7PageModule {}
