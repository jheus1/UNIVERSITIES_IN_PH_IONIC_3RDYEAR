import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bukidnon6PageRoutingModule } from './bukidnon6-routing.module';

import { Bukidnon6Page } from './bukidnon6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bukidnon6PageRoutingModule
  ],
  declarations: [Bukidnon6Page]
})
export class Bukidnon6PageModule {}
