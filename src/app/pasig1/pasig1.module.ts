import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasig1PageRoutingModule } from './pasig1-routing.module';

import { Pasig1Page } from './pasig1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasig1PageRoutingModule
  ],
  declarations: [Pasig1Page]
})
export class Pasig1PageModule {}
