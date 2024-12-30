import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelnortePageRoutingModule } from './agusan-delnorte-routing.module';

import { AgusanDelnortePage } from './agusan-delnorte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelnortePageRoutingModule
  ],
  declarations: [AgusanDelnortePage]
})
export class AgusanDelnortePageModule {}
