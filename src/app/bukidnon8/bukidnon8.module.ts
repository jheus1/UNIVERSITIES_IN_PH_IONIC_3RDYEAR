import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bukidnon8PageRoutingModule } from './bukidnon8-routing.module';

import { Bukidnon8Page } from './bukidnon8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bukidnon8PageRoutingModule
  ],
  declarations: [Bukidnon8Page]
})
export class Bukidnon8PageModule {}
