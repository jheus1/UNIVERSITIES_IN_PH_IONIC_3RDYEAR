import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bulacan1PageRoutingModule } from './bulacan1-routing.module';

import { Bulacan1Page } from './bulacan1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bulacan1PageRoutingModule
  ],
  declarations: [Bulacan1Page]
})
export class Bulacan1PageModule {}
