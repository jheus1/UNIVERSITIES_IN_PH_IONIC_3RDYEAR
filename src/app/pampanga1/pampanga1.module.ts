import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pampanga1PageRoutingModule } from './pampanga1-routing.module';

import { Pampanga1Page } from './pampanga1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pampanga1PageRoutingModule
  ],
  declarations: [Pampanga1Page]
})
export class Pampanga1PageModule {}
