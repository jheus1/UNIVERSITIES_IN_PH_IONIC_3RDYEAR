import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaUPageRoutingModule } from './la-u-routing.module';

import { LaUPage } from './la-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaUPageRoutingModule
  ],
  declarations: [LaUPage]
})
export class LaUPageModule {}
