import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Albay1PageRoutingModule } from './albay1-routing.module';

import { Albay1Page } from './albay1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Albay1PageRoutingModule
  ],
  declarations: [Albay1Page]
})
export class Albay1PageModule {}
