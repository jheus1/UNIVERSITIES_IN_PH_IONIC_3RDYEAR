import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tarlac3PageRoutingModule } from './tarlac3-routing.module';

import { Tarlac3Page } from './tarlac3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tarlac3PageRoutingModule
  ],
  declarations: [Tarlac3Page]
})
export class Tarlac3PageModule {}
