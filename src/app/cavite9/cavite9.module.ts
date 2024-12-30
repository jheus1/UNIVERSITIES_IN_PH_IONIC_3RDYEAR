import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cavite9PageRoutingModule } from './cavite9-routing.module';

import { Cavite9Page } from './cavite9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cavite9PageRoutingModule
  ],
  declarations: [Cavite9Page]
})
export class Cavite9PageModule {}
