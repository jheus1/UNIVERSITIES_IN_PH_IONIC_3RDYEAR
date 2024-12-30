import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PampangaPageRoutingModule } from './pampanga-routing.module';

import { PampangaPage } from './pampanga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PampangaPageRoutingModule
  ],
  declarations: [PampangaPage]
})
export class PampangaPageModule {}
