import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CebuPageRoutingModule } from './cebu-routing.module';

import { CebuPage } from './cebu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CebuPageRoutingModule
  ],
  declarations: [CebuPage]
})
export class CebuPageModule {}
