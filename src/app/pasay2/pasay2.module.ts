import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasay2PageRoutingModule } from './pasay2-routing.module';

import { Pasay2Page } from './pasay2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasay2PageRoutingModule
  ],
  declarations: [Pasay2Page]
})
export class Pasay2PageModule {}
