import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyte3PageRoutingModule } from './leyte3-routing.module';

import { Leyte3Page } from './leyte3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyte3PageRoutingModule
  ],
  declarations: [Leyte3Page]
})
export class Leyte3PageModule {}
