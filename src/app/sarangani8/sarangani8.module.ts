import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sarangani8PageRoutingModule } from './sarangani8-routing.module';

import { Sarangani8Page } from './sarangani8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sarangani8PageRoutingModule
  ],
  declarations: [Sarangani8Page]
})
export class Sarangani8PageModule {}
