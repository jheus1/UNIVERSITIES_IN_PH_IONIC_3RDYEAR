import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sarangani6PageRoutingModule } from './sarangani6-routing.module';

import { Sarangani6Page } from './sarangani6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sarangani6PageRoutingModule
  ],
  declarations: [Sarangani6Page]
})
export class Sarangani6PageModule {}
