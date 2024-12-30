import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasig10PageRoutingModule } from './pasig10-routing.module';

import { Pasig10Page } from './pasig10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasig10PageRoutingModule
  ],
  declarations: [Pasig10Page]
})
export class Pasig10PageModule {}
