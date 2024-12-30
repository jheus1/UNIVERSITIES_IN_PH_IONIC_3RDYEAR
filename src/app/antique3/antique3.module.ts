import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Antique3PageRoutingModule } from './antique3-routing.module';

import { Antique3Page } from './antique3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Antique3PageRoutingModule
  ],
  declarations: [Antique3Page]
})
export class Antique3PageModule {}
