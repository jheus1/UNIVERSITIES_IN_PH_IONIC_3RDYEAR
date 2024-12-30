import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bukidnon2PageRoutingModule } from './bukidnon2-routing.module';

import { Bukidnon2Page } from './bukidnon2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bukidnon2PageRoutingModule
  ],
  declarations: [Bukidnon2Page]
})
export class Bukidnon2PageModule {}
