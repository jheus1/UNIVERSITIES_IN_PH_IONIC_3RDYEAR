import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bukidnon10PageRoutingModule } from './bukidnon10-routing.module';

import { Bukidnon10Page } from './bukidnon10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bukidnon10PageRoutingModule
  ],
  declarations: [Bukidnon10Page]
})
export class Bukidnon10PageModule {}
