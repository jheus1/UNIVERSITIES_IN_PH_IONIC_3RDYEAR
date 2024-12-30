import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aklan9PageRoutingModule } from './aklan9-routing.module';

import { Aklan9Page } from './aklan9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aklan9PageRoutingModule
  ],
  declarations: [Aklan9Page]
})
export class Aklan9PageModule {}
