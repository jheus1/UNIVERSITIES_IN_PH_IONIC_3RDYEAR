import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PangasinanPageRoutingModule } from './pangasinan-routing.module';

import { PangasinanPage } from './pangasinan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PangasinanPageRoutingModule
  ],
  declarations: [PangasinanPage]
})
export class PangasinanPageModule {}
