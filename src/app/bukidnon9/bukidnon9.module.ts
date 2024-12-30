import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bukidnon9PageRoutingModule } from './bukidnon9-routing.module';

import { Bukidnon9Page } from './bukidnon9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bukidnon9PageRoutingModule
  ],
  declarations: [Bukidnon9Page]
})
export class Bukidnon9PageModule {}
