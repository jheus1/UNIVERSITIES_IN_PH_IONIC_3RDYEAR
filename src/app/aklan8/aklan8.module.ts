import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aklan8PageRoutingModule } from './aklan8-routing.module';

import { Aklan8Page } from './aklan8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aklan8PageRoutingModule
  ],
  declarations: [Aklan8Page]
})
export class Aklan8PageModule {}
