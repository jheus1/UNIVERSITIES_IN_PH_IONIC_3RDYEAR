import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaranganiPageRoutingModule } from './sarangani-routing.module';

import { SaranganiPage } from './sarangani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaranganiPageRoutingModule
  ],
  declarations: [SaranganiPage]
})
export class SaranganiPageModule {}
