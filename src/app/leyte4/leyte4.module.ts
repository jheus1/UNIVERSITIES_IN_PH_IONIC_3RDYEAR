import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyte4PageRoutingModule } from './leyte4-routing.module';

import { Leyte4Page } from './leyte4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyte4PageRoutingModule
  ],
  declarations: [Leyte4Page]
})
export class Leyte4PageModule {}
