import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sorsogon3PageRoutingModule } from './sorsogon3-routing.module';

import { Sorsogon3Page } from './sorsogon3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sorsogon3PageRoutingModule
  ],
  declarations: [Sorsogon3Page]
})
export class Sorsogon3PageModule {}
