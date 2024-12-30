import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Roblon2PageRoutingModule } from './roblon2-routing.module';

import { Roblon2Page } from './roblon2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Roblon2PageRoutingModule
  ],
  declarations: [Roblon2Page]
})
export class Roblon2PageModule {}
