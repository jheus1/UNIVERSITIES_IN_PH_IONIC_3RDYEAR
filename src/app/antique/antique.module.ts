import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntiquePageRoutingModule } from './antique-routing.module';

import { AntiquePage } from './antique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntiquePageRoutingModule
  ],
  declarations: [AntiquePage]
})
export class AntiquePageModule {}
