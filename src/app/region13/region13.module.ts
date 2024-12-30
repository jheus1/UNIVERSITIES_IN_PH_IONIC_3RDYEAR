import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region13PageRoutingModule } from './region13-routing.module';

import { Region13Page } from './region13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region13PageRoutingModule
  ],
  declarations: [Region13Page]
})
export class Region13PageModule {}
