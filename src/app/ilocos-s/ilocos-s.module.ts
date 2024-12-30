import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosSPageRoutingModule } from './ilocos-s-routing.module';

import { IlocosSPage } from './ilocos-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosSPageRoutingModule
  ],
  declarations: [IlocosSPage]
})
export class IlocosSPageModule {}
