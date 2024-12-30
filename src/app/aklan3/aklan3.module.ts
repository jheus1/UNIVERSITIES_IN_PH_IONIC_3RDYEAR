import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aklan3PageRoutingModule } from './aklan3-routing.module';

import { Aklan3Page } from './aklan3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aklan3PageRoutingModule
  ],
  declarations: [Aklan3Page]
})
export class Aklan3PageModule {}
