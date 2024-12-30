import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Antique1PageRoutingModule } from './antique1-routing.module';

import { Antique1Page } from './antique1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Antique1PageRoutingModule
  ],
  declarations: [Antique1Page]
})
export class Antique1PageModule {}
