import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sarangani4PageRoutingModule } from './sarangani4-routing.module';

import { Sarangani4Page } from './sarangani4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sarangani4PageRoutingModule
  ],
  declarations: [Sarangani4Page]
})
export class Sarangani4PageModule {}
