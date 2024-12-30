import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aklan1PageRoutingModule } from './aklan1-routing.module';

import { Aklan1Page } from './aklan1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aklan1PageRoutingModule
  ],
  declarations: [Aklan1Page]
})
export class Aklan1PageModule {}
