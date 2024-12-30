import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sarangani2PageRoutingModule } from './sarangani2-routing.module';

import { Sarangani2Page } from './sarangani2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sarangani2PageRoutingModule
  ],
  declarations: [Sarangani2Page]
})
export class Sarangani2PageModule {}
