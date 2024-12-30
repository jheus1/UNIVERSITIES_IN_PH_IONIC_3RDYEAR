import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasay8PageRoutingModule } from './pasay8-routing.module';

import { Pasay8Page } from './pasay8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasay8PageRoutingModule
  ],
  declarations: [Pasay8Page]
})
export class Pasay8PageModule {}
