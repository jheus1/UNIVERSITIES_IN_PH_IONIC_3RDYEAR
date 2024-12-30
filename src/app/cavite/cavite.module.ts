import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CavitePageRoutingModule } from './cavite-routing.module';

import { CavitePage } from './cavite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CavitePageRoutingModule
  ],
  declarations: [CavitePage]
})
export class CavitePageModule {}
