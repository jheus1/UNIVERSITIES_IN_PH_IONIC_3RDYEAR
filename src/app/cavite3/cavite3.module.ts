import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cavite3PageRoutingModule } from './cavite3-routing.module';

import { Cavite3Page } from './cavite3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cavite3PageRoutingModule
  ],
  declarations: [Cavite3Page]
})
export class Cavite3PageModule {}
