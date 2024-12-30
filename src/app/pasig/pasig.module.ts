import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasigPageRoutingModule } from './pasig-routing.module';

import { PasigPage } from './pasig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasigPageRoutingModule
  ],
  declarations: [PasigPage]
})
export class PasigPageModule {}
