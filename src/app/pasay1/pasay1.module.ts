import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasay1PageRoutingModule } from './pasay1-routing.module';

import { Pasay1Page } from './pasay1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasay1PageRoutingModule
  ],
  declarations: [Pasay1Page]
})
export class Pasay1PageModule {}
