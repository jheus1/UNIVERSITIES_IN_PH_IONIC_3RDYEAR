import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Biliran10PageRoutingModule } from './biliran10-routing.module';

import { Biliran10Page } from './biliran10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Biliran10PageRoutingModule
  ],
  declarations: [Biliran10Page]
})
export class Biliran10PageModule {}
