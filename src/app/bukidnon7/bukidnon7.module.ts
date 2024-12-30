import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bukidnon7PageRoutingModule } from './bukidnon7-routing.module';

import { Bukidnon7Page } from './bukidnon7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bukidnon7PageRoutingModule
  ],
  declarations: [Bukidnon7Page]
})
export class Bukidnon7PageModule {}
