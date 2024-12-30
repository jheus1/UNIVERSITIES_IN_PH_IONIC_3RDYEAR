import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bulacan2PageRoutingModule } from './bulacan2-routing.module';

import { Bulacan2Page } from './bulacan2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bulacan2PageRoutingModule
  ],
  declarations: [Bulacan2Page]
})
export class Bulacan2PageModule {}
