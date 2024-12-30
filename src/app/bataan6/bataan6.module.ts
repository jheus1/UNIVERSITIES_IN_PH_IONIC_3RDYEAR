import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bataan6PageRoutingModule } from './bataan6-routing.module';

import { Bataan6Page } from './bataan6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bataan6PageRoutingModule
  ],
  declarations: [Bataan6Page]
})
export class Bataan6PageModule {}
