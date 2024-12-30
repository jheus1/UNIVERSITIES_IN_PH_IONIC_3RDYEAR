import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bukidnon1PageRoutingModule } from './bukidnon1-routing.module';

import { Bukidnon1Page } from './bukidnon1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bukidnon1PageRoutingModule
  ],
  declarations: [Bukidnon1Page]
})
export class Bukidnon1PageModule {}
