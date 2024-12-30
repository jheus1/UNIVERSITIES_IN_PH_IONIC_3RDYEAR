import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cavite1PageRoutingModule } from './cavite1-routing.module';

import { Cavite1Page } from './cavite1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cavite1PageRoutingModule
  ],
  declarations: [Cavite1Page]
})
export class Cavite1PageModule {}
