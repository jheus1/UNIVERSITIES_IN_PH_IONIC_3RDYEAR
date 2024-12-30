import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasay10PageRoutingModule } from './pasay10-routing.module';

import { Pasay10Page } from './pasay10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasay10PageRoutingModule
  ],
  declarations: [Pasay10Page]
})
export class Pasay10PageModule {}
