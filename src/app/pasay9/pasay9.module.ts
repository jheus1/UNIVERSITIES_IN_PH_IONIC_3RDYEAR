import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasay9PageRoutingModule } from './pasay9-routing.module';

import { Pasay9Page } from './pasay9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasay9PageRoutingModule
  ],
  declarations: [Pasay9Page]
})
export class Pasay9PageModule {}
