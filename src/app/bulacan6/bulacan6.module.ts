import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bulacan6PageRoutingModule } from './bulacan6-routing.module';

import { Bulacan6Page } from './bulacan6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bulacan6PageRoutingModule
  ],
  declarations: [Bulacan6Page]
})
export class Bulacan6PageModule {}
