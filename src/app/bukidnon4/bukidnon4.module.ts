import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bukidnon4PageRoutingModule } from './bukidnon4-routing.module';

import { Bukidnon4Page } from './bukidnon4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bukidnon4PageRoutingModule
  ],
  declarations: [Bukidnon4Page]
})
export class Bukidnon4PageModule {}
