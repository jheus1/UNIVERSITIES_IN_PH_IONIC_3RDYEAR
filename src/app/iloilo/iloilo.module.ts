import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IloiloPageRoutingModule } from './iloilo-routing.module';

import { IloiloPage } from './iloilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IloiloPageRoutingModule
  ],
  declarations: [IloiloPage]
})
export class IloiloPageModule {}
