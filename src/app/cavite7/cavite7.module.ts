import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cavite7PageRoutingModule } from './cavite7-routing.module';

import { Cavite7Page } from './cavite7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cavite7PageRoutingModule
  ],
  declarations: [Cavite7Page]
})
export class Cavite7PageModule {}
