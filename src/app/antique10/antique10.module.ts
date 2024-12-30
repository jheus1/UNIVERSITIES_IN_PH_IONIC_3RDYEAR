import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Antique10PageRoutingModule } from './antique10-routing.module';

import { Antique10Page } from './antique10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Antique10PageRoutingModule
  ],
  declarations: [Antique10Page]
})
export class Antique10PageModule {}
