import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasay5PageRoutingModule } from './pasay5-routing.module';

import { Pasay5Page } from './pasay5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasay5PageRoutingModule
  ],
  declarations: [Pasay5Page]
})
export class Pasay5PageModule {}
