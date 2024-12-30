import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Antique9PageRoutingModule } from './antique9-routing.module';

import { Antique9Page } from './antique9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Antique9PageRoutingModule
  ],
  declarations: [Antique9Page]
})
export class Antique9PageModule {}
