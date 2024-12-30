import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bataan1PageRoutingModule } from './bataan1-routing.module';

import { Bataan1Page } from './bataan1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bataan1PageRoutingModule
  ],
  declarations: [Bataan1Page]
})
export class Bataan1PageModule {}
