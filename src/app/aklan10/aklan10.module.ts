import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aklan10PageRoutingModule } from './aklan10-routing.module';

import { Aklan10Page } from './aklan10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aklan10PageRoutingModule
  ],
  declarations: [Aklan10Page]
})
export class Aklan10PageModule {}
