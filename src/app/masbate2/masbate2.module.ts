import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Masbate2PageRoutingModule } from './masbate2-routing.module';

import { Masbate2Page } from './masbate2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Masbate2PageRoutingModule
  ],
  declarations: [Masbate2Page]
})
export class Masbate2PageModule {}
