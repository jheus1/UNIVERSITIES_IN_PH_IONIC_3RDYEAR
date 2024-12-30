import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Albay2PageRoutingModule } from './albay2-routing.module';

import { Albay2Page } from './albay2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Albay2PageRoutingModule
  ],
  declarations: [Albay2Page]
})
export class Albay2PageModule {}
