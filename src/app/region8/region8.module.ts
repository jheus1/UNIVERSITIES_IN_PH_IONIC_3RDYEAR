import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Region8PageRoutingModule } from './region8-routing.module';

import { Region8Page } from './region8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Region8PageRoutingModule
  ],
  declarations: [Region8Page]
})
export class Region8PageModule {}
