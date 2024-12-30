import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leyte1PageRoutingModule } from './leyte1-routing.module';

import { Leyte1Page } from './leyte1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leyte1PageRoutingModule
  ],
  declarations: [Leyte1Page]
})
export class Leyte1PageModule {}
