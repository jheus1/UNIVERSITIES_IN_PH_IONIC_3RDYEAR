import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sarangani9PageRoutingModule } from './sarangani9-routing.module';

import { Sarangani9Page } from './sarangani9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sarangani9PageRoutingModule
  ],
  declarations: [Sarangani9Page]
})
export class Sarangani9PageModule {}
