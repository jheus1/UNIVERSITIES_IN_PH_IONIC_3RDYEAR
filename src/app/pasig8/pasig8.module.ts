import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasig8PageRoutingModule } from './pasig8-routing.module';

import { Pasig8Page } from './pasig8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasig8PageRoutingModule
  ],
  declarations: [Pasig8Page]
})
export class Pasig8PageModule {}
