import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasig4PageRoutingModule } from './pasig4-routing.module';

import { Pasig4Page } from './pasig4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasig4PageRoutingModule
  ],
  declarations: [Pasig4Page]
})
export class Pasig4PageModule {}
