import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasay4PageRoutingModule } from './pasay4-routing.module';

import { Pasay4Page } from './pasay4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasay4PageRoutingModule
  ],
  declarations: [Pasay4Page]
})
export class Pasay4PageModule {}
