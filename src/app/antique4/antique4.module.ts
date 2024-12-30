import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Antique4PageRoutingModule } from './antique4-routing.module';

import { Antique4Page } from './antique4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Antique4PageRoutingModule
  ],
  declarations: [Antique4Page]
})
export class Antique4PageModule {}
